Form Handling App

This repository contains a simple React application for handling form submissions using Firebase Firestore for storage.

Features

- Allows users to submit their name, email, contact number, and a message.
- Validates input fields for required fields and correct formats.
- Stores form submissions securely in Firebase Firestore.
- Provides real-time feedback using toast notifications for success and error messages.

Technologies Used

- React
- Firebase Firestore
- react-toastify for notifications

Getting Started

Clone the repository:

git clone https://github.com/gokulmohankumar/Form_handling_Firestore.git
cd formhandling

Set Up Firebase Configuration:

Create a .env file in the root directory and add your Firebase configuration. Replace your-api-key, your-auth-domain, and other placeholders with your actual Firebase project credentials:

VITE_FIREBASE_KEY=your-api-key
VITE_AUTH_DOMAIN=your-auth-domain
VITE_DATABASE_URL=your-database-url
VITE_PROJECT_ID=your-project-id
VITE_STORAGE_BUCKET=your-storage-bucket
VITE_MESSAGING_SENDER_ID=your-messaging-sender-id
VITE_FIREBASE_APP_ID=your-app-id

Install Dependencies:

Install dependencies required for the project:

npm install

Start the Development Server:

Run the following command to start the development server:

npm run dev

Usage:

Fill out the form with your name, email, contact number, and message, and click "Submit" to send the data to Firebase Firestore.

Linting:

To run ESLint for linting the code:

npm run lint

This command checks for any code style or syntax errors.

Building for Production:

To build the project for production deployment:

npm run build

This command generates optimized production-ready files in the dist directory.

Preview Production Build:

To preview the production build locally:

npm run preview

This will serve the production build locally for previewing before deployment.
