require('../../index')
// Tangram Calendar page functionality
import './tangram.css';

// Base URL for the tangram API
const BASE_URL = 'https://tangram-calendar.jeffpowell.dev/';

// Initialize the page when loaded
window.addEventListener('page:tangram:loaded', () => {
  initTangramCalendar();
});

function initTangramCalendar() {
  // Get current date in YYYY-MM-DD format
  const localDate = new Date();
  const targetDate = new Date(localDate.getFullYear(), localDate.getMonth(), localDate.getDate());
  const targetDateStr = dateToString(targetDate);
  
  // Display the date
  document.getElementById('tangram-date').textContent = `for ${targetDateStr}`;
  
  // Load hint
  fetchTangramData(`${BASE_URL}hint/${targetDateStr}`)
    .then(data => {
      renderTangramGrid('tangram-hint', data);
    })
    .catch(error => {
      document.getElementById('tangram-hint').innerHTML = 
        `<div class="text-red-600">Error loading hint: ${error.message}</div>`;
    });

  // Load solution (but don't display it yet)
  fetchTangramData(`${BASE_URL}solution/${targetDateStr}`)
    .then(data => {
      // Store solution data for later display
      window.tangramSolution = data;
    })
    .catch(error => {
      window.tangramSolution = [`Error loading solution: ${error.message}`];
    });

  // Set up solution reveal button
  const showSolutionBtn = document.getElementById('show-solution-btn');
  showSolutionBtn.addEventListener('click', revealSolution);
}

// Function to fetch tangram data
async function fetchTangramData(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch tangram data (${response.status})`);
  }
  const text = await response.text();
  return rawToArray(text);
}

// Convert raw text response to array of strings
function rawToArray(response) {
  return response.trim().split("\n");
}

// Convert date to string in YYYY-MM-DD format
function dateToString(date) {
  return date.toISOString().substring(0, 10);
}

// Render tangram grid
function renderTangramGrid(elementId, rows) {
  const container = document.getElementById(elementId);
  
  // Clear any existing content (like loading spinners)
  container.innerHTML = '';
  
  // Create the grid rows
  rows.forEach(row => {
    const gridRow = document.createElement('div');
    gridRow.className = 'grid-row';
    gridRow.innerHTML = colorTangram(row);
    container.appendChild(gridRow);
  });
  
  // Show the container if it was hidden
  container.classList.remove('hidden');
}

// Function to reveal the solution
function revealSolution() {
  const solutionContainer = document.getElementById('tangram-solution');
  const showSolutionBtn = document.getElementById('show-solution-btn');
  
  // Hide the button
  showSolutionBtn.classList.add('hidden');
  
  // Render the solution
  if (window.tangramSolution) {
    renderTangramGrid('tangram-solution', window.tangramSolution);
  } else {
    solutionContainer.innerHTML = 
      '<div class="text-yellow-600">Loading solution...</div>';
  }
}

// Function to colorize tangram characters
function colorTangram(text) {
  // Replace tangram characters with colored spans
  return text
    .replace(/1/g, '<span class="tangram-piece-1">1</span>')
    .replace(/2/g, '<span class="tangram-piece-2">2</span>')
    .replace(/3/g, '<span class="tangram-piece-3">3</span>')
    .replace(/4/g, '<span class="tangram-piece-4">4</span>')
    .replace(/5/g, '<span class="tangram-piece-5">5</span>')
    .replace(/6/g, '<span class="tangram-piece-6">6</span>')
    .replace(/7/g, '<span class="tangram-piece-7">7</span>')
    .replace(/\./g, '<span class="tangram-empty">.</span>')
    .replace(/\s/g, '&nbsp;');
}
