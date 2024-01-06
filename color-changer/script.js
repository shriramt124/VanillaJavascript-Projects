//1.select the color class using query selector
//2.select the button using the id selector 
//3.write a function to generate random random numbers

const colorField = document.querySelector(".color")
const button = document.getElementById("btn")

 
button.addEventListener("click",()=>{
    let Colorstring =[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F","a","b","c","d","e","f"];
    let randomColor = "#";
    for(let i = 0;i<6;i++){
        const randomNumber = Math.random()*Colorstring.length;
        randomColor += Colorstring[Math.floor(randomNumber)%Colorstring.length];

    }
    button.style.backgroundColor = randomColor;
    document.body.style.backgroundColor = randomColor;
    colorField.innerHTML = randomColor;
    //for copying to clip board
    navigator.clipboard.writeText(randomColor);
 
})