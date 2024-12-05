import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function DetalhesAgendamento() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.detailsBox}>
        <Text style={styles.title}>Detalhes Do Agendamento</Text>

        <View style={styles.detailItem}>
          <Text style={styles.label}>Nome</Text>
          <View style={styles.input}>
            <Text style={styles.inputText}>Siovana Gomes</Text>
          </View>
        </View>

        <View style={styles.detailItem}>
          <Text style={styles.label}>Serviço</Text>
          <View style={styles.input}>
            <Text style={styles.inputText}>Mão</Text>
          </View>
        </View>

        <View style={styles.detailItem}>
          <Text style={styles.label}>Horario Agendado</Text>
          <View style={styles.input}>
            <Text style={styles.inputText}>Dia 18/9 para 14:00 Horas</Text>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.buttonYellow}>
            <Text style={styles.buttonText}>Remarcar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonRed}>
            <Text style={styles.buttonText}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',  
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  detailsBox: {
    backgroundColor: '#ffffff',  
    borderRadius: 20,
    padding: 20,
    width: '100%',
    maxWidth: 400,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2d3436',  
    textAlign: 'center',
    marginBottom: 20,
  },
  detailItem: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#636e72',
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#f1f2f6',  
    borderRadius: 10,
    padding: 10,
  },
  inputText: {
    fontSize: 16,
    color: '#2d3436',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  buttonYellow: {
    backgroundColor: '#fbc531',  
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  buttonRed: {
    backgroundColor: '#e74c3c',  
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
