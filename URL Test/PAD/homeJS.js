// These are just so we can tell Javascript to look in the document for something so we don't have to keep typing them out

const primaryNav = document.querySelector(".Navbar");
const navToggle = document.querySelector(".mobileNavToggle");

navToggle.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute("data-visible");
    if (visibility === "false") {
        primaryNav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
    }
    else {
        primaryNav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
    }
})

// const JPtoggle = document.querySelector(".flagButtonJP");
// const ENtoggle = document.querySelector(".flagButtonEN");
// const ENJP = document.getElementById('EN');
// const JPEN = document.getElementById('JP');

// JPtoggle.addEventListener('click', () => {
//     const visibility= ENJP.getAttribute("data-visible");
//     if (visibility === "true") {
//         ENJP.setAttribute("data-visible", false);
//         JPEN.setAttribute("data-visible", true);
       
//     }
//     else {
//         ENJP.setAttribute("data-visible", false);
//         ENJP.setAttribute("data-visible", false);
       
//     }
// })








let previewContainer = document.querySelector('.app-previews');
let previewBox = previewContainer.querySelectorAll('.previews');


document.querySelectorAll('.appContainer .appCards').forEach(appCards => {
    appCards.onclick = () => {
        previewContainer.style.display = 'flex';
        let name = appCards.getAttribute('data-name');
        previewBox.forEach(previews => {
            let target = previews.getAttribute('data-target');
            if (name == target){
                previews.classList.add('active');
            };
        });

    };
});



previewBox.forEach(close =>{
    close.querySelector('.fa-xmark').onclick = () => {
        close.classList.remove('active');
        previewContainer.style.display = 'none';
    };
});


// function Flag() {
//     document.getElementById("EN").innerHTML =   document.getElementById("JP").innerHTML;
//     document.getElementById("flagButtonJP").style.display = "none";
//     document.getElementById("flagButtonEN").style.display = "flex";
    
// }

function Flag1() {
    var EN = document.getElementById("EN");
    var JP = document.getElementById("JP");
    var enFLAG = document.getElementById("flagButtonEN");
    var jpFLAG = document.getElementById("flagButtonJP");
 {
      JP.style.display = "block";
      EN.style.display = "none";
      jpFLAG.style.display = "none";
      enFLAG.style.display = "block";
    } 
 }

function Flag2() {
    var EN = document.getElementById("EN");
    var JP = document.getElementById("JP");
    var enFLAG = document.getElementById("flagButtonEN");
    var jpFLAG = document.getElementById("flagButtonJP");
 {
      JP.style.display = "none";
      EN.style.display = "block";
      jpFLAG.style.display = "block";
      enFLAG.style.display = "none";
    } 
 }
