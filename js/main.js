// Navbar

const btnhamburger = document.querySelector('#btnHamburger');
const html = document.querySelector('html');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');

btnhamburger.addEventListener('click', function(){
    console.log('click hamburger');

    if(header.classList.contains('open')){ // Close hamburger menu
      html.classList.remove('noscroll');
      body.classList.remove('noscroll');
      header.classList.remove('open');
      overlay.classList.remove('fade-in');
      overlay.classList.add('fade-out');
    }
    else { // Open hamburger menu
        html.classList.add('noscroll');
        body.classList.add('noscroll');
        header.classList.add('open');
        overlay.classList.remove('fade-out');
        overlay.classList.add('fade-in');
    }
});

// Footer date

document.getElementById("js-year").innerHTML = new Date().getFullYear();
