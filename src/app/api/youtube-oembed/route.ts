import { NextResponse } from "next/server";

export const runtime = "edge";
export const revalidate = 3600;

type OEmbedData = {
  title: string;
  author_name: string;
  thumbnail_url: string;
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const idsParam = searchParams.get("ids")?.trim();
  const idParam = searchParams.get("id")?.trim();

  const ids = (idsParam ? idsParam.split(",") : idParam ? [idParam] : [])
    .map((s) => s.trim())
    .filter(Boolean);

  if (ids.length === 0) {
    return NextResponse.json({}, { status: 200 });
  }

  // simple guardrails
  const uniqueIds = Array.from(new Set(ids)).slice(0, 30);

  const results = await Promise.allSettled(
    uniqueIds.map(async (videoId) => {
      const url = `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${videoId}&format=json`;
      const res = await fetch(url, { next: { revalidate } });
      if (!res.ok) return [videoId, null] as const;
      const data = (await res.json()) as OEmbedData;
      return [videoId, data] as const;
    })
  );

  const out: Record<string, OEmbedData> = {};
  for (const r of results) {
    if (r.status !== "fulfilled") continue;
    const [id, data] = r.value;
    if (data) out[id] = data;
  }

  return NextResponse.json(out, { status: 200 });
}
