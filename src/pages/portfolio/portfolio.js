// Portfolio page functionality
// Import necessary assets
import './portfolio.css';

// Define portfolio data
const PORTFOLIO_REPOS = [
  {
    title: "This portfolio website",
    summary: "This website is published as an open-source project.",
    description: "This website is published as an open-source project.",
    url: "https://github.com/jeffrpowell/jeffrpowell.github.io",
    image: "repo_website.jpg",
    techTags: ["Javascript", "HTML", "TailwindCSS", "GitHub", "D3.js"]
  },
  {
    title: "Listaway",
    summary: "Self-hostable list-sharing web application (Amazon Lists alternative)",
    description: "Self-hostable list-sharing web application (Amazon Lists alternative)",
    url: "https://github.com/jeffrpowell/listaway",
    image: "ListawayWordmarkLight.png",
    techTags: ["Go", "Github Actions", "HTML", "TailwindCSS", "Postgres", "Docker"]
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
];

const PORTFOLIO_ARTICLES = [
  {
    title: "Reproducible Local Development with Dev Containers",
    summary: "Maintaining legacy software is a hefty job, beginning with the chore of getting it up and running locally. This article aims to present an approach to alleviate the challenges associated with onboarding for legacy software maintenance. By capitalizing on a relatively new specification called Development Containers, this solution can reduce the time investment down to an hour or less.",
    description: "Maintaining legacy software is a hefty job, beginning with the chore of getting it up and running locally. This article aims to present an approach to alleviate the challenges associated with onboarding for legacy software maintenance. By capitalizing on a relatively new specification called Development Containers, this solution can reduce the time investment down to an hour or less.",
    url: "https://medium.com/@jeffpowell.dev/reproducible-local-development-with-dev-containers-58fa830c6b7f",
    domain: "Medium.com"
  },
  {
    title: "Blueprint for a Full-stack Go Web Application",
    summary: "Learn how to build a full-stack Go web app with modern architecture, front-end tools like Tailwind CSS, and Postgres integration. This guide covers setup, key patterns, and practical tips for clean development.",
    description: "Learn how to build a full-stack Go web app with modern architecture, front-end tools like Tailwind CSS, and Postgres integration. This guide covers setup, key patterns, and practical tips for clean development.",
    url: "https://medium.com/@jeffpowell.dev/blueprint-for-a-full-stack-go-web-application-9633d25b9e2e",
    domain: "Medium.com"
  }
];

const PORTFOLIO_VIDEOS = [
  {
    title: "Brain Care",
    summary: "A 30-minute talk on the importance of caring for your mental health.",
    description: "A 30-minute talk on the importance of caring for your mental health.",
    id: "aev5XvuBE_A",
    type: "talk"
  },
  {
    title: "Team Lead 101",
    summary: "A 30-minute talk teaching engineers how to think like a manager.",
    description: "A 30-minute talk teaching engineers how to think like a manager.",
    id: "O-HBghOpLZU",
    type: "talk"
  },
  {
    title: "Video Editing with DaVinci Resolve",
    summary: "A 30-minute talk demonstrating simple video post-production using DaVinci Resolve.",
    description: "A 30-minute talk demonstrating simple video post-production using DaVinci Resolve.",
    id: "57X5vd-y114",
    type: "talk"
  }
];

// Initialize the page when loaded
window.addEventListener('page:portfolio:loaded', () => {
  renderRepos();
  renderArticles();
  renderVideos();
});

// Render repository cards
function renderRepos() {
  const reposContainer = document.getElementById('repos-container');
  
  reposContainer.innerHTML = PORTFOLIO_REPOS.map(repo => `
    <div class="bg-white shadow rounded-lg overflow-hidden transition-transform hover:scale-105 cursor-pointer" 
         onclick="window.open('${repo.url}', '_blank')">
      <img src="assets/${repo.image}" 
           alt="${repo.title}" 
           class="w-full h-40 object-cover border-b-2 border-gray-200">
      <div class="p-4">
        <h3 class="text-lg font-semibold text-gray-800 mb-2">${repo.title}</h3>
        <p class="text-gray-600 mb-3">${repo.summary}</p>
        <div class="flex flex-wrap gap-1">
          ${repo.techTags.map(tag => `
            <span class="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">${tag}</span>
          `).join('')}
        </div>
      </div>
    </div>
  `).join('');
}

// Render article cards
function renderArticles() {
  const articlesContainer = document.getElementById('articles-container');
  
  articlesContainer.innerHTML = PORTFOLIO_ARTICLES.map(article => `
    <div class="bg-white shadow rounded-lg overflow-hidden transition-transform hover:scale-105 cursor-pointer"
         onclick="window.open('${article.url}', '_blank')">
      <div class="p-4">
        <div class="text-sm text-gray-500 mb-1">${article.domain}</div>
        <h3 class="text-lg font-semibold text-gray-800 mb-2">${article.title}</h3>
        <p class="text-gray-600">${article.summary}</p>
      </div>
    </div>
  `).join('');
}

// Render video cards
function renderVideos() {
  const videosContainer = document.getElementById('videos-container');
  
  videosContainer.innerHTML = PORTFOLIO_VIDEOS.map(video => `
    <div class="bg-white shadow rounded-lg overflow-hidden transition-transform hover:scale-105 cursor-pointer"
         onclick="window.open('https://www.youtube.com/watch?v=${video.id}', '_blank')">
      <img src="https://img.youtube.com/vi/${video.id}/mqdefault.jpg" 
           alt="${video.title}" 
           class="w-full h-40 object-cover border-b-2 border-gray-200">
      <div class="p-4">
        <h3 class="text-lg font-semibold text-gray-800 mb-2">${video.title}</h3>
        <p class="text-gray-600">${video.summary}</p>
      </div>
    </div>
  `).join('');
}
