
const videoId = "AvgFmr-ckpk";
const url = `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${videoId}&format=json`;

console.log(`Fetching ${url}...`);

fetch(url)
  .then(async (res) => {
    console.log(`Status: ${res.status}`);
    if (!res.ok) {
        console.log("Error Body:", await res.text());
    } else {
        const data = await res.json();
        console.log("Success:", data);
    }
  })
  .catch((err) => {
    console.error("Fetch Error:", err);
  });
