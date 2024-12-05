import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
import { router } from 'expo-router';
import { UserService } from '../../services/api/UserService';

export default function Cadastro() {
  const userService = new UserService();
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [contato, setContato] = useState('');
  const [error, setError] = useState(null);

  const handleCadastro = async () => {
    const signupRequest = {
      nome: nome.trim(),
      email: email.trim(),
      senha: senha.trim(),
      contato: contato.trim()
    };
    if (!signupRequest.nome || !signupRequest.email || !signupRequest.senha || !signupRequest.contato) {
      return setError('Campo(s) obrigatório(s) faltando.');
    } else {
      setError(null);
    }
    try {
      const signupResponse = await userService.signup(signupRequest);
      if (signupResponse) {
        const { usuario } = signupResponse;
        Alert.alert('Cadastro feito com sucesso', `Bem vindo ao Barber Connect, ${usuario.nome}`);
        router.push('/home');
      } else {
        Alert.alert('Erro no cadastro', 'Verifique os dados e tente novamente.');
      }
    } catch (error) {
      Alert.alert('Erro ao fazer cadastro', error.message || 'Algo inesperado aconteceu.');
    }
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.signupBox}>
          <Text style={styles.title}>Cadastro</Text>
          <Image
            source={require('../../assets/logo.png')}
            style={styles.logo}
            resizeMode="contain"
          />
          <TextInput style={styles.input} placeholder="Nome" onChangeText={setNome} value={nome} />
          <TextInput style={styles.input} placeholder="Email" onChangeText={setEmail} value={email} />
          <TextInput style={styles.input} placeholder="Senha" secureTextEntry onChangeText={setSenha} value={senha} />
          <TextInput style={styles.input} placeholder="Confirme sua senha" secureTextEntry />
          <TextInput style={styles.input} placeholder="Contato" onChangeText={setContato} value={contato} keyboardType='numeric' />
          {error && <Text style={{ color: 'red' }}>{error}</Text>}
          <TouchableOpacity style={styles.signupButton} onPress={() => handleCadastro()}>
            <Text style={styles.signupButtonText}>Cadastra-se</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.navigate('login')}>
            <Text style={styles.loginText}>Voltar para Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signupBox: {
    backgroundColor: '#ffffff',
    width: '90%',
    maxWidth: 400,
    minHeight: 500,
    borderRadius: 30,
    padding: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 15,
    shadowOffset: { width: 0, height: 5 },
    elevation: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingLeft: 15,
    marginBottom: 20,
    backgroundColor: '#f9f9f9',
    fontSize: 16,
  },
  signupButton: {
    backgroundColor: '#c81c1c',
    width: '50%',
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 20,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 8,
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
    marginTop: 20,
    fontSize: 16,
  },
});

