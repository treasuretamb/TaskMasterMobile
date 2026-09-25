import { Stack } from 'expo-router';

// Sets up simple stack navigation between the Task List and Add Task screens.
export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'TaskMaster' }} />
      <Stack.Screen name="add-task" options={{ title: 'Add Task' }} />
    </Stack>
  );
}