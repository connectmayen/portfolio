// Script to fetch YouTube oEmbed metadata at build time
// This eliminates client-side API calls and improves performance

const fs = require('fs');
const path = require('path');

// Import projects - adjust path as needed
const projectsPath = path.join(__dirname, '..', 'src', 'data', 'projects.ts');
const outputPath = path.join(__dirname, '..', 'src', 'data', 'youtube-metadata.json');

async function fetchYouTubeMetadata(videoId) {
  const url = `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${videoId}&format=json`;
  
  try {
    const response = await fetch(url);
    if (!response.ok) {
      console.warn(`Failed to fetch metadata for ${videoId}: ${response.status}`);
      return null;
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching metadata for ${videoId}:`, error.message);
    return null;
  }
}

async function main() {
  console.log('🎬 Fetching YouTube metadata...\n');

  // Read and parse projects file
  const projectsContent = fs.readFileSync

(projectsPath, 'utf-8');
  
  // Extract video IDs using regex
  const idMatches = projectsContent.match(/id:\s*"([^"]+)"/g);
  if (!idMatches) {
    console.error('No video IDs found in projects.ts');
    process.exit(1);
  }

  const videoIds = idMatches.map(match => match.match(/"([^"]+)"/)[1]);
  console.log(`Found ${videoIds.length} video IDs\n`);

  // Fetch metadata for all videos
  const metadata = {};
  for (const videoId of videoIds) {
    console.log(`Fetching ${videoId}...`);
    const data = await fetchYouTubeMetadata(videoId);
    
    if (data) {
      metadata[videoId] = {
        title: data.title,
        author_name: data.author_name,
        thumbnail_url: data.thumbnail_url,
      };
      console.log(`✓ ${data.title}\n`);
    } else {
      // Provide fallback
      metadata[videoId] = {
        title: 'Video Title',
        author_name: 'Channel Name',
        thumbnail_url: `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`,
      };
      console.log(`⚠ Using fallback for ${videoId}\n`);
    }

    // Rate limiting - wait 100ms between requests
    await new Promise(resolve => setTimeout(resolve, 100));
  }

  // Write to JSON file
  const dataDir = path.dirname(outputPath);
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }

  fs.writeFileSync(outputPath, JSON.stringify(metadata, null, 2));
  console.log(`\n✅ Metadata saved to ${outputPath}`);
  console.log(`📊 Total videos: ${Object.keys(metadata).length}`);
}

main().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});
