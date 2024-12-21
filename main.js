//  ================ Show Menu ================ 
const _navMenu = document.getElementById('_navMenu');
const _navToggle = document.getElementById('_navToggle');
const _navClose = document.getElementById('_navClose');

//  ------- Show Menu -------
if (_navToggle) {
  _navToggle.addEventListener('click', () => {
    _navMenu.classList.add('show-Menu');
  });
}

//  ------- Hide Menu -------
if (_navClose) {
  _navClose.addEventListener('click', () => {
    _navMenu.classList.remove('show-Menu');
  });
}



// ================ Add Header Shadow ================
const headerShadow = () => {
  const header = document.getElementById('header');

  // Add one more class to header if the bottom offset is greater than 50 viewport (half of the viewport)
  this.scrollY >= 50 ? header.classList.add('header-Shadow')
    : header.classList.remove('header-Shadow');
};
window.addEventListener('scroll', headerShadow);



// ================ Circular Progress Bar ================
const circle = document.querySelectorAll('.about-InCircle');

document.addEventListener("DOMContentLoaded", () => {
  circle.forEach((ele) => {
    let count = 0;
    let targetNum = parseInt(ele.getAttribute('data-progress'));

    let progress = setInterval(() => {
      count++;
      if (count > targetNum) {
        clearInterval(progress);
        return;
      }
      ele.parentElement.style.background = `conic-gradient(#00d9ff ${count}%, #4e545c 0%)`;
      ele.firstElementChild.textContent = `${count}%`;
    }, 30);
  });
});



// ================ Scroll Sections Active Link ================
const Sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
  const scrollDown = window.scrollY;

  Sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 96;
    const sectionId = current.getAttribute('id');
    const sectionClass = document.querySelector('.nav-Menu a[href*=' + sectionId + ']');

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionClass.classList.add('active-Link');
    }
    else {
      sectionClass.classList.remove('active-Link');
    }
  });
};
window.addEventListener('scroll', scrollActive);



// ================ Remove Mobile Menu ================
const navLink = document.querySelectorAll('.nav-Link');

const linkAction = () => {
  const _navMenu = document.getElementById('_navMenu');

// when we click on each navigation link (nav-Link), it will remove show-Menu class
  _navMenu.classList.remove('show-Menu');
};
navLink.forEach(n => n.addEventListener('click', linkAction));



// ================ Show Scrollup ================
const scrollUp = () => {
  const scrollUp = document.getElementById('scrollup');

// when the scroll is higher than 350 viewport height then add one more class 'show-Scroll' to the anchor tag with the 'Scrollup' class
  this.scrollY >= 350 ? scrollUp.classList.add('show-Scroll')
    : scrollUp.classList.remove('show-Scroll');
};
window.addEventListener('scroll', scrollUp);



// ================ EmailJS ================
const contactForm = document.getElementById('_contactForm');
const contactMsg = document.getElementById('_contactMsg');

const sendEmail = (e) => {
  e.preventDefault();

// serviceID - templateID - #form - publicKey
emailjs.sendForm('', '', '', '').then(() => {
  
// Show sent message
contactMsg.textContent = '';

// Remove message after five seconds
setTimeout(() => {
  contactMsg.textContent = '';
}, 5000);

// Clear input fields
  contactForm.reset();
}, () => {
// Show error message
    contactMsg.textContent = '';
  });
};
contactForm.addEventListener('submit', sendEmail);



// ================ Scroll Reveal Animation ================

// ScrollReveal({ reset: true });        //repeat Animations

ScrollReveal().reveal("", {
  origin: "top",
  distance: "70px",
  duration: 2500,
  delay: 500,
  interval: 100
});

ScrollReveal().reveal("", {
  duration: 2000,
  origin: "top",
  distance: "160px",
  easing: "cubic-bezier(0.5, 0, 0, 1)",
  rotate: {
    x: 20,
    z: -10
  }
});

ScrollReveal().reveal("", {
  delay: 1200,
  duration: 5000,
  move: 0
});

ScrollReveal().reveal("", {
  duration: 4000,
  scale: 0.80
});

ScrollReveal().reveal("", {
  delay: 500,
  duration: 2000,
  rotate: {
    x: 20,
    z: 20
  }
});

ScrollReveal().reveal("", {
  duration: 2000,
  origin: "left",
  distance: "120px",
  easing: "ease-in-out"
});

ScrollReveal().reveal("", {
  duration: 2000,
  origin: "right",
  distance: "120px",
  easing: "ease-in-out"
});

ScrollReveal().reveal("", {
  delay: 500
});

ScrollReveal().reveal("", {
  duration: 1600,
  origin: "bottom",
  distance: "70px",
  easing: "cubic-bezier(0.37, 0.01, 0.74, 1)",
  opacity: 0.3,
  scale: 0.7
});
