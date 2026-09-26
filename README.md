# TaskMaster Mobile

A simple, cross-platform to-do list app built with **Expo** and **React Native**. TaskMaster lets you add tasks, view them in a list, and mark them complete — with everything persisted on-device so your list is still there the next time you open the app.

## Demo Video

[Watch the walkthrough](https://www.youtube.com/watch?v=B8oeRBkVI0o)

## Features

- **View tasks** — All tasks are shown in a scrollable list, with a friendly empty state when the list is empty.
- **Add tasks** — A dedicated "Add Task" screen lets you type a title and save it.
- **Complete tasks** — Tap any task in the list to toggle it between done and not done.
- **Persistent storage** — Tasks are saved to the device using `AsyncStorage`, so they survive an app restart.
- **Stack navigation** — Built with Expo Router, moving between the task list and the add-task screen.

## Tech Stack

| Category       | Technology |
|----------------|------------|
| Framework      | [Expo](https://expo.dev) (SDK 57) |
| UI              | React Native 0.86, React 19 |
| Language       | TypeScript |
| Navigation     | Expo Router / React Navigation |
| Local storage  | `@react-native-async-storage/async-storage` |

## Project Structure

```
TaskMasterMobile/
├── src/
│   ├── app/                 # Screens (Expo Router file-based routing)
│   │   ├── _layout.tsx      # Root stack navigator
│   │   ├── index.tsx        # Task list screen
│   │   └── add-task.tsx     # Add task screen
│   ├── components/          # Shared/reusable UI components
│   ├── storage.ts           # AsyncStorage read/write helpers
│   └── types.ts             # Shared TypeScript types (Task)
├── assets/                  # App icons and images
├── app.json                 # Expo app configuration
└── package.json
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended)
- npm (comes with Node.js)
- The [Expo Go](https://expo.dev/go) app on your phone (for the quickest way to try it out), or an iOS/Android simulator

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/treasuretamb/TaskMasterMobile.git
   cd TaskMasterMobile
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npx expo start
   ```

4. Run the app
   - Scan the QR code with the Expo Go app on your phone, **or**
   - Press `a` to open in an Android emulator, **or**
   - Press `i` to open in an iOS simulator, **or**
   - Press `w` to open in a web browser

## Usage

1. Launch the app — you'll land on the **TaskMaster** screen showing your current tasks (or an empty state if you have none yet).
2. Tap **+ Add Task** to open the **Add Task** screen.
3. Type a task title and tap **Save Task** to add it to your list.
4. Tap any task in the list to mark it complete or incomplete. Your changes are saved automatically.

## How It Works

- `src/storage.ts` wraps `AsyncStorage` with two helpers, `loadTasks()` and `saveTasks()`, so the rest of the app never talks to storage directly.
- `src/app/index.tsx` loads tasks whenever the screen comes into focus (using `useFocusEffect`), so newly added tasks always show up when you navigate back.
- `src/app/add-task.tsx` builds a new task with a unique numeric id, appends it to the existing list, saves it, and navigates back.

## License

See [LICENSE](./LICENSE) for details.
