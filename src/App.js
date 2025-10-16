import "./App.css";
import axios from "axios";

function App() {
  function handleWeather(response) {
    alert(
      `The temperature in Johannesburg is ${response.data.temperature.current}`
    );
  }

  let key = "abcf5d3b0bd02t169o09a45ab84f1629";
  let url = `https://api.shecodes.io/weather/v1/current?query={Johannesburg}&key=${key}`;

  axios.get(url).then(handleWeather);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World!!!!!</h1>
      </header>
    </div>
  );
}

export default App;
