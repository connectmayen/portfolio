
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
        title: "Project Title 1",
        role: "Editor",
        isFeatured: true,
        category: "documentary",
        description: "Short description of the project and your role",
    },
    {
        id: "W18ZtOAh2Po",
        title: "Project Title 2",
        role: "Editor",
        isFeatured: true,
        category: "documentary",
        description: "Short description of the project and your role",
    },
    {
        id: "8qJWjUET4Cc",
        title: "Project Title 3",
        role: "Editor",
        isFeatured: true,
        category: "documentary",
        description: "Short description of the project and your role",
    },
    {
        id: "QliygfkIAGg",
        title: "Project Title 4",
        role: "Editor",
        isFeatured: true,
        category: "podcast",
        description: "Short description of the project and your role",
    },
    {
        id: "Jw8r_eZKfnc",
        title: "Project Title 5",
        role: "Editor",
        isFeatured: true,
        category: "talking-head",
        description: "Short description of the project and your role",
    },
    {
        id: "yeKVOrVqhzc",
        title: "Project Title 6",
        role: "Editor",
        isFeatured: true,
        category: "talking-head",
        description: "Short description of the project and your role",
    },
    {
        id: "XmIielabPY4",
        title: "Project Title 7",
        role: "Editor",
        isFeatured: false,
        category: "talking-head",
        description: "Short description of the project and your role",
    }
];
