# Form Handling App

This repository contains a simple React application for handling form submissions using Firebase Firestore for storage.

## Features

- Allows users to submit their name, email, contact number, and a message.
- Validates input fields for required fields and correct formats.
- Stores form submissions securely in Firebase Firestore.
- Provides real-time feedback using toast notifications for success and error messages.

## Technologies Used

- React
- Firebase Firestore
- `react-toastify` for notifications

## Getting Started

To run this project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/gokulmohankumar/Form_handling_Firestore.git
   cd formhandling
   ```

2. **Install dependencies:**
Install dependencies required for the project:
  ```bash
  npm install
```

3. **Set Up Firebase Configuration:**
Create a .env file in the root directory and add your Firebase configuration.<bt> Replace your-api-key, your-auth-domain, and other placeholders with your actual Firebase project credentials:<br>
```bash
VITE_FIREBASE_KEY=your-api-key<br>
VITE_AUTH_DOMAIN=your-auth-domain<br>
VITE_DATABASE_URL=your-database-url<br>
VITE_PROJECT_ID=your-project-id<br>
VITE_STORAGE_BUCKET=your-storage-bucket<br>
VITE_MESSAGING_SENDER_ID=your-messaging-sender-id<br>
VITE_FIREBASE_APP_ID=your-app-id<br>
```
4. **Start the Development Server:**
Run the following command to start the development server:
```bash
npm run dev
```
