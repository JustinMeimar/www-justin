export type Project = {

    // for the home page card
    title: string,
    desc: string, 
    route: string, 
    tags: string[]

    // for project page 
    date?: string,
    guiLink?: string,
    imgLink?: string,
    longDesc?: string,
    technologies?: string[], 
};