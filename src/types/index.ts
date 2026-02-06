// Centralized TypeScript interfaces

export interface NavLink {
    id: string;
    label: string;
}

export interface Project {
    id: string;
    title: string;
    role: string;
    isFeatured: boolean;
    category: 'documentary' | 'podcast' | 'talking-head' | 'shorts';
    description?: string;
}

export interface BlogPost {
    id: number;
    title: string;
    description: string;
    link: string;
    image: string;
    content: BlogContentBlock[];
}

export interface BlogContentBlock {
    type: 'paragraph' | 'heading';
    text: string;
}

export interface Tool {
    name: string;
    icon: string;
}

export interface VideoData {
    title: string;
    author_name: string;
    thumbnail_url: string;
}

export interface IconLayer {
    id: string;
    icon: string;
    x: number;
    y: number;
    rotation: number;
    size: number;
    delay: number;
}
