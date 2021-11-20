const test = document.querySelector(".test")
const currTemp = document.querySelector(".curr-temp")
const currDesc = document.querySelector(".curr-desc")
const currData = document.querySelector(".curr-data")
const weatherList = document.querySelector(".days7-weather")
const dwItem = document.querySelector(".dw-item")

test.addEventListener('click', () => {
    fetch('https://api.openweathermap.org/data/2.5/onecall?lat=50.7723&lon=29.2383&exclude=minutely,hourly&appid=c823db2eeb341fbf373a90fbb5257847&units=metric&lang=ua')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            currentWeatherDisplay(data)
            //renderListWeather(data)
        })

    const currentWeatherDisplay = (data) => {
        const {temp, feels_like, sunrise,sunset}= data.current
        const {description}= data.current.weather[0]
        date = new Date()
        localStorage.setItem('currentTemp',temp)
        localStorage.setItem('currentDesc',description)
        localStorage.setItem('currentDate',date.toLocaleString())
        currTemp.textContent= `${Math.round(temp)}°C`
        currDesc.textContent= `${description}`
        currData.textContent= `Останнє оновлення: ${date.toLocaleString()}`
        
    }

   
    /*const renderListWeather= (data)=>{
        
        data.daily.forEach(item => {
            const{dt,temp:{max,min}} = item
            const {description} = item.weather[0]
            console.log(item);
            const date = new Date(1637402400)
            const itemW =document.createElement('div')
            itemW.classList.add('dw-item')
            itemW.innerHTML=`

            <span>${date.toLocaleDateString("us-US", options)}</span>
            <span>max:${max}</span>
            <span>min:${min}</span>
            <span>${description}</span>
            
                        
            
            `
            weatherList.append(itemW)
        });
    }*/

})  
const cwd=()=>{
    currentTemp = localStorage.getItem('currentTemp')
    currentDesc = localStorage.getItem('currentDesc')
    currentDate = localStorage.getItem('currentDate')
    currTemp.textContent= `${Math.round(currentTemp)}°C`
    currDesc.textContent= `${currentDesc}`
    currData.textContent= `Останнє оновлення: ${currentDate}`
}
cwd()