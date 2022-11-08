// ==UserScript==
// @name        Directly download image from zerochan.net
// @namespace   https://kyoya.ga/mal
// @match       https://static.zerochan.net/*
// @match       https://www.zerochan.net/*
// @version     1.7
// @author      kyoyacchi
// @description Downloads image when you click to download icon on zerochan.net.
// @license     none
// @icon        https://www.google.com/s2/favicons?domain=zerochan.net
// ==/UserScript==


window.onload = function (){
  let static = window.location.href.split("/")[2]
if (static == "static.zerochan.net"){

let isim = window.location.href.split("/")[3] || "zerochan.png"
 downloadImage(window.location.href,isim)
  console.log(`downloaded image: ${isim}`)


function  toDataURL(url) {
    return fetch(url).then((response) => {
            return response.blob();
        }).then(blob => {
            return URL.createObjectURL(blob);
        });
  }

  async function downloadImage(url,isimcik) {
        const a = document.createElement("a");
        a.href = await toDataURL(url);
        a.download = isimcik
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
  }

  // https://stackoverflow.com/a/56041756/19276081
} else if (static == "www.zerochan.net") {
  //console.log(window.location.href + " adresindesiniz.")
//let buton = document.querySelector(".download-button")
let buton = document.getElementsByClassName("download-button")[0]

///
function  toDataURL(url) {
    return fetch(url).then((response) => {
            return response.blob();
        }).then(blob => {
            return URL.createObjectURL(blob);
        });
  }

  async function downloadImage(url,isimcik) {
        const a = document.createElement("a");
        a.href = await toDataURL(url);
        a.download = isimcik
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
  }
/////

let link = buton.href
let yedek = []
yedek.push(link)
  let name = link.split("/")[3] || "zerochan.png"
//  console.log(name)
  yedek.push(name)

buton.removeAttribute("href")

buton.addEventListener("click", function(e) {
downloadImage(yedek[0],yedek[1])
  console.log(`downloaded image: ${yedek[1]||"??"}`)
//console.log("Someone clicked to download button")
}, false);

}
}

