const zodiac = document.getElementById("zodiac");

const body=document.body;
const changeBackground =  ()=>{
    switch (zodiac.value) {
        case "aries":
            body.style.backgroundColor="red";
            break;
    
        case "tarus":
            body.style.backgroundColor="blue";
            break;


        case "gemini":
            body.style.backgroundColor="violet";
            break;
            
        case "canser":
            body.style.backgroundColor="green";
            break;  
                
         case "leo":
            body.style.backgroundColor="purple";
            break;

        case "virgo":
            body.style.backgroundColor="yellow";
            break; 
            
        case "libra":
            body.style.backgroundColor="pink";
            break;  

        case "scorpio":
            body.style.backgroundColor="navy";
            break;

        case "sagittarius":
            body.style.backgroundColor="orange";
            break;

        case "aquarius":
            body.style.backgroundColor="aqua";
            break;

        case "capricorn":
            body.style.backgroundColor="gray";
            break;

        case "pisces":
            body.style.backgroundColor="fuchsia";
            break;

        default:
            body.style.backgroundColor="#fff"
            break;
    }
};