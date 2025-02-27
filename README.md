# 🌦️ Weather App

## 🚀 Introduction
Welcome to the **Weather App**—a dynamic and responsive weather application built with **React.js** and powered by the **OpenWeatherMap API**. This app provides real-time weather updates with an intuitive user experience, making it easy for users to check the weather for any location worldwide.

## ✨ Features

### 🌏 Default Weather for Chennai
- Upon launch, the app displays Chennai's weather, providing instant updates without requiring any input.
![Screenshot 1](https://github.com/ShaliniKanniyappan/react-weather-app/blob/main/img/default%20chennai.jpeg)

### 🔍 Search Weather by City
- Users can enter any city name to retrieve accurate, real-time weather updates for that location.
![screenshot 2]()

### ⚡ Quick Access to Predefined Cities
- One-click buttons allow users to quickly view the weather for select popular cities.
![Screenshot 3](https://github.com/ShaliniKanniyappan/react-weather-app/blob/main/img/Quick%20access.jpeg)

### 📍 Weather for Your Current Location
- Using the **Geolocation API**, the app detects the user's location and displays real-time weather updates accordingly.
![Screenshot 4](https://github.com/ShaliniKanniyappan/react-weather-app/blob/main/img/Current%20Location.jpeg)

## 💻 Tech Stack
- **React.js** - For building the interactive UI.
- **OpenWeatherMap API** - For fetching real-time weather data.
- **Geolocation API** - To retrieve the user's current location.
- **CSS** - For responsive and mobile-friendly design.

## 🛠️ Installation & Setup

### Prerequisites
Make sure you have **Node.js** and **npm** installed on your system.

### Install Dependencies
```bash
npm install
```

### Get API Key
1. Create an account on [OpenWeatherMap](https://openweathermap.org/).
2. Get your API key from the OpenWeatherMap dashboard.
3. Create a `.env` file in the root directory and add the API key:
```env
REACT_APP_WEATHER_API_KEY=your_api_key_here
```

### Run the App
```bash
npm start
```

## 🌟 Future Improvements
- **Hourly & Weekly Forecasts**
- **Dark Mode UI**
- **Weather Alerts & Notifications**
- **Integration with Google Maps**
