var countriesCodes=
[
    { name:'egypt' , code:'eg'},
    { name:'italy' , code:'it'},
    { name:'japan' , code:'jp'},
    { name:'france' , code:'fr'},
    
]
var countryName ;
var allDate;
var countryCode;
var links = document.getElementsByClassName("nav-link")
for(var i=0;i<links.length;i++)
{
    links[i].addEventListener("click",function(e){
        var countryName =e.target.text;

        for(var i=0;i<countriesCodes.length ; i++)
{
    if(countriesCodes[i].name== countryName)
    {
        countryCode = countriesCodes[i].code;
        getPosts(countryCode)
    }
}

    })
}
getPosts("us")

function getPosts(code)
{



var req = new XMLHttpRequest();

req.open
 ("GET","https://newsapi.org/v2/top-headlines?country="+code+"&category=business&apiKey=695cad5da82346c586ec268fa46c8750");
req.send();
req.onreadystatechange =function()
{
    if(req.readyState == 4 && req.status == 200)
    {
        allDate =JSON.parse( req.response).articles;
        displayData();
    }
}
}
function displayData(){
    var temp =``;
    for(var i=0; i<allDate.length;i++)
    {
        temp +=` <div class="col-md-3">
        <div class="post">
            <img class="img-fluid" src="`+allDate[i].urlToImage+`"/>
            <h5>`+allDate[i].title+`</h5>
            <p>`+allDate[i].content+`</p>
        </div>
    </div>
    </div>`;
    }
    document.getElementById("rowData").innerHTML = temp;
    }


var imgs=Array.from( document.getElementsByClassName("img-item") );
var lightBoxContainer= document.querySelector(".lightBoxContainer");
var close = document.getElementById("close");
var next =document.getElementById("next");
var prev =document.getElementById("prev");


var currentImgIndex =0;

for(var i=0; i<imgs.length;i++)
{
    imgs[i].addEventListener("click",showLightBox)
}
function showLightBox(e)
{
    lightBoxContainer.style.display="flex";
    var imgSrc = e.target.src ;
    currentImgIndex = imgs.indexOf(e.target);
    lightBoxContainer.firstElementChild.style.backgroundImage ="url("+imgSrc+")";
}

close.addEventListener("click",function(){
    lightBoxContainer.style.display="none";
})



next.addEventListener("click",nextSlider)
function nextSlider()
{
    currentImgIndex++;
    if(currentImgIndex == imgs.length)
    {
        currentImgIndex =0;
    }
    lightBoxContainer.firstElementChild.style.backgroundImage ="url("+imgs[currentImgIndex].src+")";

}



prev.addEventListener("click",prevSlider)

function prevSlider()
{
    currentImgIndex--;
    if(currentImgIndex < 0)
    {
        currentImgIndex = imgs.length-1;
    }
    lightBoxContainer.firstElementChild.style.backgroundImage ="url("+imgs[currentImgIndex].src+")";

}

document.addEventListener("keydown",function(e){
    if(e.keyCode == 39)
    {
        nextSlider();
    }
    else if (e.keyCode == 37)
    {
        prevSlider();
    }
    else if (e.keyCode == 27)
    {
        lightBoxContainer.style.display="none";

    }
})
