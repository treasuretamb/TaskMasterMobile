import AsyncStorage from '@react-native-async-storage/async-storage';
import { Task } from './types';

const STORAGE_KEY = 'taskmaster_tasks';

// Loads the saved task list from device storage. Returns an empty array if none exists yet.
export async function loadTasks(): Promise<Task[]> {
  const json = await AsyncStorage.getItem(STORAGE_KEY);
  return json ? JSON.parse(json) : [];
}

// Saves the given task list to device storage.
export async function saveTasks(tasks: Task[]): Promise<void> {
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}