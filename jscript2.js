
let lang=2 ; 
let darkmode = true ;
let languages = ["English", "French", "Norwegian"]; 
let dotDarkMode= "background-color: black; color: white;  font-size: 25px; " ;  
let dotNormalMode = "padding: 25px; background-color: #de5257; color: #6b5051; font-size: 25px;  ";
console.log("language is now  " ) ; 

for ( const el of document.querySelectorAll( ".Prose")){
    el.style.display='none' 
}
for ( const el of document.querySelectorAll( ".English")){
    console.log("element is ", el );
    el.style.display='none' ;
}
for ( const el of document.querySelectorAll( ".French")){

    console.log("element is ", el );
    el.style.display='block' ;
}

console.log("language is now  " +lang);

//window.onload = onLoadFunctions;