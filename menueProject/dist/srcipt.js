const menue = [
  {
    id: 1,
    title: "butter milk",
    category: "breakfast",
    price: 40.9,
    img: "food1.jpg",
    desc: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Sed lectus mi, vulputate at sodales ornare, vulputate nec 
        dolor. Donec in ante dui.
        Sed cursus molestie turpis,  `,
  },
  {
    id: 2,
    title: "pizza",
    category: "lunch",
    price: 129,
    img: "food2.jpg",
    desc: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Sed lectus mi, vulputate at sodales ornare, vulputate nec 
        dolor. Donec in ante dui.
        `,
  },
  {
    id: 3,
    title: "burger",
    category: "shakes",
    price: 156,
    img: "food3.jpg",
    desc: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Sed lectus mi, vulputate at sodales ornare, vulputate nec 
        dolor. Donec in ante dui.
        Sed cursus molestie turpis, vehicula ultrices est.
     `,
  },
  {
    id: 4,
    title: "salad",
    category: "lunch",
    price: 199,
    img: "food4.jpg",
    desc: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Sed lectus mi, vulputate at sodales ornare, vulputate nec 
        dolor 
        Sed cursus molestie turpis, vehicula ultrices est.
       `,
  },
  {
    id: 5,
    title: "butter milk",
    category: "breakfast",
    price: 40.9,
    img: "food5.jpg",
    desc: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Sed lectus mi, vulputate at sodales ornare, vulputate nec 
   
        Sed cursus molestie turpis, vehicula ultrices est.
         Nulla quis vulputate augue, quis laoreet orci.`,
  },
  {
    id: 6,
    title: "butter milk",
    category: "shakes",
    price: 40.9,
    img: "food6.jpg",
    desc: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Sed lectus mi, vulputate at sodales ornare, vulputate nec 
 
        Sed cursus molestie turpis, vehicula ultrices est.
         Nulla quis vulputate augue, quis laoreet orci.`,
  },
  
];

const sectionCenter = document.querySelector(".section-center")
const btnContainer = document.querySelector(".btn-container")

window.addEventListener("DOMContentLoaded",()=>{
displayMenueItems(menue);
displayButton(menue);
//selecting the buttons after adding
const filterBtn = document.querySelectorAll(".filter-btn")
//filtering the items 
filterItems(filterBtn);
})
  

//filtering function 
filterItems = (button)=>{
    button.forEach((btn)=>{
        btn.addEventListener("click",(e)=>{
           const category = e.currentTarget.dataset.id;
           if(category === 'all'){
            console.log('all');
            displayMenueItems(menue);
           }else{
           let menueCategory = menue.filter((menueItem)=>{
            return menueItem.category === category;
           })
           displayMenueItems(menueCategory);
        }
            
        })
     })
}
 displayButton = (menueItems)=>{
    const categories = menueItems.reduce(function(values,items){
        if(!values.includes(items.category)){
           values.push(items.category);
        }
        return values;
    },['all'])
    console.log(categories)
    let categoryBtn = categories.map((category)=>{
       return ` <button
               class="filter-btn capitalize
                text-blue-950 border-orange-700 border-2
                 p-2 rounded-md bg-orange-300 w-[100px]"
                  type="button"  data-id="${category}">
                  ${category}
                  </button>
                  `
    })
   categoryBtn = categoryBtn.join("");
   btnContainer.innerHTML = categoryBtn;
 }
displayMenueItems = (menueItems)=>{
    let displayMenue = menueItems.map((item)=>{
 
        return ` <article class="menue-item w-full md:w-4/5 lg:w-[2/4] flex flex-col md:flex-row gap-[30px]">
        <img src="../${item.img}" alt="menue item" class="photo w-full md:w-[50%] md:h-[200px] rounded-md " />
        <div class="item-info flex flex-col gap-4">
          <header class="flex gap-6 border-b-2 border-orange-400 justify-between ">
            <h4 class="capitalize text-blue-900 font-semibold">${item.title}</h4>
            <h2 class="price text-blue">$${item.price}</h2>
          </header>
          <p>
            ${item.desc}
          </p>
        </div>
    </article>`;
        })
        displayMenue = displayMenue.join("");
       
        sectionCenter.innerHTML = displayMenue
}