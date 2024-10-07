document.getElementById('learn-more').addEventListener('click', function() {
  alert('Welcome! Here you can learn more about our services.');
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Form Submitted Successfully!');
});
