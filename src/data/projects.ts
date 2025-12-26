
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
    }
];
