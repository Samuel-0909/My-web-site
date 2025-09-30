document.addEventListener("DOMContentLoaded", function() {
   //mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu=document.querySelector('nav ul');
    menuToggle.addEventListener('click', function(){
        navMenu.classList.toggle('active');
        menuToggle.querySelector('i').classList.toggle('fa-bars');
        menuToggle.querySelector('i').classList.toggle('fa-times');
    });

    // close menu when clicking on a link
    document.querySelectorAll('nav a').forEach(Link =>{
        Link.addEventListener('click', function(){
            navMenu.classList.remove('active');
            menuToggle.querySelector('i').classList.add('fa-bars');
            menuToggle.querySelector('i').classList.remove('fa-times');
        });
    });

    //text typping effect

    const texts=[
        " Frontend Develloper",
        " Ir",
        " UI/UX Designer",
        " Web consultant",
        " Mobile Develloper"   
    ];
    let textIndex=0;
    let charIndex=0;
    let isdDeleting=false;
    let typingDeplay=false;

    function type(){
        const currentText = texts[textIndex];
        const typingElement= document.querySelector(".typing-text");

        if(isdDeleting){
            typingElement.textContent=currentText.substring(0,charIndex - 1); 
            charIndex--;
            typingDeplay=50;
        }else{
            typingElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            typingDeplay=100;
        }

        if(!isdDeleting && charIndex === currentText.length){
            isdDeleting=true;
            typingDeplay=1500;
        }
        else if(isdDeleting && charIndex === 0){
            isdDeleting=false;
            textIndex=(textIndex+1) % texts.length;
            typingDeplay = 500;
        }

        setTimeout(type, typingDeplay);
    }

    //start typing effect after deplay
    setTimeout(type, 1000);

    //smooth scroling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor =>{
        anchor.addEventListener('click', function(e){
            e.preventDefault();

            const targetId =this.getAttribute('href');
            if(targetId === '#') return;

            const targetElement =document.querySelector(targetId);
            if(targetElement){
                window.scrollTo({
                    top:targetElement.offsetTop - 80,
                    behavior:'smooth'
                });
            }
        });
    });

});

document.addEventListener('DOMContentLoaded', () => {
  const $slider = document.querySelector('.project-slider');
  const $next = document.querySelector('.project-next');
  const $prev = document.querySelector('.project-prev');

  $next.addEventListener('click', () => {
    const items = document.querySelectorAll('.project-item');
    $slider.appendChild(items[0]);
  });

  $prev.addEventListener('click', () => {
    const items = document.querySelectorAll('.project-item');
    $slider.prepend(items[items.length - 1]);
  });
});