import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Calendar } from 'react-native-calendars'; 

const HorariosAgendados = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const horarios = [
    { time: '14:00', cliente: 'Gabriel Gomes', servico: 'Corte simples' },
    { time: '14:30', cliente: '', servico: '' },
    { time: '15:00', cliente: '', servico: '' },
  ];

  const handleDayPress = (day) => {
    setSelectedDate(day.dateString);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.profileHeader}>
          <Text style={styles.profileName}>Alfonso</Text>
          <Text style={styles.profileRole}>administrador</Text>
        </View>

        <View style={styles.calendarContainer}>
          <Calendar
            onDayPress={handleDayPress}
            markedDates={{
              [selectedDate]: { selected: true, marked: true, selectedColor: '#00adf5' },
              '2024-03-14': { marked: true, dotColor: '#50cebb' },
              '2024-03-15': { marked: true, dotColor: '#50cebb' },
              '2024-03-16': { marked: true, dotColor: '#50cebb' },
            }}
            monthFormat={'MMMM yyyy'}
            firstDay={1}
            locale={'pt-br'}
          />
        </View>

        <View style={styles.agendadosContainer}>
          <Text style={styles.sectionTitle}>Horários Agendados</Text>
          <Text style={styles.sectionSubtitle}>Hoje</Text>
          {horarios.map((item, index) => (
            <View key={index} style={styles.horarioBox}>
              <Text style={styles.horarioText}>{item.time}</Text>
              {item.cliente ? (
                <>
                  <Text style={styles.horarioInfo}>{item.cliente}</Text>
                  <Text style={styles.horarioServico}>{item.servico}</Text>
                  <TouchableOpacity style={styles.remarcarButton}>
                    <Text style={styles.remarcarText}>Remarcar</Text>
                  </TouchableOpacity>
                </>
              ) : (
                <Text style={styles.disponivelText}>Disponível</Text>
              )}
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    padding: 20,
  },
  profileHeader: {
    backgroundColor: '#5bc0de',
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  profileRole: {
    fontSize: 14,
    color: '#fff',
  },
  calendarContainer: {
    marginBottom: 20,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 10,
  },
  agendadosContainer: {
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sectionSubtitle: {
    fontSize: 14,
    marginBottom: 20,
    color: '#999',
  },
  horarioBox: {
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },
  horarioText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  horarioInfo: {
    fontSize: 14,
    color: '#333',
  },
  horarioServico: {
    fontSize: 14,
    color: '#666',
  },
  remarcarButton: {
    backgroundColor: '#5bc0de',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  remarcarText: {
    color: '#fff',
    textAlign: 'center',
  },
  disponivelText: {
    color: '#5bc0de',
    fontSize: 14,
  },
});

export default HorariosAgendados;
