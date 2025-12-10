
function search(){

let searchbtn = document.querySelector(".btn");
let city = document.querySelector(".text");
searchbtn.addEventListener("click"),() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f6c3288baa6f834766a9cc7a3183bf16&units=metric`)
    .then(res => res.json)
    .then(data)
    console.log(data)
}

let temp= document.querySelector(".temperature");
temp.textContent = data.main.temp + "°C";
let humidi = document.querySelector(".humi")

}

search();