const colorField = document.querySelector(".color")
const button = document.getElementById("btn")

 
button.addEventListener("click",()=>{
    let Colorstring =["red","green","grey","yellow","orange","lightblue","smoke"];
 
 
        const randomNumber =Math.floor( Math.random()*Colorstring.length);
       let randomColor=Colorstring[randomNumber];

    button.style.backgroundColor = randomColor;
    document.body.style.backgroundColor = randomColor;
    colorField.innerHTML = randomColor;
    //for copying to clip board
    navigator.clipboard.writeText(randomColor);
 
})