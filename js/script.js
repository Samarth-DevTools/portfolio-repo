
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();
  document.getElementById('status').textContent = "Message sent successfully!";
  this.reset();
});
