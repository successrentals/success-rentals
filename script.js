/*=========================================================
SUCCESS RENTALS
Professional Property Management
Version 1.0
=========================================================*/



/*=========================================================
STICKY HEADER
=========================================================*/

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 80){

        header.style.background = "rgba(7,27,54,.95)";
        header.style.boxShadow = "0 8px 25px rgba(0,0,0,.15)";

    }

    else{

        header.style.background = "rgba(11,45,92,.70)";
        header.style.boxShadow = "none";

    }

});



/*=========================================================
SMOOTH MENU SCROLL
=========================================================*/

document.querySelectorAll('nav a').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        const target=document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});



/*=========================================================
FADE IN ON SCROLL
=========================================================*/

const observer=new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{

    threshold:.20

});

document.querySelectorAll(

".who-card,.info-card,.plan-card,.important-card,.contact-box"

).forEach(el=>{

    el.classList.add("hidden");

    observer.observe(el);

});



/*=========================================================
ACTIVE MENU
=========================================================*/

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const top=section.offsetTop-120;

        const height=section.clientHeight;

        if(pageYOffset>=top){

            current=section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")=="#"+current){

            link.classList.add("active");

        }

    });

});



/*=========================================================
BACK TO TOP BUTTON
=========================================================*/

const topBtn=document.createElement("button");

topBtn.innerHTML="↑";

topBtn.id="topButton";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

    if(window.scrollY>500){

        topBtn.classList.add("show");

    }

    else{

        topBtn.classList.remove("show");

    }

});

topBtn.onclick=()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};



/*=========================================================
PRELOAD HERO IMAGE
=========================================================*/

const heroImage=new Image();

heroImage.src="images/hero.jpg";



/*=========================================================
CURRENT YEAR
=========================================================*/

const copy=document.querySelector(".copyright");

if(copy){

    copy.innerHTML=`© ${new Date().getFullYear()} Success Rentals. All Rights Reserved.`;

}



/*=========================================================
PAGE LOADED
=========================================================*/

window.addEventListener("load",()=>{

    document.body.classList.add("loaded");

});

/*=========================================================
MOBILE MENU
=========================================================*/

const menuToggle = document.querySelector(".menu-toggle");

const nav = document.querySelector("nav");

if(menuToggle){

menuToggle.addEventListener("click",()=>{

menuToggle.classList.toggle("open");

nav.classList.toggle("mobile-open");

});

}

/*=========================================================
CLOSE MENU AFTER CLICK
=========================================================*/

document.querySelectorAll("nav a").forEach(link=>{

link.addEventListener("click",()=>{

if(window.innerWidth<992){

menuToggle.classList.remove("open");

nav.classList.remove("mobile-open");

}

});

});

/*=========================================================
WINDOW RESIZE
=========================================================*/

window.addEventListener("resize",()=>{

if(window.innerWidth>992){

menuToggle.classList.remove("open");

nav.classList.remove("mobile-open");

}

});

/*=========================================================
MOBILE MENU
=========================================================*/

.menu-toggle{

display:none;

cursor:pointer;

width:40px;

height:40px;

justify-content:center;

align-items:center;

flex-direction:column;

gap:6px;

}

.menu-toggle span{

width:28px;

height:3px;

background:white;

transition:.35s;

border-radius:5px;

}

/* Animation */

.menu-toggle.open span:nth-child(1){

transform:rotate(45deg) translateY(12px);

}

.menu-toggle.open span:nth-child(2){

opacity:0;

}

.menu-toggle.open span:nth-child(3){

transform:rotate(-45deg) translateY(-12px);

}

/* Mobile */

@media(max-width:992px){

header .container{

display:flex;

justify-content:space-between;

align-items:center;

}

.menu-toggle{

display:flex;

}

nav{

position:fixed;

top:90px;

left:-100%;

width:280px;

height:100vh;

background:#0b2d5c;

transition:.4s;

padding:40px;

justify-content:flex-start;

z-index:999;

}

nav.mobile-open{

left:0;

}

nav ul{

flex-direction:column;

gap:25px;

}

nav ul li{

width:100%;

}

nav ul li a{

font-size:18px;

display:block;

padding:12px 0;

border-bottom:1px solid rgba(255,255,255,.08);

}

}

/*=========================================================
HOW IT WORKS ANIMATION
=========================================================*/

const processCards = document.querySelectorAll('.process-card');

const processObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add('show-process');

        }

    });

},{
    threshold:0.2
});

processCards.forEach(card => {

    processObserver.observe(card);

});

.process-card{

    opacity:0;

    transform:translateY(40px);

}

.process-card.show-process{

    opacity:1;

    transform:translateY(0);

}

document.addEventListener("click", function(e) {
  if (e.target.closest('#hamburger') || e.target.closest('#mobile-menu-trigger') || e.target.innerText.includes('☰')) {
    const navMenu = document.querySelector('header ul') || document.querySelector('nav ul') || document.querySelector('.nav-links');
    if (navMenu) {
      e.preventDefault();
      navMenu.classList.toggle('show-menu');
    }
  }
});



