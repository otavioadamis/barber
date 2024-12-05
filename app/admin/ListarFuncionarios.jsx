import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function ListaFuncionarios() {
  const [funcionarios, setFuncionarios] = useState([
    { id: 1, nome: 'Camila Cabelo', ativo: true },
    { id: 2, nome: 'Joana Vasques', ativo: false },
    { id: 3, nome: 'Ana Garcia', ativo: false },
  ]);

  const removerFuncionario = (id) => {
    const novaLista = funcionarios.filter(func => func.id !== id);
    setFuncionarios(novaLista);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.listBox}>
        <Text style={styles.title}>Lista Funcionarios</Text>

        {funcionarios.map((funcionario) => (
          <View key={funcionario.id} style={styles.funcionarioItem}>
            <View style={styles.funcionarioInfo}>
              <Text style={styles.nome}>{funcionario.nome}</Text>
              <MaterialCommunityIcons
                name={funcionario.ativo ? 'check-circle' : 'close-circle'}
                size={24}
                color={funcionario.ativo ? '#2ecc71' : '#e74c3c'}
              />
            </View>
            <TouchableOpacity onPress={() => removerFuncionario(funcionario.id)}>
              <Text style={styles.removerText}>Remover</Text>
            </TouchableOpacity>
          </View>
        ))}

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Adicionar Funcionario</Text>
        </TouchableOpacity>
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
  listBox: {
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
  funcionarioItem: {
    backgroundColor: '#ecf0f1',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  funcionarioInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  nome: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2d3436',
    marginRight: 10,
  },
  removerText: {
    fontSize: 14,
  },
  button: {
    backgroundColor: '#fbc531',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
