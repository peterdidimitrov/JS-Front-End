function attachEvents() {
  const baseURL = "http://localhost:3030/jsonstore/forecaster/";
  const location = document.querySelector("#location");

  document.querySelector("#submit").addEventListener("click", onClick);
  const forecast = document.querySelector("#forecast");

  const forecastIcons = {
    Sunny: "&#x2600;",
    "Partly sunny": "&#x26C5;",
    Overcast: "&#x2601;",
    Rain: "&#x2614;",
    Degrees: "&#176;",
  };

  function onClick() {
    let currentLocation = "";
    let currentLocationCode = "";

    fetch(`${baseURL}locations`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Error");
      })
      .then((cityData) => {
        for (const elem of cityData) {
          if (elem.name === location.value) {
            currentLocation = location.value;
            currentLocationCode = elem.code;
            break;
          }
        }

        fetch(`${baseURL}today/${currentLocationCode}`)
          .then((response) => {
            if (response.ok) {
              return response.json();
            }
          })
          .then((forecastDataToday) => {
            let { forecastToday, locationName } = forecastDataToday;
            const currentForecast = document.querySelector("#current");
            forecast.style.display = "block";

            //create div
            let divForecast = document.createElement("div");
            divForecast.className = "forecasts";
            currentForecast.appendChild(divForecast);

            //crate span conditional symbol
            let spanConditionalSymbol = document.createElement("span");
            spanConditionalSymbol.className = "condition symbol";
            // spanConditionalSymbol.innerHTML =
            //   forecastIcons[forecastToday["condition"]];
            divForecast.appendChild(spanConditionalSymbol);

            //create span main condition
            let spanMain = document.createElement("span");
            spanMain.className = "condition";
            divForecast.appendChild(spanMain);

            //create spans forecast - data
            let spanForecastName = document.createElement("span");
            spanForecastName.className = "forecast-data";
            spanMain.appendChild(spanForecastName);

            let spanForecastTemp = document.createElement("span");
            spanForecastTemp.className = "forecast-data";
            spanMain.appendChild(spanForecastTemp);

            let spanForecastDescription = document.createElement("span");
            spanForecastDescription.className = "forecast-data";
            spanMain.appendChild(spanForecastDescription);
          });
      });
  }
}

attachEvents();
