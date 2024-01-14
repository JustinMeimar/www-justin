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
        tags: ["#gui", "#systems"]
    },
    {
        title: 'Regex Engine',
        route: 'regex-engine',
        desc: 'A regular expression engine based on the formal closure properties of langauges',
        tags: ["#gui", "#systems"]
    },
    {
        title: 'Semantic Journal',
        route: 'semantic-journal',
        desc: 'A journal that can be chatted with! Developed at HackED 2024',
        tags: ["#hackathon", "#web-dev"]
    },
    {
        title: 'Home Server',
        route: 'home-server',
        desc: 'The server you\'re connected to... Fully equipped for SSH and HTTPS',
        tags: ["#systems", "#hackathon", "#web-dev", "#gui"],
        date: "May 2023 - Present",
        technologies: ["nginx", "ssh", "flask", "svelte"],
        imgLink: "projects-home-server.png",
        longDesc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
    },
    {
        title: 'B+ Tree',
        route: 'btree',
        desc: 'A database index implemnentation in C++',
        tags: ["#systems"]
    },
    {
        title: 'Recurrence Trees',
        route: 'tree',
        desc: 'Using recurrence relations with a hint of randomness to generate nature',
        tags: ["#gui", "#web-dev"]
    },
    {
        title: 'Green Thread Library',
        route: 'tree',
        desc: 'User-level threads, running in pure C!',
        tags: ["#systems"]
    },
    {
        title: '8-Bit CPU Emulator',
        route: 'tree',
        desc: 'Using recurrence relations with a hint of randomness to generate nature',
        tags: ["#systems"]
    },
];