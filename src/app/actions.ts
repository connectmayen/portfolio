'use server'

export async function getVideoData(videoId: string) {
    try {
        const url = `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${videoId}&format=json`;

        const res = await fetch(url, {
            next: { revalidate: 3600 } // Cache for 1 hour instead of 24 hours for better performance
        });

        if (!res.ok) {
            console.error(`[ServerAction] Failed to fetch oembed for ${videoId}: ${res.status}`);
            return null;
        }

        const data = await res.json();
        return {
            title: data.title,
            author_name: data.author_name,
            thumbnail_url: data.thumbnail_url
        };
    } catch (error) {
        console.error("[ServerAction] Error fetching video data:", error);
        return null;
    }
}

// New function to fetch all video data in parallel with timeout
export async function getAllVideoData(videoIds: string[]) {
    try {
        // Add timeout to prevent hanging
        const timeoutPromise = new Promise((_, reject) => 
            setTimeout(() => reject(new Error('Timeout')), 5000)
        );
        
        const fetchPromise = Promise.all(
            videoIds.map(id => getVideoData(id))
        );
        
        const results = await Promise.race([fetchPromise, timeoutPromise]) as any[];
        
        // Create a map of videoId -> data
        const dataMap = new Map();
        videoIds.forEach((id, index) => {
            if (results[index]) {
                dataMap.set(id, results[index]);
            }
        });

        return dataMap;
    } catch (error) {
        console.error("[ServerAction] Error in getAllVideoData:", error);
        return new Map(); // Return empty map on error
    }
}
