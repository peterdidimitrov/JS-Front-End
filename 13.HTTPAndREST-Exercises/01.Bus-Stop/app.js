async function getInfo() {
  const busStopID = document.querySelector("#stopId").value;
  const stopName = document.querySelector("#stopName");
  const list = document.querySelector("#buses");

  list.innerHTML = "";

  const servece = {
    busInfoURL: (ID) => `http://localhost:3030/jsonstore/bus/businfo/${ID}`,
  };

  let busStopInfo;

  try {
    const response = await fetch(servece.busInfoURL(busStopID));
    busStopInfo = await response.json();
  } catch (e) {
    stopName.textContent = "Error";
  }
  stopName.textContent = busStopInfo.name;

  Object.entries(busStopInfo.buses).map(([busNumber, timeInMinutes]) => {
    const item = document.createElement("li");
    item.textContent = `Bus ${busNumber} arrives in ${timeInMinutes} minutes`;

    list.appendChild(item);
  });
}
