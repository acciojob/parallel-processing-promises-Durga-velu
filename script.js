//your JS code here. If required.
const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");
const body = document.querySelector(body);
const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];



btn.addEventListener(("click"),(e)=>{
 e.preventDefault();

let promise=new Promise((resolve,reject)=>{

  return images.forEach((img)=>{
           if(img){
            resolve (img)
           }
           else{
            reject(error)
           }
    })
})

Promise.all(promise).then((response)=>{

    let img=document.createElement("img");

img.innerHTML=`
<img src="${response}" alt="">
`
output.appendChild(img)

}).catch((error)=>{


    let errormsg=document.createElement("div");
    errormsg.innerHTML=error
    body.appendChild(errormsg)
 

})

})










