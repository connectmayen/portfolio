# Video Editor Portfolio - Nur Al Mahmud Mayen

A modern, high-performance Next.js portfolio showcasing video editing work, documentary-style content, and visual storytelling expertise.

## 🎬 Features

- **Dynamic Project Showcase** - YouTube video integration with oEmbed metadata
- **Category Filtering** - Filter projects by Documentary, Podcast, Talking Head, Shorts
- **SEO Optimized** - Full Open Graph and Twitter Card support
- **Accessibility First** - ARIA labels, keyboard navigation, reduced motion support
- **Blog System** - Built-in blog for sharing insights on video editing
- **Contact Form** - Integrated Web3Forms for easy communication
- **Responsive Design** - Beautiful on all devices
- **Performance Focused** - Optimized images, static generation, fast loading

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- Web3Forms API key (get one free at [web3forms.com](https://web3forms.com/))

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Add your Web3Forms API key to `.env.local`:
```
NEXT_PUBLIC_WEB3FORMS_KEY=your_api_key_here
```

5. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your portfolio.

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/              # Next.js app directory
│   │   ├── blog/        # Blog pages
│   │   ├── portfolio/   # Full portfolio view
│   │   ├── layout.tsx   # Root layout with SEO
│   │   ├── page.tsx     # Home page
│   │   └── globals.css  # Global styles
│   ├── components/       # React components
│   │   ├── Hero.tsx
│   │   ├── MyWork.tsx
│   │   ├── ProjectCard.tsx
│   │   └── ...
│   ├── data/            # Data files
│   │   └── projects.ts  # Project definitions
│   └── lib/             # Utility functions
├── public/              # Static assets
└── package.json
```

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Customization

### Adding Projects

Edit `src/data/projects.ts`:

```typescript
{
  id: "youtube-video-id",
  title: "Project Title",
  role: "Editor",
  isFeatured: true,
  category: "documentary",
  description: "Project description"
}
```

### Adding Blog Posts

Edit `src/app/data.ts` and add to the `blogPosts` array.

### Updating Site Metadata

Edit `src/app/layout.tsx` to update:
- Site title and description
- Open Graph images
- Social media metadata
- Update `https://yoursite.com` with your actual domain

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Add `NEXT_PUBLIC_WEB3FORMS_KEY` environment variable
4. Deploy!

### Other Platforms

Build the production bundle:
```bash
npm run build
```

The output will be in `.next/` directory. Follow your platform's deployment guide for Next.js apps.

## 🔧 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_WEB3FORMS_KEY` | Web3Forms API key for contact form | Yes |

## 📝 Tech Stack

- **Framework:** Next.js 16.1
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Forms:** Web3Forms

## ✨ Key Features

### SEO Optimization
- Dynamic sitemap generation
- Robots.txt configuration
- Open Graph tags
- Twitter Card metadata
- Per-page metadata customization

### Accessibility
- ARIA labels on interactive elements
- Keyboard navigation support
- Reduced motion support
- Semantic HTML
- Focus management in modals

### Performance
- Next.js Image optimization
- Static page generation
- Lazy loading
- Optimized animations
- Font optimization

## 📄 License

This project is open source and available under the MIT License.

## 📧 Contact

Nur Al Mahmud Mayen
- Email: connect.mayen@gmail.com
- Portfolio: [Your Portfolio URL]

---

Built with ❤️ using Next.js and TypeScript
