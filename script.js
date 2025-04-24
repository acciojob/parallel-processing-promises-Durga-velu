//your JS code here. If required.
const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];



let promises=()=>{
    return new Promise((resolve,reject)=>{

let img=images.map((img)=>{
          if(img){
          resolve (img)
          }
          else{
          reject("images are not downloading");
          }
        })

        
    })
}


btn.addEventListener(("click"),(e)=>{
 


 output.innerHTML="Images are Downloading"



Promise.all(promises).then(res=>{

output.innerHTML=""
const image=res.forEach(items=>{
    `<img src=${items.url}>`
})
output.appendChild(image)

}).catch((error)=>{

output.innerHTML=""

output.innerHTML=error
})







})














