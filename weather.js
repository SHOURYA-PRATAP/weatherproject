let city = document.getElementById("city");
 let type = document.getElementById("type");
 let temp = document.getElementById("temp");
 let image = document.getElementById("img");
 let input = document.getElementById("inp") ;
 let wind=  document.getElementById("wind");
 let humidity=document.getElementById("humanity");
 let uv=document.getElementById("uv");
 let API_key = "d26b17badc582c5979a3580cb7c53cc2";

 const data = async function(search){
    let getData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_key}&units=metric`);
    let jsondata= await getData.json();
    console.log(jsondata);

    

    if(jsondata.cod==400){
      alert("Enter location");
    }
    else if(jsondata.cod==404){
      alert("Please enter write location")
    }


  // city.innerHTML=jsondata.name; 
   temp.innerHTML=Math.floor(jsondata.main.temp)+"°C";
   type.innerHTML=jsondata.weather[0].main;
   wind.innerHTML=Math.floor(jsondata.wind.speed)+"km/h"
   humidity.innerHTML=jsondata.main.humidity+"%";
      

   if(type.innerHTML=="Clouds"){
      image.src="clouds.png"
   }
   else if(type.innerHTML=="Clear"){
      image.src="Clear.jpg"
   }
   else if(type.innerHTML=="Haze"){
      image.src="Haze.jpeg"
   }
   else if(type.innerHTML=="Rain"){
      image.src="Rain.png"
   }
   else if(type.innerHTML=="Smoke"){
      image.src="smoke.avif"
   }
   else{
      image.src="Snow.jpeg"
   }
   



 }
 function myFun(){
    search=input.value;
   data(search);

 }
 