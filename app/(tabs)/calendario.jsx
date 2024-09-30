import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Calendar } from 'react-native-calendars';

const Calendario = () => {
  const [selectedDay, setSelectedDay] = useState(null);
  const [horarios, setHorarios] = useState([]);

  const availableHorarios = {
    '2024-09-19': ['14:00', '14:30', '16:00'],
    '2024-09-20': ['10:00', '11:30', '13:00'],
  };

  const handleDayPress = (day) => {
    setSelectedDay(day.dateString); 
    setHorarios(availableHorarios[day.dateString] || []); 
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Agendar Horário</Text>
      </View>

      <Calendar
        onDayPress={handleDayPress}
        markedDates={{
          [selectedDay]: { selected: true, marked: true, selectedColor: '#87ceeb' },
        }}
        style={styles.calendar}
        theme={{
          selectedDayBackgroundColor: '#87ceeb',
          todayTextColor: '#00adf5',
          arrowColor: '#87ceeb',
        }}
      />
      <View style={styles.horariosContainer}>
        <Text style={styles.horariosTitle}>Horários Disponíveis</Text>
        {horarios.length > 0 ? (
          <ScrollView>
            {horarios.map((horario, index) => (
              <TouchableOpacity key={index} style={styles.horarioButton}>
                <Text style={styles.horarioText}>{horario}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        ) : (
          <Text style={styles.noHorariosText}>Nenhum horário disponível</Text>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  calendar: {
    marginBottom: 20,
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 5, 
  },
  horariosContainer: {
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  horariosTitle: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
  },
  horarioButton: {
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    padding: 15,
    marginVertical: 5,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  horarioText: {
    fontSize: 18,
  },
  noHorariosText: {
    fontSize: 16,
    color: 'red',
    textAlign: 'center',
    marginTop: 10,
  },
});

export default Calendario;