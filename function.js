var typed = new Typed (".over",{
    strings: ["Save The World" , "Time to Attack" , "Be Ready" ,
     "Time To Go" ] ,
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true

}) 

let docTitle = document.title;
window.addEventListener("blur", () => {document.title = "Ready For a War";});

window.addEventListener("focus", () => { document.title = docTitle; });