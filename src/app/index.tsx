import { useCallback, useState } from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { useFocusEffect, useRouter } from 'expo-router';

import { loadTasks, saveTasks } from '../storage';
import { Task } from '../types';

// Displays the list of tasks and lets the user tap one to toggle it complete.
export default function TaskListScreen() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const router = useRouter();

  // Reload tasks from storage every time this screen comes into focus,
  // so newly added tasks show up after returning from the Add Task screen.
  useFocusEffect(
    useCallback(() => {
      loadTasks().then(setTasks);
    }, [])
  );

  // Toggles a task's done state and persists the change.
  async function toggleTask(id: number) {
    const updated = tasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t));
    setTasks(updated);
    await saveTasks(updated);
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        ListEmptyComponent={<Text style={styles.empty}>No tasks yet. Add one below.</Text>}
        renderItem={({ item }) => (
          <Pressable style={styles.taskRow} onPress={() => toggleTask(item.id)}>
            <Text style={styles.taskText}>
              {item.done ? '[x]' : '[ ]'} {item.title}
            </Text>
          </Pressable>
        )}
      />
      <Pressable style={styles.addButton} onPress={() => router.push('/add-task')}>
        <Text style={styles.addButtonText}>+ Add Task</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 60 },
  taskRow: { paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: '#ddd' },
  taskText: { fontSize: 18 },
  empty: { fontSize: 16, color: '#888', marginTop: 20, textAlign: 'center' },
  addButton: { backgroundColor: '#2e7d32', padding: 16, borderRadius: 8, marginTop: 16 },
  addButtonText: { color: 'white', fontSize: 16, textAlign: 'center', fontWeight: 'bold' },
});