# Movie Recommendation Web App

A simple web application that recommends movies based on user preferences using Gemini API. Users can input 
their movie preferences and receive 3-5 relevant movie suggestions.

## 🚀 Deploying on Render
[🔗 Open Movie Recommendation App](https://final-movie-reccommendation-1.onrender.com)

## Technologies Used

- **React** - Frontend framework
- **Axios** - HTTP client for API calls
- **Vite** - Build tool and dev server
- **Express** - Backend framework
- **MongoDB** - Database
- **Google Gemini API** - AI-powered recommendations (gemini-1.5-flash model)
- **CORS** - Cross-origin resource sharing

## Features

- **Frontend**: React with a clean, modern UI using Axios for API calls
- **Backend**: Node.js with Express
- **Database**: MongoDB to store user inputs and recommendations
- **AI Integration**: Google Gemini API (gemini-2.5-flash) for intelligent movie recommendations

## Setup Instructions

### 1. Install Dependencies
### Backend
```bash
npm run dev
```
###Frontend
```bash
npm run dev
```

```
movie-rec/
├── src/
│   ├── components/
│   │   ├── MovieForm.jsx      # Form component for user input (uses Axios)
│   │   └── MovieList.jsx      # Component to display recommendations
│   ├── App.jsx                # Main React component
│   ├── main.jsx               # React entry point
│   └── style.css              # Application styles
├── server/
│   ├── index.js               # Express server setup
│   ├── openai.js              # Gemini API integration
│   └── database.js            # MongoDB database operations
├── package.json
├── vite.config.js
└── README.md
```





