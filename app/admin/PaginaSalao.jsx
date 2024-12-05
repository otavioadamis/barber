import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Switch, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function PaginaSalao() {
  const [isAvailable, setIsAvailable] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.name}>Camila Cabelo</Text>
        <Text style={styles.role}>Administrador</Text>
      </View>

      <View style={styles.statusContainer}>
        <Text style={styles.statusLabel}>Status de Atendimento</Text>
        <View style={styles.switchContainer}>
          <Text style={styles.available}>Disponível</Text>
          <Switch
            trackColor={{ false: "#ff7675", true: "#55efc4" }}
            thumbColor={isAvailable ? "#fff" : "#fff"}
            onValueChange={() => setIsAvailable(!isAvailable)}
            value={isAvailable}
          />
          <Text style={styles.unavailable}>Indisponível</Text>
        </View>
      </View>

      <View style={styles.managementBox}>
        <Text style={styles.managementTitle}>Gerenciamento salão</Text>

        {[
          { label: "Ver agendamentos", icon: "🗓️" },
          { label: "Adicionar Novo Profissional", icon: "👤" },
          { label: "Adicionar Novo Serviço", icon: "💼" },
          { label: "Adicionar Nova Promoção", icon: "🏷️" },
          { label: "Programar Disponibilidade", icon: "⏰" }
        ].map((item, index) => (
          <TouchableOpacity key={index} style={styles.actionButton}>
            <View style={styles.iconContainer}>
              <Text style={styles.iconText}>{item.icon}</Text>
            </View>
            <Text style={styles.actionText}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa', 
    padding: 20,
  },
  header: {
    backgroundColor: '#ffffff', 
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2d3436',  
  },
  role: {
    fontSize: 16,
    color: '#636e72',  
  },
  statusContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  statusLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2d3436',  
    marginBottom: 10,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  available: {
    color: '#55efc4',  
    fontWeight: 'bold',
    marginRight: 10,
  },
  unavailable: {
    color: '#ff7675',  
    fontWeight: 'bold',
    marginLeft: 10,
  },
  managementBox: {
    backgroundColor: '#ffffff',  
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
    elevation: 5,
  },
  managementTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2d3436',  
    marginBottom: 20,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f1f2f6', 
    padding: 15,
    borderRadius: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  iconContainer: {
    width: 50,
    height: 50,
    backgroundColor: '#d63031',  
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginRight: 15,
  },
  iconText: {
    color: '#fff',
    fontSize: 24,
  },
  actionText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2d3436',
  },
});
