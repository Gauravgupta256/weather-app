# Weather App

A simple and responsive weather application built with React and Vite. This app allows users to search for any city worldwide and get the current weather information including temperature, humidity, wind speed, and weather conditions with corresponding icons.

## Features

- Search for any city to get current weather data.
- Displays temperature in Celsius.
- Shows humidity percentage and wind speed in km/h.
- Weather condition icons for clear, cloud, drizzle, rain, snow, etc.
- Default city weather shown on initial load (Delhi).
- Error handling for invalid city names or failed API requests.
- Loading shimmer effect while fetching data.

## Technologies Used

- React 19
- Vite
- OpenWeatherMap API
- CSS for styling

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd weather-app
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Usage

1. Create a `.env` file in the root of the project and add your OpenWeatherMap API key:
   ```
   VITE_APP_ID=your_openweathermap_api_key
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Open your browser and go to the URL shown in the terminal (usually `http://localhost:5173`).
4. Use the search bar to enter a city name and get the current weather information.

## Available Scripts

- `npm run dev` - Starts the development server with hot module replacement.
- `npm run build` - Builds the app for production.
- `npm run preview` - Previews the production build locally.
- `npm run lint` - Runs ESLint to check for code quality issues.

## Environment Variables

- `VITE_APP_ID`: Your OpenWeatherMap API key. This is required to fetch weather data.

## License

This project is open source and available under the MIT License.

## Credits

Created by Gaurav Gupta. Feel free to contribute and collaborate with me.