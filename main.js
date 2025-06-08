document.addEventListener('DOMContentLoaded', function() {
  const video = document.getElementById("myVideo");
  const videoOverlay = document.getElementById("videoOverlay");

  // Ensure overlay is visible when the video is paused
  if (video.paused) {
    videoOverlay.classList.remove("hidden");
  }

  // Function to toggle play and pause
  function toggleVideo() {
    if (video.paused) {
      video.play();
      videoOverlay.classList.add("hidden");
    } else {
      video.pause();
      videoOverlay.classList.remove("hidden");
    }
  }

  // Toggle video on click of the overlay or video itself
  videoOverlay.addEventListener('click', toggleVideo);
  video.addEventListener('click', toggleVideo);

  // Update overlay visibility on video state changes
  video.addEventListener("play", () => videoOverlay.classList.add("hidden"));
  video.addEventListener("pause", () => videoOverlay.classList.remove("hidden"));
});




//Testimonials section
let currentSlide = 0;
const slides = document.querySelectorAll(".testimonial-slide");
const dots = document.querySelectorAll(".dot");

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === index);
        dots[i].classList.toggle("active", i === index);
    });
}

// Auto-slide every 5 seconds
function autoSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Click event for dots
function moveSlide(index) {
    currentSlide = index;
    showSlide(currentSlide);
}

// Initial setup
showSlide(currentSlide);
setInterval(autoSlide, 5000);




//CONTACT INFO
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    // Basic validation
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email-email").value.trim();
    let message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("All fields are required!");
        return;
    }
    
    if (!email.includes("@")) {
        alert("Please enter a valid email address!");
        return;
    }

    // Show modal on successful submission
    document.getElementById("modal").style.display = "block";
});

// Close modal functionality
document.getElementById("closeModal").addEventListener("click", function() {
    document.getElementById("modal").style.display = "none";
});
