const review = [
    {
        id:1,
        name:"priyanka tiwari",
        job:"web developer",
        img:"person-1.jpg",
        text:`"It is a long established fact that a reader will be 
        distracted by the readable content of a page when looking at its layout.
         The point of using Lorem Ipsum is that it has a more-or-less normal distribution of 
         letters, as opposed to using 'Content here, content here',
        "`
    },
    {
        id:2,
        name:"john adam",
        job:"web designer",
        img:"person-2.jpg",
        text:`There are many variations of passages of Lorem Ipsum available, 
        but the majority have suffered alteration in some form, by injected humour, or randomised 
        words which don't look even slightly believable. If you are going to use a passage of Lorem
        `
    },
    {
        id:3,
        name:"sagar soni",
        job:"intern",
        img:"person-3.jpg",
        text:`Contrary to popular belief, Lorem Ipsum is not 
        simply random text. It has roots in a piece of classical Latin 
        literature from 45 BC, making it over 2000 years old. Richard McClintock, 
        a Latin professor at Hampden-Sydney College in Virginia, looked up one of the 
        `
    },
    {
        id:4,
        name:"susan smith",
        job:"software engineer",
        img:"person-4.jpg",
        text:` It has survived not only five centuries, but also the 
        leap into electronic typesetting, remaining essentially unchanged.
         It was popularised in the 1960s with the release of Letraset sheets 
         containing Lorem Ipsum passages, and more recently
        `
    }
]
console.log(review.length);
//select image
//select author
//select job
//select info
//select prev and next button button
//select surprise button
let reviewImage=document.querySelector("#person-img");
let author = document.getElementById("author")
let job = document.getElementById("job")
let info = document.getElementById("info");
console.log(reviewImage,author,job,info);

let prevButton = document.querySelector(".prev-btn")
let nextButton = document.querySelector(".next-btn")

let random = document.querySelector('.random')
console.log(prevButton,nextButton,random);


//load initial items
let currentItem = 0;
window.addEventListener("DOMContentLoaded",function(){
    const item = review[currentItem]
    reviewImage.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
})
//move to next item
nextButton.addEventListener("click",()=>{
         currentItem++;
         const item = review[currentItem]
         reviewImage.src = item.img;
         author.textContent = item.name;
         job.textContent = item.job;
         info.textContent = item.text;
      
        // nextButton.setAttribute("disabled",true);
       //  nextButton.style.color ="red";
       console.log(currentItem);
         if(currentItem >= review.length-1){
           currentItem = 0;
         }         
})

prevButton.addEventListener("click",()=>{
     currentItem--;
     const item = review[currentItem]
          nextButton.removeAttribute("disabled")
         nextButton.style.color ="blue";
         nextButton.style.opacity = 1;
     reviewImage.src = item.img;
     author.textContent = item.name;
     job.textContent = item.job;
     info.textContent = item.text;
     if(currentItem <=0){
       currentItem = review.length-1;
     }
})

random.addEventListener("click",()=>{
    let randomNumber= Math.floor(Math.random()*review.length)
    console.log(randomNumber);
    const item = review[randomNumber];
    reviewImage.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;

})