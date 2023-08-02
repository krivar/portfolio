let lang=1 ; 
let darkmode = true ;
let dotDarkMode= "background-color: black; color: white;  font-size: 25px; " ;  
let dotNormalMode = "   padding: 25px; background-color: white; color: black; font-size: 25px;  ";

const mainBody = document.body;
console.log(mainBody);  
document.body.style.color = darkmode ? "yellow": "white" ; 
document.body.style.backgroundColor = darkmode ? "black" : "red"; 

function ShowPortfolio(){
const mainH1Element = document.createElement("h1") ;
document.body.append(mainH1Element);

const  myPortfolio= [ "Complete portfolio on the Web", 
                    "Œuvres complètes sur la toile" , 
                    "Oversikt over Verk på verdensveven"] ;

mainH1Element.innerHTML = myPortfolio[lang]   ;
}
ShowPortfolio();

function SetLang(selectedLanguage){
    lang =  selectedLanguage.value ; // warning affecting Global 
    console.log("language set to " +lang);
    ShowPortfolio();
}
console.log("language is now  " +lang);
