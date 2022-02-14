var im1 = document.getElementById("im1");
var im2 = document.getElementById("im2");
var im3 = document.getElementById("im3");
var im4 = document.getElementById("im4");
var im5 = document.getElementById("im5");
var im6 = document.getElementById("im6");
var t1 = document.getElementById("text1");
var t2 = document.getElementById("text2");
var t3 = document.getElementById("text3");
var t4 = document.getElementById("text4");
var t5 = document.getElementById("text5");
var t6 = document.getElementById("text6");

const imageArray = [im1, im2, im3, im4, im5, im6];
const headArray = [t1, t2, t3, t4, t5, t6];
const urlArray = [];

var bar = document.getElementById("bar");
function barState() {
  if (bar.style.height == "100%") {
    bar.style.height = "0%";
  }
  else {
    bar.style.height = "100%";
  }
}

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos != currentScrollPos) {
    bar.style.height = "0%";
  }
  prevScrollpos = currentScrollPos;
}

var count = 0;
var img;

var xhr = new XMLHttpRequest();
xhr.open('GET', "https://newsapi.org/v2/top-headlines?country=in&apiKey=f2f00522c49f451aab8d760de3184193", true);
xhr.onload = function () {
  if (this.status == 200) {
    let json = JSON.parse(this.responseText);
    // console.log(json);

    for (let count = 0; count < imageArray.length; count++) {
      let article = json.articles[count];
      
      var img = article.urlToImage;
      var head = article.title;
      var url = article.url;
      urlArray[count] = url;

      imageArray[count].src = img;
      // if(img === ""){
      //   imageArray[count].src = "/logo.png";
      // }
      headArray[count].innerHTML = head;
    }
    if(imageArray[5].src == null){
    imageArray[5].src = "/logo.png"; }
  }
}
xhr.send();

function loadLink1(){
  window.location.href = urlArray[0];
}
function loadLink2(){
  window.location.href = urlArray[1];
}
function loadLink3(){
  window.location.href = urlArray[2];
}
function loadLink4(){
  window.location.href = urlArray[3];
}
function loadLink5(){
  window.location.href = urlArray[4];
}
function loadLink6(){
  window.location.href = urlArray[5];
}