import type { Project } from "$lib/types";


export type TagMapType = {
    [key: string]: string;
};

export const tagMap : TagMapType = {
    '#gui': '#28a6aa',
    '#systems': '#fa9014',
    '#hackathon': '#f94e95',
    "#web-dev": "#cc76e5"
};

export let projectDescs: Project[] = [
    {
        title: 'Compiler Explorer',
        route: 'compiler',
        desc: 'A visual component to my teams Compiler',
        imgLink: 'path/to/compiler-explorer-image.jpg',
        date: "June 2023",
        tags: ["#gui", "#systems"]
    },
    {
        title: 'Regex Engine',
        route: 'regex-engine',
        desc: 'A regular expression engine based on the formal closure properties of langauges',
        imgLink: 'path/to/regex-engine-image.jpg',
        date: "May 2023",
        tags: ["#gui", "#systems"]
    },
    {
        title: 'Semantic Journal',
        route: 'semantic-journal',
        desc: 'A journal that can be chatted with! Developed at HackED 2024',
        imgLink: 'path/to/regex-engine-image.jpg',
        date: "May 2023",
        tags: ["#hackathon", "#web-dev"]
    },
    {
        title: 'Home Server',
        route: 'home-server',
        desc: 'This server... Fully Equipped for SSH and HTTPS',
        imgLink: 'path/to/regex-engine-image.jpg',
        date: "May 2023",
        tags: ["#systems"]
    },
    {
        title: 'B+ Tree',
        route: 'btree',
        desc: 'A database index implemnentation in C++',
        imgLink: 'path/to/regex-engine-image.jpg',
        date: "May 2023",
        tags: ["#systems"]
    },
    {
        title: 'Recurrence Trees',
        route: 'tree',
        desc: 'Using recurrence relations with a hint of randomness to generate nature',
        imgLink: 'path/to/regex-engine-image.jpg',
        date: "May 2023",
        tags: ["#gui", "#web-dev"]
    },
    {
        title: 'Green Thread Library',
        route: '/',
        desc: 'User-level threads, running in pure C!',
        imgLink: 'path/to/regex-engine-image.jpg',
        date: "",
        tags: ["#systems"]
    },
    {
        title: '8-Bit CPU Emulator',
        route: 'tree',
        desc: 'Using recurrence relations with a hint of randomness to generate nature',
        imgLink: 'path/to/regex-engine-image.jpg',
        date: "May 2023",
        tags: ["#systems"]
    },
];