# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.



---

# Planora : AI Trip Planner

<div style="text-align: center;"> 

## :star: Building a Fullstack AI Trip Planner with React, Gemini AI, TailwindCSS & Firebase

### Features: 

- Environment, Vite setup
- Firebase, Database creation
- Google Authentication
- Generate Trip From Gemini AI
- React Routing
- Shadcn/UI
- React Google Autocomplete
- Display place photo using Google Photo API
- Full responsiveness on all pages
- Deploy App on Vercel

<br />

## About the Project :star2:
## About the Project :star2:

<p>
  The <strong>AI Trip Planner</strong> is a comprehensive web application designed to simplify the travel planning process by leveraging artificial intelligence and modern web technologies. This project aims to provide users with a seamless experience in organizing their trips, exploring destinations, and utilizing AI-generated suggestions for their itineraries.
</p>

<h3>Key Features:</h3>
<ul>
  <li><strong>AI-Driven Recommendations:</strong> The app uses Gemini AI to generate personalized trip itineraries based on user preferences, helping travelers discover new places and activities tailored to their interests.</li>
  <li><strong>Google Integration:</strong> Users can easily search for locations and receive autocomplete suggestions through the Google Places API, making it effortless to find and select destinations.</li>
  <li><strong>Photo Displays:</strong> Enhance trip planning with visuals by displaying stunning images of places using the Google Photo API.</li>
  <li><strong>Firebase Backend:</strong> The app utilizes Firebase for secure data storage and user authentication, allowing for easy login via Google and maintaining user trip histories.</li>
  <li><strong>Responsive Design:</strong> Built with TailwindCSS, the app ensures full responsiveness across devices, providing an optimal experience on mobile and desktop.</li>
  <li><strong>User-Friendly Interface:</strong> The app incorporates intuitive navigation and modern UI components, ensuring a pleasant user experience.</li>
</ul>

<h3>Target Audience:</h3>
<p>
  This application is targeted at travelers of all types, from solo adventurers to families, who seek to enhance their travel experience with smart planning tools and personalized suggestions. Whether planning a weekend getaway or a longer vacation, users can rely on the AI Trip Planner to streamline their journey.
</p>

<h3>Future Enhancements:</h3>
<ul>
  <li><strong>User Reviews and Ratings:</strong> Allow users to leave feedback on their trips and destinations, helping others make informed choices.</li>
  <li><strong>Social Sharing Features:</strong> Enable users to share their trip itineraries with friends and family via social media platforms.</li>
  <li><strong>Offline Mode:</strong> Implement offline capabilities for users to access their trip details even without internet connectivity.</li>
</ul>

<p>
  By combining AI, modern web development practices, and user-centric design, the AI Trip Planner aims to revolutionize how people plan their travels, making it more enjoyable and less stressful.
</p>

<br />

# You can check the app at this link :point_down:
<p style="text-align: center;">
  <a href="https://planora-trip.web.app/" target="_blank" style="background-color: #1D4ED8; color: white; padding: 15px 25px; border-radius: 5px; text-decoration: none; font-size: 18px;">
    Start Planning Your Trip Now!
  </a>
</p>

<p style="text-align: center; font-size: 16px; margin-top: 20px;">
  🌟 Your next adventure is just a click away! 🌟
</p>
## Setup `.env` file

### :key: Environment Variables

```bash
VITE_GOOGLE_PLACES_API_KEY=<Your Google Places API Key>
VITE_GOOGLE_GEMINI_AI_API_KEY=<Your Gemini AI API Key>
VITE_GOOGLE_AUTH_CLIENT_ID=<Your Google Auth Client ID>
VITE_FIREBASE_API_KEY=<Your Firebase API Key>
VITE_FIREBASE_AUTH_DOMAIN=<Your Firebase Auth Domain>
VITE_FIREBASE_PROJECT_ID=<Your Firebase Project ID>
VITE_FIREBASE_STORAGE_BUCKET=<Your Firebase Storage Bucket>
VITE_FIREBASE_MESSAGING_SENDER_ID=<Your Messaging Sender ID>
VITE_FIREBASE_APP_ID=<Your Firebase App ID>
```

## Project Setup

### Install dependencies:

```bash
npm install
```

### Development

To start the development server:

```bash
npm run dev
```

### Build

To create a production build:

```bash
npm run build
```

### Preview

To preview the production build:

```bash
npm run preview
```

## Dependencies

```json
{
  "@google/generative-ai": "^0.15.0",
  "@radix-ui/react-dialog": "^1.1.1",
  "@radix-ui/react-popover": "^1.1.1",
  "@radix-ui/react-slot": "^1.1.0",
  "@react-oauth/google": "^0.12.1",
  "axios": "^1.7.2",
  "class-variance-authority": "^0.7.0",
  "clsx": "^2.1.1",
  "dotenv": "^16.4.5",
  "firebase": "^10.14.1",
  "lucide-react": "^0.408.0",
  "next-themes": "^0.3.0",
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "react-google-autocomplete": "^2.7.3",
  "react-google-places-autocomplete": "^4.1.0",
  "react-icons": "^5.3.0",
  "react-router-dom": "^6.25.1",
  "rsuite": "^5.73.0",
  "sonner": "^1.5.0",
  "styled-components": "^6.1.13",
  "tailwind-merge": "^2.4.0",
  "tailwindcss-animate": "^1.0.7"
}
```

## Dev Dependencies

```json
{
  "@types/react": "^18.3.3",
  "@types/react-dom": "^18.3.0",
  "@vitejs/plugin-react": "^4.3.1",
  "autoprefixer": "^10.4.19",
  "eslint": "^8.57.0",
  "eslint-plugin-react": "^7.34.4",
  "eslint-plugin-react-hooks": "^4.6.2",
  "eslint-plugin-react-refresh": "^0.4.7",
  "postcss": "^8.4.39",
  "tailwindcss": "^3.4.6",
  "vite": "^5.3.4"
}
```

---

This updated README includes a detailed setup guide, environment variables configuration, and the dependencies section from your `package.json`.
