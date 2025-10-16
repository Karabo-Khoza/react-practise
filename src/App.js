import "./App.css";

function App() {
  return (
    <div class="weather-app">
      <header>
        <form class="search-form" id="search-form">
          <input
            type="search"
            placeholder="Enter a city..."
            required
            id="search-form-input"
            class="search-form-input"
          />
          <input type="submit" value="Search" class="search-form-button" />
        </form>
      </header>
      <main>
        <div class="weather-app-data">
          <div>
            <h1 class="weather-app-city" id="city">
              Johannesburg
            </h1>
            <p class="weather-app-details">
              <span id="time">Thursday 10:49</span>,
              <span id="description">partly cloudy</span>
              <br />
              Humidity: <strong id="humidity">34%</strong>, Wind:
              <strong id="wind-speed">12km/h</strong>
            </p>
          </div>
          <div class="weather-app-temperature">
            <div id="icon">⛅</div>
            <div class="temperature-value" id="temperature">
              14
            </div>
            <div class="temperature-unit">°C</div>
          </div>
        </div>
        <div class="weather-forecast" id="forecast"></div>
      </main>
      <footer>
        This project was coded by <span> </span>
        <a
          href="https://github.com/Karabo-Khoza"
          target="_blank"
          rel="noreferrer"
        >
          Karabo Khoza
        </a>
        , is open-sourced on <span> </span>
        <a
          href="https://github.com/Karabo-Khoza/react-practise"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
        , and hosted on <span> </span>
        <a
          href="https://reactpractis.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Netlify
        </a>
      </footer>
    </div>
  );
}

export default App;
