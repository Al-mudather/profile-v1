/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*=============== MENU Show ===============*/
/** Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*=============== MENU Hidden ===============*/
/** Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  //When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
};

navLink.forEach((n) => n.addEventListener("click", linkAction));
/*=============== SHADOW HEADER ===============*/
const shadowHeader = () => {
  const header = document.getElementById("header");
  // When the scroll is grater than 50 viewport height , add the shadow-header class
  this.scrollY >= 50
    ? header.classList.add("shadow-header")
    : header.classList.remove("shadow-header");
  // console.log(header.classList)
};
window.addEventListener("scroll", shadowHeader);

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById("contact-form"),
  contactMessage = document.getElementById("contact-message");

const sendEmail = (e) => {
  e.preventDefault();

  // serviceID - templateID - #form - publicKey
  emailjs.sendForm(
    "service_of0bhjp",
    "template_4bsq2ej",
    "#contact-form",
    "pefpbnc5vb4nGxTbP"
  ).then(() => {
    // Show send message
    contactMessage.textContent = "Message sent successfully ✅"
    // Remove message after five seconds
    setTimeout(() => {
      contactMessage.textContent = ""
    }, 5000)
    // Clear input fields
    contactForm.reset();
  }, () => {
    // Show error message
    contactMessage.textContent = "Message not sent (service error) ❌"
  })
};

contactForm.addEventListener("submit", sendEmail);

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUp = document.getElementById('scroll-up')
  //When the scroll is highter than 30 viewpot height, add the show-scroll class
  this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
  : scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
const scrollActive = () => {
  const scrollDown = window.scrollY

  sections.forEach(current => {
    // sectionClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
    const sectionHeight = current.offsetHeight,
    sectionTop = current.offsetTop - 58,
    sectionId = current.getAttribute('id')
    
    const searchForAtage = `#nav-menu  a[href*="${sectionId}"]`
    const sectionClass = document.querySelector(searchForAtage)

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionClass.classList.add('active-link')
    } else {
      sectionClass.classList.remove('active-link')
    }
  
  })
}

window.addEventListener('scroll', scrollActive)

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic ( if user selected )
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if a user previously chose a theme
if (selectedTheme) {
  // if the validation is fullfilled, we ask what the issue was to know if we acticated or deactivated
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedTheme === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / decativate the theme manually with the button
themeButton.addEventListener('click', () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)
  // We save the theme and the current icon that the user chose
  localStorage.setItem('selected-theme', getCurrentTheme())
  localStorage.setItem('selected-icon', getCurrentIcon())

})

/*=============== SCROLL REVEAL ANIMATION ===============*/
