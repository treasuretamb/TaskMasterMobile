import { useState } from 'react';
import { StyleSheet, Text, TextInput, Pressable, View } from 'react-native';
import { useRouter } from 'expo-router';

import { loadTasks, saveTasks } from '../storage';

// Lets the user type a title and add it as a new task, then returns to the task list.
export default function AddTaskScreen() {
  const [title, setTitle] = useState('');
  const router = useRouter();

  // Loads existing tasks, appends a new one with a unique id, and saves the result.
  async function handleAdd() {
    if (!title.trim()) return;
    const tasks = await loadTasks();
    const nextId = tasks.length > 0 ? Math.max(...tasks.map((t) => t.id)) + 1 : 1;
    const updated = [...tasks, { id: nextId, title: title.trim(), done: false }];
    await saveTasks(updated);
    router.back();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>New Task</Text>
      <TextInput
        style={styles.input}
        placeholder="What do you need to do?"
        value={title}
        onChangeText={setTitle}
      />
      <Pressable style={styles.button} onPress={handleAdd}>
        <Text style={styles.buttonText}>Save Task</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 60 },
  label: { fontSize: 18, marginBottom: 8 },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 12, fontSize: 16, marginBottom: 16 },
  button: { backgroundColor: '#2e7d32', padding: 16, borderRadius: 8 },
  buttonText: { color: 'white', fontSize: 16, textAlign: 'center', fontWeight: 'bold' },
});