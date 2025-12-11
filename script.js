function search() {

    let searchbtn = document.querySelector(".btn");
    searchbtn.addEventListener("click", () => {
        let city = document.querySelector(".text").value.trim();
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f6c3288baa6f834766a9cc7a3183bf16&units=metric`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                
                let temper = document.querySelector(".temperature");
                temper.textContent = data.main.temp + "°C";
                let humidi = document.querySelector(".pourcentageHumi");
                humidi.textContent = data.main.humidity + "%";
                let cts = document.querySelector(".cities");
                cts.textContent = data.name;

                let etat = document.querySelector(".descriptionMeteo");
                let conditions = data.weather[0].main.toLowerCase();
                etat.textContent = conditions;
                
                
                let icons = {
                    clear: "images/animated/day.svg",
                    clouds:"images/animated/cloudy-day-1.svg",
                    rain :"images/animated/rainy-1.svg",
                    snow:"images/animated/snowy-1.svg",
                };
                
                let iconPic = icons[conditions] || "images/animated/weather.svg";
                document.querySelector(".meteoIcon").src = iconPic;
                
            

            });

    });



}

search();