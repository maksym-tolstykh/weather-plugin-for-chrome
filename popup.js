const test = document.querySelector(".test")
const currTemp = document.querySelector(".curr-temp")
const currDesc = document.querySelector(".curr-desc")
const currData = document.querySelector(".curr-data")
const weatherList = document.querySelector(".days7-weather")
const dwItem = document.querySelector(".dw-item")
const currItem = document.querySelector("#w-icon")

const c_m = document.querySelector(".c-M")
const c_i = document.querySelector(".c-I")

 const Irpen = 'https://api.openweathermap.org/data/2.5/onecall?lat=50.5174&lon=30.231&exclude=minutely,hourly&appid=c823db2eeb341fbf373a90fbb5257847&units=metric&lang=ua'

 const Malyn = 'https://api.openweathermap.org/data/2.5/onecall?lat=50.7723&lon=29.2383&exclude=minutely,hourly&appid=c823db2eeb341fbf373a90fbb5257847&units=metric&lang=ua'





 const render =() => {
     currCity = localStorage.getItem('currentCity')
     console.log(currCity);
    fetch(currCity)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            currentWeatherDisplay(data)
        })

    const currentWeatherDisplay = (data) => {
        const {temp, feels_like, sunrise,sunset}= data.current
        const {description, main}= data.current.weather[0]
        date = new Date()

        localStorage.setItem('currentTemp',temp)
        localStorage.setItem('currentDesc',description)
        localStorage.setItem('currentDate',date.toLocaleString())

        currTemp.textContent= `${Math.round(temp)}°C`
        currDesc.textContent= `${description}`
        currData.textContent= `Останнє оновлення: ${date.toLocaleString()}`

        switch (main) {
            case 'Clouds':
                localStorage.setItem('currentImage', 'img/clouds.svg')
                break;

            case 'Sun':
                localStorage.setItem('currentImage', 'img/sun.svg')
                break;

            case 'Snow':
                localStorage.setItem('currentImage', 'img/snow.svg')
                break;
        
            default:
                localStorage.setItem('currentImage', 'img/none.png')
                break;
        }
        
    }

   

}
render()
const cwd=()=>{
    currentTemp = localStorage.getItem('currentTemp')
    currentDesc = localStorage.getItem('currentDesc')
    currentDate = localStorage.getItem('currentDate')
    currentImage = localStorage.getItem('currentImage')
    currTemp.textContent= `${Math.round(currentTemp)}°C`
    currDesc.textContent= `${currentDesc}`
    currData.textContent= `Останнє оновлення: ${currentDate}`
    currItem.src = currentImage
    
}
cwd()

c_m.addEventListener('click', ()=>{
    localStorage.setItem('currentCity', Malyn)
    cwd()
    render()
    
})

c_i.addEventListener('click', ()=>{
    localStorage.setItem('currentCity', Irpen)
    cwd()
    render()
    
})
