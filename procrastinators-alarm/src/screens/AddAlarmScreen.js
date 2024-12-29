import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const AddAlarmScreen = ({ navigate }) => {
  const [selectedHour, setSelectedHour] = useState('00');
  const [selectedMinute, setSelectedMinute] = useState('00');

  const hours = Array.from({ length: 24 }, (_, i) => i.toString().padStart(2, '0')); // 00 to 23
  const minutes = Array.from({ length: 60 }, (_, i) => i.toString().padStart(2, '0')); // 00 to 59

  const saveAlarm = () => {
    alert(`Alarm set for ${selectedHour}:${selectedMinute}`);
    navigate('Home'); // Navigate back to the HomeScreen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Set Alarm Time</Text>
      <View style={styles.pickerContainer}>
        {/* Hour Picker */}
        <ScrollView
          style={styles.scrollPicker}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {hours.map((hour) => (
            <TouchableOpacity key={hour} onPress={() => setSelectedHour(hour)}>
              <Text style={[styles.pickerItem, selectedHour === hour && styles.selectedItem]}>
                {hour}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        {/* Colon Separator */}
        <Text style={styles.separator}>:</Text>
        {/* Minute Picker */}
        <ScrollView
          style={styles.scrollPicker}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {minutes.map((minute) => (
            <TouchableOpacity key={minute} onPress={() => setSelectedMinute(minute)}>
              <Text style={[styles.pickerItem, selectedMinute === minute && styles.selectedItem]}>
                {minute}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <TouchableOpacity style={styles.saveButton} onPress={saveAlarm}>
        <Text style={styles.saveButtonText}>Save Alarm</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: '#FFF',
    marginBottom: 20,
  },
  pickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  scrollPicker: {
    width: 60,
    height: 150,
  },
  scrollContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  pickerItem: {
    fontSize: 24,
    color: '#AAA',
    marginVertical: 10,
  },
  selectedItem: {
    color: '#FF4081',
    fontWeight: 'bold',
  },
  separator: {
    fontSize: 24,
    color: '#FFF',
    marginHorizontal: 10,
  },
  saveButton: {
    backgroundColor: '#FF4081',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  saveButtonText: {
    fontSize: 18,
    color: '#FFF',
  },
});

export default AddAlarmScreen;
