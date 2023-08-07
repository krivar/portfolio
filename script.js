let lang=1; 
let darkmode = true ;
let languages = ["English", "French", "Norwegian"]; 
let dotDarkMode= "background-color: black; color: white;  font-size: 25px; " ;  
let dotNormalMode = "padding: 25px; background-color: #de5257; color: #6b5051; font-size: 25px;  ";

const mainBody = document.body;
console.log(mainBody);  
function insertPictures() {
    function X(xlink,sel, wx){
        const newnode = document.createElement("img" );
        newnode.src = xlink;
        if( undefined === wx ) {wx=screen.availWidth ;}
        newnode.width= wx ; 
        console.log( "Image OBJECT: ",newnode, " : ", newnode.sizes) ;
        
        const here = document.querySelector( sel);
        console.log( "Location:(", sel, ") ",here); 
        here.appendChild(newnode);
    }
    console.log("----Inserting first picture") ; 
    let L= ['E','F','N']; 
    let Z =''; 

    if( darkmode ){
        Z='D'; 
        X("./img/skogstrolletZOOM.jpg", "#"+L[lang]+"T"+Z+"0" , 2*screen.availWidth/4 );
        X("./img/nøkken.jpg", "#"+L[lang]+"T"+Z+"1" , );
        
    } else { 
        Z='L'; 
        X("./img/CommercialtrollDovre.jpg", "#"+L[lang]+"T"+Z+"0" )  ; 
        X("./img/SVK.jpg", "#"+L[lang]+"T"+Z+"1" , screen.availWidth/3 ); 
        X("./img/SteinKjerringZOOM.jpg","#"+L[lang]+"T"+Z+"2", screen.availWidth/4) 
    }
        
    console.log("Inserted ?");
}

function ShowPortfolio(){
const mainH1Element = document.createElement("h1") ;
document.body.append(mainH1Element);

const  myPortfolio= [ "Complete portfolio on the Web", 
                    "Œuvres complètes sur la toile" , 
                    "Oversikt over Verk på verdensveven"] ;

mainH1Element.innerHTML = myPortfolio[lang]   ;
}
// ShowPortfolio();
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
    for ( const ele of  document.querySelectorAll("img")) 
    {  
        ele.style.display='none' ; 
    }
    
    console.log( "   Screen cleared")
} 

function SetLang( langOrLanguage){
    console.log("SetLang :  SetLang with param:", langOrLanguage, "  " , typeof(langOrLanguage) ); 
   if( typeof(langOrLanguage) === "object"){
    console.log("2 SetLang :  SetLang with param:", langOrLanguage.value , " is the value " ) ; 
    lang = langOrLanguage.value ; 
   } else { 
    lang = langOrLanguage ; 
   }
   ChangeLanguage( lang ); 
   console.log( "Hopefulle all text displayed - insert pics");
   insertPictures(); 

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
    console.log( "ChangeLanguage in ", mode, "Language #", lang, ":", languages[ l ] , " >" , l, " inserting" );
      
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
    let lang=0 ; // Obviously should test against browserlanguages ;  
    ChangeDarkLight()
    console.log("On Load Active");
    SetLang(lang); 
    

}
console.log("language is now  " +lang);
window.onload = onLoadFunctions;