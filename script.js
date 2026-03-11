const heroImages = document.querySelectorAll('.hero-image');
let heroIndex = 0;

function showImage(index) {
  heroImages.forEach(img => img.classList.remove('active'));
  heroImages[index].classList.add('active');
}

document.querySelector('.hero-next').addEventListener('click', () => {
  heroIndex = (heroIndex + 1) % heroImages.length;
  showImage(heroIndex);
});

document.querySelector('.hero-prev').addEventListener('click', () => {
  heroIndex = (heroIndex - 1 + heroImages.length) % heroImages.length;
  showImage(heroIndex);
});

// Auto slide every 3 seconds
setInterval(() => {
  heroIndex = (heroIndex + 1) % heroImages.length;
  showImage(heroIndex);
}, 3000);






function calculatePrice1() {
    let qty = document.getElementById("tpiglet-Qty").value;
    let price = 35000; // Fixed price for a broiler
    let total = qty * price;
    
    if (qty > 0) {
        document.getElementById("result").innerHTML = "Total Cost: " + total + " FCFA";
    } else {
        alert("Please enter a valid quantity!");
    }
}


function calculatePrice2() {
    let qty = document.getElementById("largepiglet-Qty").value;
    let price = 45000; // Fixed price for a broiler
    let total = qty * price;
    
    if (qty > 0) {
        document.getElementById("result").innerHTML = "Total Cost: " + total + " FCFA";
    } else {
        alert("Please enter a valid quantity!");
    }
}


















document.querySelectorAll('.card').forEach(card => {
  const images = card.querySelectorAll('.carousel-image');
  let index = 0;

  card.querySelector('.carousel-next').addEventListener('click', () => {
    images[index].classList.remove('active');
    index = (index + 1) % images.length;
    images[index].classList.add('active');
  });

  card.querySelector('.carousel-prev').addEventListener('click', () => {
    images[index].classList.remove('active');
    index = (index - 1 + images.length) % images.length;
    images[index].classList.add('active');
  });
});








document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const feedback = document.getElementById('formFeedback');

  if (name && email && message) {
    feedback.innerHTML = 'Message sent successfully!';
    // You can add code here to actually send the message (e.g., via API)
    document.getElementById('contactForm').reset();
  } else {
    feedback.innerHTML = 'Please fill all fields.';
    feedback.style.color = 'red';
  }
});






// dynamic date
//document.getElementById("date").innerHTML = new Date().toLocaleDateString();