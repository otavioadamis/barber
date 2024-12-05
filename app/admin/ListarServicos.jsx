import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

const ListaServicos = () => {
  const [servicos, setServicos] = useState([
    { id: '1', nome: 'Apenas Mão', preco: 'R$ 5,00' },
    { id: '2', nome: 'Apenas Pé', preco: 'R$ 5,00' },
    { id: '3', nome: 'Mão e Pé', preco: 'R$ 5,00' },
    { id: '4', nome: 'Depilação', preco: 'R$ 5,00' },
    { id: '5', nome: 'Cabelo', preco: 'R$ 5,00' },
  ]);

  const renderItem = ({ item }) => (
    <View style={styles.serviceContainer}>
      <View style={styles.serviceInfo}>
        <Text style={styles.serviceName}>{item.nome}</Text>
        <Text style={styles.servicePrice}>{item.preco}</Text>
      </View>
      <View style={styles.serviceActions}>
        <TouchableOpacity>
          <Text style={styles.actionText}>Editar</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.actionText}>Remover</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista Serviços</Text>

      <FlatList
        data={servicos}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
      />

      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>Adicionar Serviço</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e0e0e0',
    padding: 20,
    borderRadius: 10,
    width: '90%',
    alignSelf: 'center',
    marginTop: 50,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#000',
  },
  list: {
    paddingBottom: 20,
  },
  serviceContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  serviceInfo: {
    marginBottom: 10,  // Espaço entre o nome/preço e os botões
  },
  serviceName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  servicePrice: {
    fontSize: 16,
    color: '#000',
  },
  serviceActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  actionText: {
    fontSize: 14,
    color: '#000',
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: '#ffeb3b',
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 20,
  },
  addButtonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ListaServicos;
