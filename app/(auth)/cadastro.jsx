import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { router } from 'expo-router';

export default function Cadastro({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.signupBox}>
        <Image 
          source={{ uri: '' }} 
          style={styles.logo} 
        />
        
        <Text style={styles.title}>Cadastro</Text>

        <TextInput style={styles.input} placeholder="Nome" />
        <TextInput style={styles.input} placeholder="Email" />
        <TextInput style={styles.input} placeholder="Senha" secureTextEntry />
        <TextInput style={styles.input} placeholder="Confirme sua senha" secureTextEntry />
        <TextInput style={styles.input} placeholder="Telefone" />

        <TouchableOpacity style={styles.signupButton}>
          <Text style={styles.signupButtonText}>Cadastra-se</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.navigate('login')}>
          <Text style={styles.loginText}>Voltar para Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#171717',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signupBox: {
    backgroundColor: '#f0f0f0',
    width: '90%',
    borderRadius: 30,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000',
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 45,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingLeft: 15,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  signupButton: {
    backgroundColor: '#c81c1c',
    width: '80%',
    padding: 12,
    borderRadius: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 5,
  },
  signupButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  loginText: {
    color: '#1a73e8',
    marginTop: 15,
    fontSize: 16,
  },
});