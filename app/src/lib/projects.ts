import type { Project } from "$lib/types";


export type TagMapType = {
    [key: string]: string;
};

export const tagMap : TagMapType = {
    '#gui': '#28a6aa',
    '#systems': '#fa901d',
    '#hackathon': '#f94e95',
    "#web-dev": "#cc76e5",
};

export let projectDescs: Project[] = [
    {
        title: 'Compiler Explorer',
        route: 'compiler',
        desc: 'A visual component to my teams Compiler',
        date: "Fall 2022",
        longDesc: 'A visual window into NAGC (Not another Gazprea Compiler), a strongly typed vector langauge compiler implemented with ANTLR and LLVM-IR.',
        imgLink: '',
        guiLink: '',
        tags: ["#gui", "#systems"]
    },
    {
        title: 'Regex Engine',
        route: 'regex-engine',
        imgLink: "/images/preview-regex.png",
        guiLink: "https://justinmeimar.com/regex-www",
        desc: 'A regular expression engine based on the formal closure properties of langauges',
        longDesc: `
            A simplified regular expression engine written in C++, based on the formal closure properties of regular lanaguages. Once expression is supplied by the user, the string enters a compiler
            pipeline consiting of tokenization, parsing, AST generation, NFA generation and NFA execution stage. The grammar is designed such that each symbol is one character, making tokenization simple and an
            LL(1) recursive descent parser sufficient. Once the AST is generated, we walk the tree to generate an NFA. Similar to a reverse polish notation calculator, when an operator is encountered, the two top
            values on the stack are popped, the operator is applied and the result is pushed back onto the stack. Finally, a breadth first search of the NFA is implemented to check available state transitions given
            the input string and current position. 
        `,
        // longDesc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            // Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
        tags: ["#gui", "#systems"]
    },
    {
        title: 'Recurrence Trees',
        route: 'tree',
        desc: 'Using recurrence relations with a hint of randomness to generate nature',
        tags: ["#gui", "#web-dev"]
    },
    {
        title: 'Semantic Journal',
        route: 'semantic-journal',
        desc: 'A journal that can be chatted with! Developed at HackED 2024',
        date: 'January 2024',
        longDesc: `
            Creating and keep track of progress towards measureable goals is hard. 
            Luckily Semantic Samantha is here to help you in achieving you goals!
            When you give Samantha a goal, she will decide on three metrics that
            you will keep track of together. Each day, you can then create a journal 
            entry where you talk about your efforts. She will handle all the evaluation
            for you. At any time, you can chat with her about how your progress is going.
        `,
        technologies: ['flask', 'react', 'openai'],
        imgLink: '/images/semantic-journal.png',
        guiLink: "https://github.com/JustinMeimar/semantic-journal",
        tags: ["#hackathon", "#web-dev"]
    },
    {
        title: 'Home Server',
        route: 'home-server',
        desc: 'The server you\'re connected to... Fully equipped for SSH and HTTPS',
        imgLink: "/images/homeserver.jpg",
        guiLink: "https://github.com/JustinMeimar/www-justin",
        date: "May 2023 - Present",
        technologies: ["nginx", "ssh", "flask", "svelte"],
        tags: ["#systems"],
        longDesc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
    },
    {
        title: 'B+ Tree',
        route: 'btree',
        desc: 'A database index implemnentation in C++',
        date: 'December 2023',
        longDesc: 'A C++ implementation of a B+ Tree, a common database index. The implementation is benchmarked and testsed with up to 100,000,000 random inserts and lookups.',
        imgLink: '/images/btree.jpg',
        guiLink: "https://github.com/JustinMeimar/btree",
        technologies: ["C++"],
        tags: ["#systems"]
    },
    {
        title: 'Green Thread Library',
        route: 'tree',
        desc: 'User-level threads, running in pure C!',
        imgLink: '/images/btree.jpg',
        guiLink: "https://github.com/JustinMeimar/btree",
        tags: ["#systems"]
    },
    {
        title: '8-Bit CPU Emulator',
        route: 'tree',
        desc: 'Using recurrence relations with a hint of randomness to generate nature',
        imgLink: '/images/btree.jpg',
        guiLink: "https://github.com/JustinMeimar/btree",
        tags: ["#systems"]
    },
    {
        title: 'Real AI',
        route: 'semantic-journal',
        desc: 'Developed for HackGPT Edmonton 2023 - A real estate listings frontend\
        with semantic search powered by openAI',
        date: 'January 2024',
        imgLink: '/images/semantic-journal.png',
        guiLink: "https://github.com/JustinMeimar/semantic-journal",
        tags: ["#hackathon", "#web-dev"]
    },
];