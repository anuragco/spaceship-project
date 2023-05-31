var typed = new Typed (".over",{
    strings: ["Frontend Developer" , "UI/UX Designer" , "Backend Developer " ,
     "Android Developer" ] ,
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true

}) 

let docTitle = document.title;
window.addEventListener("blur", () => {document.title = "Come BAck Later";});

window.addEventListener("focus", () => { document.title = docTitle; });