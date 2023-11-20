export interface PortfolioItem {
    title: string,
    summary: string,
    description: string,
}

export interface PortfolioArticle extends PortfolioItem {
    url: string,
    domain: string
}

export interface PortfolioVideo extends PortfolioItem {
    id: string
    type: "talk"
}

export interface PortfolioRepo extends PortfolioItem {
    url: string,
    image: string,
    techTags: string[];
}


export const PORTFOLIO_ARTICLES: PortfolioArticle[] = [
    {
        title: "Reproducible Local Development with Dev Containers",
        summary: "Maintaining legacy software is a hefty job, beginning with the chore of getting it up and running locally. This article aims to present an approach to alleviate the challenges associated with onboarding for legacy software maintenance. By capitalizing on a relatively new specification called Development Containers, this solution can reduce the time investment down to an hour or less.",
        description: "Maintaining legacy software is a hefty job, beginning with the chore of getting it up and running locally. This article aims to present an approach to alleviate the challenges associated with onboarding for legacy software maintenance. By capitalizing on a relatively new specification called Development Containers, this solution can reduce the time investment down to an hour or less.",
        url: "https://medium.com/@jeffpowell.dev/reproducible-local-development-with-dev-containers-58fa830c6b7f",
        domain: "Medium.com"
    }
];

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
        url: "https://github.com/jeffrpowell/jeffrpowell.github.io/tree/master-src",
        image: "repo_website.jpg",
        techTags: ["Angular", "Javascript", "HTML", "SASS", "CSS", "GitHub", "D3.js"]
    },
    {
        title: "PDFSplicer",
        summary: "PDF joining and splitting utility",
        description: "Quickly take multiple PDFs and join them together into a single PDF. Also quickly take that bloated PDF and split it into separate PDFs for each page.",
        url: "https://github.com/jeffrpowell/PDFSplicer",
        image: "pdf.png",
        techTags: ["Java", "Swing", "PDF"]
    },
    {
        title: "DosBackup",
        summary: "Multi-threaded Windows backup solution",
        description: "I needed a program that could manage copying over files to my backup drive.",
        url: "https://github.com/jeffrpowell/dosbackup",
        image: "backup.jpg",
        techTags: ["Java", "Swing", "Threads", "SwingWorker", "ForkJoin"]
    },
    {
        title: "Advent of Code",
        summary: "My Advent of Code solutions",
        description: "I have been an active participant in Advent of Code since 2018. Over the years, I've built up a nice framework to solve each year's puzzles a little more quickly.",
        url: "https://github.com/jeffrpowell/adventofcode",
        image: "aoc.jpg",
        techTags: ["Java", "Design Patterns"]
    },
    {
        title: "Doskey utility",
        summary: "Replicate .bashrc on Windows Command Prompt",
        description: "It is possible to setup your instance of Command Prompt with aliased scripts for your personal workflow. This repo shows you how and provides a few examples to get you started on your own scripts.",
        url: "https://github.com/jeffrpowell/doskey",
        image: "commandPrompt.png",
        techTags: ["Command Prompt", "DOS", "Scripting", "Automation"]
    }
]