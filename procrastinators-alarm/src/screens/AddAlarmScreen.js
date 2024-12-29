import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const AddAlarmScreen = ({ navigation, route }) => {
  const [time, setTime] = useState('');
  const [difficulty, setDifficulty] = useState('Easy');

  const handleAddAlarm = () => {
    const newAlarm = { time, difficulty };
    route.params.addAlarm(newAlarm);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Set Time:</Text>
      <TextInput
        style={styles.input}
        placeholder="HH:MM"
        onChangeText={setTime}
        value={time}
      />
      <Text style={styles.label}>Select Difficulty:</Text>
      <TextInput
        style={styles.input}
        placeholder="Easy, Medium, Hard"
        onChangeText={setDifficulty}
        value={difficulty}
      />
      <Button title="Add Alarm" onPress={handleAddAlarm} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000', padding: 20 },
  label: { color: '#FF1493', fontSize: 18, marginBottom: 10 },
  input: {
    backgroundColor: '#222',
    color: '#fff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
});

export default AddAlarmScreen;
