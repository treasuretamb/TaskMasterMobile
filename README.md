# Overview

As a software engineer, I wanted to get hands-on experience building a mobile app from scratch with a modern cross-platform framework, rather than just reading about it. I chose to build TaskMaster, a to-do list app for iOS, Android, and web, so I could practice the full loop of mobile development: setting up navigation between screens, handling user input, and persisting data on the device itself.

TaskMaster lets a user view their tasks in a list, add a new task from a dedicated screen, and tap any task to mark it complete or incomplete. Every change is saved to the device's local storage, so the list is still there the next time the app is opened, even after a full restart.

My goal in building this was to get comfortable with Expo Router's file-based navigation, TypeScript in a React Native context, and using AsyncStorage for simple persistence, skills I can carry into larger, more complex mobile projects going forward.

[Software Demo Video](https://www.youtube.com/watch?v=B8oeRBkVI0o)

# Development Environment

I built this app using:

* [Visual Studio Code](https://code.visualstudio.com/) as my code editor
* [Node.js](https://nodejs.org/) and npm to manage dependencies and run scripts
* [Expo](https://expo.dev) and the Expo CLI to build, bundle, and run the app
* [Expo Go](https://expo.dev/go) on a physical device, plus Android/iOS simulators, for testing
* [Git](https://git-scm.com/) and [GitHub](https://github.com/) for version control

The app is written in **TypeScript**, using **React Native** for the UI and **Expo Router** for screen navigation.

# Useful Websites

* [Expo Documentation](https://docs.expo.dev/)
* [Expo Router: Introduction](https://docs.expo.dev/router/introduction/)
* [React Native Documentation](https://reactnative.dev/docs/getting-started)
* [React Native AsyncStorage](https://react-native-async-storage.github.io/async-storage/)