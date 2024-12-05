import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const CriarReserva = () => {
  const [selectedTime, setSelectedTime] = useState('14:00');
  const [selectedProfessional, setSelectedProfessional] = useState(null);
  const [selectedServices, setSelectedServices] = useState([]);

  const professionals = [
    { name: 'Claudio Martins', available: true },
    { name: 'Jonas Ferreira', available: false },
  ];

  const services = [
    { name: 'Degrade', price: 'R$ 50,00' },
    { name: 'Blindado', price: 'R$ 100,00' },
    { name: 'Blindado', price: 'R$ 150,00' },
    { name: 'Raspar', price: 'R$ 10,00' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <Text style={styles.title}>Criando Reserva</Text>
          <Text style={styles.date}>19/9</Text>
        </View>

        <View style={styles.selectedTimeContainer}>
          <Text style={styles.selectedTimeText}>Horário Selecionado</Text>
          <View style={styles.timeBox}>
            <Text style={styles.timeText}>{selectedTime}</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Selecione o Profissional</Text>
          <View style={styles.dropdown}>
            {professionals.map((professional, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.professionalOption,
                  professional.available ? styles.professionalAvailable : styles.professionalUnavailable,
                ]}
                disabled={!professional.available}
                onPress={() => setSelectedProfessional(professional.name)}
              >
                <Text style={styles.professionalText}>{professional.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Selecione os Serviços</Text>
          <View style={styles.dropdown}>
            {services.map((service, index) => (
              <TouchableOpacity
                key={index}
                style={styles.serviceOption}
                onPress={() => setSelectedServices([...selectedServices, service.name])}
              >
                <Text style={styles.serviceText}>{service.name}</Text>
                <Text style={styles.servicePrice}>{service.price}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <TouchableOpacity style={styles.scheduleButton}>
          <Text style={styles.buttonText}>Agendar</Text>
        </TouchableOpacity>
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 16,
    color: '#666',
  },
  selectedTimeContainer: {
    marginBottom: 20,
  },
  selectedTimeText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  timeBox: {
    backgroundColor: '#d9534f',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignItems: 'center',
  },
  timeText: {
    color: '#fff',
    fontSize: 18,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  dropdown: {
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  professionalOption: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  professionalAvailable: {
    backgroundColor: '#5cb85c',
  },
  professionalUnavailable: {
    backgroundColor: '#d9534f',
  },
  professionalText: {
    color: '#fff',
    fontSize: 16,
  },
  serviceOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: '#5bc0de',
    marginBottom: 10,
  },
  serviceText: {
    color: '#fff',
    fontSize: 16,
  },
  servicePrice: {
    color: '#fff',
    fontSize: 16,
  },
  scheduleButton: {
    backgroundColor: '#f0ad4e',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CriarReserva;
