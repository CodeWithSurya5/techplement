let inputEle = document.getElementById("location-input")
let tempEle = document.getElementById("temp-value")
let humiEle= document.getElementById("humi-value")
let speedEle = document.getElementById("speed-value")
let locEle = document.getElementById("location")
let weatherdescEle = document.getElementById('weather-desc')
let btnEle = document.getElementById("btn");


const apiKey = '8f4485f5f505ef4d2ad72e90b213a15f';

const getCityDetails =() =>{
    if(inputEle.value =="")
        alert("Please Enter some location")
    else{
        loc = inputEle.value
        url = `https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${apiKey}`
        fetch(url).then(res => res.json())
       .then(data => {
           console.log(data)
           const{name} = data
           const{feels_like} = data.main
           const{description} = data.weather[0]
           const{humidity} = data.main
           const{speed} = data.wind
           console.log(humidity)
           console.log(speed)
           tempEle.innerText = Math.floor(feels_like-273);
           locEle.innerText = name;
           speedEle.innerText=speed;
           humiEle.innerText=humidity;
           weatherdescEle.innerText= description
        })
        .catch(()=>{
            alert("Enter valid location")
        })
        inputEle.value = ""
    }
}
btnEle.addEventListener("click", getCityDetails);
inputEle.addEventListener("keyup", e => e.key === "Enter" && getCityDetails());