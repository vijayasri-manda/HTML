document.getElementById("jobseeker-btn").addEventListener("click", function() {
    window.location.href = "jobseeker.html";
});

document.getElementById("recruiter-btn").addEventListener("click", function() {
    window.location.href = "recruiter.html";
});

// Handle form submissions or actions
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Form submitted!");
});
