let lang=0 ; 
let darkmode = true ;
let languages = ["English", "French", "Norwegian"]; 
let dotDarkMode= "background-color: black; color: white;  font-size: 25px; " ;  
let dotNormalMode = "padding: 25px; background-color: #de5257; color: #6b5051; font-size: 25px;  ";

const mainBody = document.body;
console.log(mainBody);  


function ShowPortfolio(){
const mainH1Element = document.createElement("h1") ;
document.body.append(mainH1Element);

const  myPortfolio= [ "Complete portfolio on the Web", 
                    "Œuvres complètes sur la toile" , 
                    "Oversikt over Verk på verdensveven"] ;

mainH1Element.innerHTML = myPortfolio[lang]   ;
}
ShowPortfolio();
//  var element = document.querySelector('.fade-in-element'); 
function fadeIn(el) {
        var opacity = 0; // Initial opacity
        if (el.style.opacity !== undefined){ 
        function opaq(){
                if (opacity < 1) {
                   opacity += 0.1;
                   el.style.opacity = opacity;
                } else {
                   clearInterval(interval); // Stop the interval when opacity reaches 0
                   el.style.display = 'none'; // Hide the element
                }
             }

            var interval = setInterval(opaq() , 50);
        }
}


function WhipeScreen(){
    
    for ( const ele of  document.querySelectorAll(".Prose")) 
    {  
        ele.style.display='none' ; 

    }
    
    console.log( "   Screen cleared")
} 

function SetLang( langOrLanguage){
    console.log("SetLang :  SetLang with param:", langOrLanguage, "  " , typeof(langOrLanguage) ); 
   if( typeof(langOrLanguage) === "object"){
    console.log("SetLang :  SetLang with param:", langOrLanguage.value , " is the value " ) ; 
    lang = langOrLanguage.value ; 
   } else { 
    lang = langOrLanguage ; 
   }
   ChangeLanguage( lang ); 

}
function ChangeLanguage( l ) {
        speaking= languages[ l ] ; 
        console.log(" language #", l, " speaking ", speaking ); 
        WhipeScreen() ;
    let mode= darkmode ? "Darkmode": "LightsOn" ;
    let fcol= darkmode ? "White" : "#6b5051" ;
    let bcol= darkmode ? "Black" : "#de5257" ;
    const searchFor = "."+ speaking + "."+ mode;
    console.log("!!Screen should be blank!!  . " , searchFor) ;
    
    for( const ele of document.querySelectorAll(searchFor) ) {
        console.log("element is :", ele ) ; 
        ele.style.display='block';
    }
    /*
    { 
        ele.style.display='block';

    }*/
    console.log( "Setlang in ", mode, "Language #", lang, ":", languages[ l ] , " >" , l);
    return ;    
    //for ( el of document.getElementsByClassName( "Prose" ) ){
    //    el.style.display = 'none'; 
    //    console.log( l, "#  ", languages[l] , " off ", el)
    //
    console.log("Query body "); 
    const id = document.querySelectorAll('body') ;
        console.log(" selectorAll() " , id ) ; 

        for( let j in id ){ 
            console.log(j); 
            j.style.display = 'block'; 
        }
     
    
    console.log(id); 
     
    if( l ) {return; }  else { return ;
    } 
     //const elm = document.getElementById("kjerringZOOM");
     //elm = document.getElementById("kjerringZOOM").children('img').css('display', 'none') ;
     //elm = document.getElementById("kjerringZOOM") ;
    // console.log( '---------------  looking for #kjerringZoom ---------'); 
    // console.log( "--- elm ", elm  ); 
    //if (elm.hasChildNodes) {
     //   for (const elm1 in elm.childNodes.keys ){ console.log( "..........", elm1 ); }
    //}
    // const elm = document.querySelectorAll('' );
    //    if(elm) {   elm.style.display  ='none' } 

       
     ; // warning affecting Global
    for ( el of document.getElementsByClassName( languages[lang],  mode) ) {
        el.style.visibility = 'visible'; 
        el.style.display = 'block';
        el.style.color = fcol ;
        el.style.backgroundColor= bcol ; 
        console.log( "visible block element: ", el )
    }
    console.log("language set to " , lang);
    ShowPortfolio();
}
function ChangeDarkLight(){
    console.log( "Changing dark/light", darkmode); 
    darkmode = ! darkmode ;
    let DarkMode = "darkmode";
    let LightMode= "lightmode"
    document.body.style.color = darkmode ?  "white" : "#6b5051" ; // 
    document.body.style.backgroundColor = darkmode ? "black" : "#de5257" ; 
    console.log( "Changed to", darkmode? DarkMode: LightMode);
    SetLang(lang);    
}

function onLoadFunctions(){
    let lang=0 ; 
    ChangeDarkLight()
    console.log("On Load Active");
    SetLang(lang); 

}
console.log("language is now  " +lang);
window.onload = onLoadFunctions;