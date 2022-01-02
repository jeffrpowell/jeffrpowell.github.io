export interface PortfolioItem {
    title: string,
    summary: string,
    description: string,
}

export interface PortfolioRepo extends PortfolioItem {
    url: string,
    image: string,
    techTags: string[];
}

export interface PortfolioVideo extends PortfolioItem {
    id: string
    type: "talk"
}

export const PORTFOLIO_VIDEOS: PortfolioVideo[] = [
    {
        title: "Brain Care",
        summary: "A 30-minute talk on the importance of caring for your mental health.",
        description: "A 30-minute talk on the importance of caring for your mental health.",
        id: "K2HX3G-6Le4",
        type: "talk"
    },
    {
        title: "Team Lead 101",
        summary: "A 30-minute talk teaching engineers how to think like a manager.",
        description: "A 30-minute talk teaching engineers how to think like a manager.",
        id: "9ZSD3Ka8-xw",
        type: "talk"
    }
];

export const PORTFOLIO_REPOS: PortfolioRepo[] = [
    {
        title: "This portfolio website",
        summary: "This website is published as an open-source project.",
        description: "This website is published as an open-source project.",
        url: "https://github.com/jeffrpowell/jeffrpowell.github.io",
        image: "repo_website.jpg",
        techTags: ["Angular", "Javascript", "HTML", "SASS", "CSS", "GitHub", "D3.js"]
    },
    {
        title: "DosBackup",
        summary: "Multi-threaded Windows backup solution",
        description: "I needed a program that could manage copying over files to my backup drive.",
        url: "https://github.com/jeffrpowell/dosbackup",
        image: "repo_website.jpg",
        techTags: ["Java", "Swing", "Threads", "SwingWorker", "ForkJoin"]
    }
]