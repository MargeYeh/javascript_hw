async function getRandomNumber() {
    return new Promise((resolve, reject) => {
    setTimeout(() => resolve(getRandomNumber), 500)
    });
  }
getRandomNumber();
//--------------------------------------------------------

  let cityName = Seattle;

  async function fetchCityJSON () {
    let response = await fetch('https://geocode.xyz/seattle?json=1');
    let city = await response.json();
    return city;
  }

  fetchCityJSON()
      .then(city => console.log(city))
      .catch(reason => console.log(reason.message))