//Accessing  Dom elements using  different /assigning elements  to  their appropriate methods
const demoId1 = document.getElementById("demo1");
const demoClass = document.getElementsByClassName("demo");
const demoTag = document.getElementsByTagName("article");
const demoQuery = document.querySelector("#demo-query");
const demoQueryAll = document.querySelectorAll(".demo-query-all");
//changing the  border color  of  the  demo id  to purple
//demoId1.style.border = "2px solid purple";

//translating code

for (i = 0; i < demoClass.length; i++) {
  demoClass[i].style.border = "2px solid orange";
  
}


//changing border color of tags 

for (i=0;i<demoTag.length;i++)
{
    demoTag[i].style.border= '2px solid blue'
}

demoQuery.style.border='2px solid red'

demoQueryAll.forEach(
query=>{
    query.style.border='2px solid green'
});

