var div=document.createElement("div");
div.style.textAlign="center";
var input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","country")
var button=document.createElement("button")
button.innerHTML="search";
button.addEventListener("click",foo);
var region=document.createElement("div")
region.setAttribute("id","region");
div.append(input,button,region)
document.body.append(div)
var section=document.createElement("section");
section.setAttribute("class" , "container");

async function foo(){
     let res=document.getElementById("country").value; 


 let url=`https://restcountries.com/v2/all?name=${res}`;
    
let result =await fetch (url);
let result1=await result.json();
console.log(result1);
for(var i=0;i<result1.length;i++){
if(res==`${result1[i].region}`){
console.log(`${result1[i].name}`)
    console.log(`${result1[i].capital}`)
    console.log(`${result1[i].region}`)
    console.log(`${result1[i].alpha2Code}`)

    var innerdiv=document.createElement("div");
   
 innerdiv.innerHTML=` 
 <div class="box">
 
  <div id="name">${result1[i].name}</div>
  <img src=${result1[i].flag} class="card-img-top" alt="..."></img>
 <div id="capital">Capital : ${result1[i].capital}</div> 
<div id="region">Region : ${result1[i].region}</div> 
<div id="cc">Country code : ${result1[i].alpha2Code}</div>
</div>


`

section.append(innerdiv);

  document.body.append(section)
   }
   if(res==`${result1[i].name}`){
    console.log(`${result1[i].name}`)
        console.log(`${result1[i].capital}`)
        console.log(`${result1[i].region}`)
        console.log(`${result1[i].alpha2Code}`)
    
        var innerdiv=document.createElement("div");
        innerdiv.innerHTML=` <div class="box">
 
        <div id="name">${result1[i].name}</div>
        <img src=${result1[i].flag} class="card-img-top" alt="..."></img>
       <div id="capital">Capital : ${result1[i].capital}</div> 
      <div id="region">Region : ${result1[i].region}</div> 
      <div id="cc">Country code : ${result1[i].alpha2Code}</div>
      </div>
      
      
      `
      
      section.append(innerdiv);
      
        document.body.append(section)
    
       }
       if(res==""){
        console.log(`${result1[i].name}`)
            console.log(`${result1[i].capital}`)
            console.log(`${result1[i].region}`)
            console.log(`${result1[i].alpha2Code}`)
        
            var innerdiv=document.createElement("div");
            innerdiv.innerHTML=` <div class="box">
     
            <div id="name">${result1[i].name}</div>
            <img src=${result1[i].flag} class="card-img-top" alt="..."></img>
           <div id="capital">Capital : ${result1[i].capital}</div> 
          <div id="region">Region : ${result1[i].region}</div> 
          <div id="cc">Country code : ${result1[i].alpha2Code}</div>
          </div>
          
          
          `
          
          section.append(innerdiv);
          
            document.body.append(section)
        
           }
}
}







     
foo();