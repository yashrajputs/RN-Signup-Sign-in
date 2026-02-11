# RN-Signup-Sign-in

A React Native application built with Expo for user authentication, including signup and login screens. The app uses Firebase for backend authentication and features a clean UI with navigation between authentication and authenticated states.

## Features

- **User Registration**: Signup screen to create new accounts
- **User Login**: Login screen for existing users
- **Authentication State Management**: Context-based auth state handling
- **Persistent Login**: Uses AsyncStorage to remember user sessions
- **Welcome Screen**: Post-login screen with logout functionality
- **Responsive Navigation**: Stack navigation for auth and main app flows

## Technologies Used

- **React Native**: Framework for building native apps
- **Expo**: Platform for universal React applications
- **Firebase**: Backend-as-a-Service for authentication
- **React Navigation**: Navigation library for React Native
- **AsyncStorage**: For local data persistence

## Project Structure

- `screens/`: Contains LoginScreen, SignupScreen, and WelcomeScreen
- `components/`: Reusable UI components (Auth forms, buttons, inputs)
- `store/`: Authentication context provider
- `util/`: Utility functions for auth operations
- `constants/`: App-wide constants like styles and colors

## Setup Instructions

1. **Clone the repository**:
   ```
   git clone https://github.com/yashrajputs/RN-Signup-Sign-in.git
   cd RN-Signup-Sign-in
   ```

2. **Install dependencies**:
   ```
   npm install
   ```

3. **Start the development server**:
   ```
   npm start
   ```
   Or use Expo CLI:
   ```
   expo start
   ```

4. **Run on specific platforms**:
   - Android: `npm run android` or `expo start --android`
   - iOS: `npm run ios` or `expo start --ios`
   - Web: `npm run web` or `expo start --web`

## Prerequisites

- Node.js (v14 or later)
- Expo CLI: `npm install -g @expo/cli`
- For mobile development: Android Studio (for Android) or Xcode (for iOS)

## Firebase Configuration

Ensure you have a Firebase project set up with Authentication enabled. Update the Firebase config in the relevant files (likely in `util/auth.js` or similar).

## Contributing

Feel free to fork the repository and submit pull requests for improvements or bug fixes.

## License

This project is licensed under the MIT License.
