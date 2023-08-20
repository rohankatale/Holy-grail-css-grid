function togglenav(){
    const outergrid=document.querySelector('.outer-grid');
    outergrid.classList.toggle("outer-grid-expanded");

    const nav=document.querySelector('nav');
    nav.classList.toggle("hide-nav");
}