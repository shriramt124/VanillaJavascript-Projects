let filters = [{
    name:"shriarm tiwar",
    value:60
},
{
    name:"arjun",
    value:45
}]

console.log(filters);
for(let ele of filters){
    console.log(ele.name.includes("arjun"));
    
}