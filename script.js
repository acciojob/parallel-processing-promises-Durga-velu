//your JS code here. If required.
const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];



let downloadImage =(img)=>{
    return new Promise((resolve,reject)=>{
  const image = new Image();
		image.src=img.url

		image.onload=()=>resolve(img);
		image.onerror=()=>reject(`Failed to load image at ${img.url}`)


        
    })
}

const promises = images.map(downloadImage);

btn.addEventListener(("click"),(e)=>{
 


 output.innerHTML="Images are Downloading...."



Promise.all(promises).then(res=>{

output.innerHTML=""
res.forEach(items=>{
   const imgElement = document.createElement("img");
        imgElement.src = items.url;
        output.appendChild(imgElement);
})
}).catch((error)=>{

output.innerHTML=""

output.innerHTML=error
})







})














