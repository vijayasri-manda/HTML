// Static job data
const jobs = [
  { id: 1, title: 'Software Developer', description: 'Develop web applications using React.' },
  { id: 2, title: 'UX Designer', description: 'Design user-friendly interfaces for web applications.' },
  { id: 3, title: 'Data Analyst', description: 'Analyze data to provide business insights.' }
];

// DOM Elements
const jobListings = document.getElementById('jobListings');
const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('searchInput');
const applySection = document.getElementById('applySection');
const jobTitle = document.getElementById('jobTitle');
const applyForm = document.getElementById('applyForm');
const resumeFile = document.getElementById('resumeFile');

// Display all jobs on page load
function displayJobs(jobArray) {
  jobListings.innerHTML = ''; // Clear previous listings
  jobArray.forEach(job => {
    const jobItem = document.createElement('div');
    jobItem.classList.add('job-item');
    jobItem.innerHTML = `
      <h3>${job.title}</h3>
      <p>${job.description}</p>
      <a href="#" onclick="applyJob(${job.id})">Apply Now</a>
    `;
    jobListings.appendChild(jobItem);
  });
}

// Apply for job
function applyJob(jobId) {
  const job = jobs.find(job => job.id === jobId);
  jobTitle.innerText = job.title;
  applySection.style.display = 'block';
}

// Handle job search
searchForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const query = searchInput.value.toLowerCase();
  const filteredJobs = jobs.filter(job => job.title.toLowerCase().includes(query));
  displayJobs(filteredJobs);
});

// Handle resume submission
applyForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const file = resumeFile.files[0];

  if (file) {
    alert('Resume uploaded successfully for job ' + jobTitle.innerText);
  } else {
    alert('Please select a resume file');
  }
});

// Initially display all jobs
displayJobs(jobs);
