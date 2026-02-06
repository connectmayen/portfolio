
export interface Project {
    id: string; // YouTube ID
    title: string;
    role: string;
    isFeatured: boolean;
    category: 'documentary' | 'podcast' | 'talking-head' | 'shorts';
    description?: string;
}

export const projects: Project[] = [
    {
        id: "HfDRtsGAgZI",
        title: "Podcast Video 1",
        role: "Editor",
        isFeatured: true,
        category: "podcast",
        description: "Editor for this podcast video",
    },
    {
        id: "Ek5ZRnfhtHg",
        title: "Podcast Video 2",
        role: "Editor",
        isFeatured: true,
        category: "podcast",
        description: "Editor for this podcast video",
    },
    {
        id: "SaeU0WOML7Q",
        title: "Podcast Video 3",
        role: "Editor",
        isFeatured: true,
        category: "podcast",
        description: "Editor for this podcast video",
    },
    {
        id: "BBCp17H0M0M",
        title: "Podcast Video 4",
        role: "Editor",
        isFeatured: true,
        category: "podcast",
        description: "Editor for this podcast video",
    },
    {
        id: "iPWI1tE-5TE",
        title: "Talking Head Video 1",
        role: "Editor",
        isFeatured: true,
        category: "talking-head",
        description: "Editor for this talking head video",
    },
    {
        id: "4qJ4G5EhHLk",
        title: "Talking Head Video 2",
        role: "Editor",
        isFeatured: true,
        category: "talking-head",
        description: "Editor for this talking head video",
    },
    {
        id: "LvjxOzQMSa4",
        title: "Talking Head Video 3",
        role: "Editor",
        isFeatured: true,
        category: "talking-head",
        description: "Editor for this talking head video",
    },
    {
        id: "Ue5YZ1aUIdY",
        title: "Talking Head Video 4",
        role: "Editor",
        isFeatured: true,
        category: "talking-head",
        description: "Editor for this talking head video",
    },
    {
        id: "aQUjg5DVuMI",
        title: "Talking Head Video 5",
        role: "Editor",
        isFeatured: true,
        category: "talking-head",
        description: "Editor for this talking head video",
    },
    {
        id: "qbKrnOPuJsM",
        title: "Documentary Project",
        role: "Editor",
        isFeatured: true,
        category: "documentary",
        description: "Documentary video editing project",
    },
    {
        id: "W18ZtOAh2Po",
        title: "Documentary Feature",
        role: "Editor",
        isFeatured: true,
        category: "documentary",
        description: "Documentary video editing project",
    },
    {
        id: "8qJWjUET4Cc",
        title: "Documentary Story",
        role: "Editor",
        isFeatured: true,
        category: "documentary",
        description: "Documentary video editing project",
    },
    {
        id: "QliygfkIAGg",
        title: "Podcast Episode",
        role: "Editor",
        isFeatured: true,
        category: "podcast",
        description: "Podcast video editing project",
    },
    {
        id: "Jw8r_eZKfnc",
        title: "Talking Head Video",
        role: "Editor",
        isFeatured: true,
        category: "talking-head",
        description: "Talking head video editing project",
    },
    {
        id: "yeKVOrVqhzc",
        title: "Interview Edit",
        role: "Editor",
        isFeatured: true,
        category: "talking-head",
        description: "Talking head video editing project",
    },
    {
        id: "XmIielabPY4",
        title: "Content Video",
        role: "Editor",
        isFeatured: false,
        category: "talking-head",
        description: "Talking head video editing project",
    }
];
