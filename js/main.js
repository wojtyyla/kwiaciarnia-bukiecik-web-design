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

// REALIZACJE PAGE Galeria

const filterItem = document.querySelector(".realizacje-page-menu");
const filterImg = document.querySelectorAll(".gallery-image");

window.onload = ()=>{
    filterItem.onclick = (selectedItem)=>{
      if(selectedItem.target.classList.contains("item")){
        filterItem.querySelector(".active").classList.remove("active");
        selectedItem.target.classList.add("active");
        let filterName = selectedItem.target.getAttribute("data-name");
        filterImg.forEach((image)=>{
          let filterImages = image.getAttribute("data-name");
          if ((filterImages == filterName) || filterName == "all"){
            image.classList.remove("hide");
            image.classList.add("show");
          }else{
            image.classList.add("hide");
            image.classList.remove("show");
          }
        });
      }
    }
    for (let index = 0; index < filterImg.length; index++) {
      filterImg[index].setAttribute("onclick", "preview(this)");

    }
}

const previewBox = document.querySelector(".preview-box"),
previewImg = previewBox.querySelector("img"),
closeIcon = previewBox.querySelector("i"),
shadow = document.querySelector(".shadow");

function preview(element){
  let selectedPrevImg = element.querySelector("img").src;
  previewImg.src = selectedPrevImg;
  console.log(selectedPrevImg);
  previewBox.classList.add("show");
  shadow.classList.add("show");
  closeIcon.onclick = ()=>{
    previewBox.classList.remove("show");
    shadow.classList.remove("show");
  }
}

