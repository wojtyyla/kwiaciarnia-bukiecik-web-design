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

// REALIZACJE PAGES Gallery

const gallery = document.querySelectorAll(".gallery .gallery-image"),
previewBox = document.querySelector(".preview-box"),
previewImg = previewBox.querySelector("img"),
closeIcon = previewBox.querySelector(".details"),
closeBody = previewBox.querySelector(".preview-box"),
currentImg = previewBox.querySelector(".current-img"),
totalImg = previewBox.querySelector(".total-img"),
shadow = document.querySelector(".shadow");

window.onload = ()=>{
  for (let i = 0; i < gallery.length; i++) {
    totalImg.textContent = gallery.length;
    let newIndex = i;
    let clickImgIndex;
    gallery[i].onclick = ()=>{
      clickImgIndex = newIndex;
      console.log(i);
      function preview(){
        currentImg.textContent = newIndex + 1;
        let selectedImgUrl = gallery[newIndex].querySelector("img").src;
        previewImg.src = selectedImgUrl;
      }

      const prevBtn = document.querySelector(".prev");
      const nextBtn = document.querySelector(".next");
      if(newIndex == 0){
        prevBtn.style.display = "none";
      }
      if(newIndex >= gallery.length - 1){
        nextBtn.style.display = "none";
      }
      prevBtn.onclick = ()=>{
        newIndex--;
        if(newIndex == 0){
          preview();
          prevBtn.style.display = "none";
        }else{
          preview();
          nextBtn.style.display = "block";
        }
      }
      nextBtn.onclick = ()=>{
        newIndex++;
        if(newIndex >= gallery.length - 1){
          preview();
          nextBtn.style.display = "none";
        }else{
          preview();
          prevBtn.style.display = "block";
        }
      }


      preview();
      previewBox.classList.add("show");
      shadow.style.display = "block";
      document.querySelector("body").style.overflow = "hidden";
      document.querySelector("html").style.overflow = "hidden";
      
      closeIcon.onclick = ()=>{
        newIndex = clickImgIndex;
        prevBtn.style.display = "block";
        nextBtn.style.display = "block";
        previewBox.classList.remove("show");
        shadow.style.display = "none";
        document.querySelector("body").style.overflow = "auto";
        document.querySelector("html").style.overflow = "auto";
      }

      closeBody.onclick = ()=>{
        newIndex = clickImgIndex;
        prevBtn.style.display = "block";
        nextBtn.style.display = "block";
        previewBox.classList.remove("show");
        shadow.style.display = "none";
        document.querySelector("body").style.overflow = "auto";
        document.querySelector("html").style.overflow = "auto";
      }
    }
  }
}

// KONTAKT PAGE Smooth Scroll onclick

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute(href)).scrollIntoView({
      behaviour : "smooth"
    });
  });
});

// KONTAKT PAGE Google map

function initMap() {
  var location = {lat: 51.058577, lng: 16.196339};
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 16,
    center: location
  });
  var marker = new google.maps.Marker({
    position: location,
    map: map
  });
}