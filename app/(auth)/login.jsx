import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { router } from 'expo-router';

const Login = () => {
    return (
        <View style={styles.container}>
          <View style={styles.loginBox}>
            <Text style={styles.title}>Login</Text>
            
            <Image 
              source={{ uri: '' }} 
              style={styles.logo}
            />
    
            <Text style={styles.label}>Email</Text>
            <TextInput style={styles.input} placeholder="Digite seu email" />
    
            <Text style={styles.label}>Senha</Text>
            <TextInput style={styles.input} placeholder="Digite sua senha" secureTextEntry />
    
            <TouchableOpacity style={styles.forgotPassword}>
              <Text style={styles.forgotText}>Esqueci Senha</Text>
            </TouchableOpacity>
    
            <TouchableOpacity style={styles.loginButton} onPress={() => router.push('home')}>
              <Text style={styles.loginButtonText}>Login</Text>
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
    loginBox: {
      backgroundColor: '#fff',
      width: '85%',
      borderRadius: 20,
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
      width: 80,
      height: 80,
      borderRadius: 40,
      marginBottom: 20,
    },
    label: {
      alignSelf: 'flex-start',
      fontSize: 16,
      marginBottom: 5,
      marginLeft: 10,
      color: '#000',
    },
    input: {
      width: '100%',
      height: 40,
      borderRadius: 25,
      borderWidth: 1,
      borderColor: '#ccc',
      paddingLeft: 15,
      marginBottom: 20,
    },
    forgotPassword: {
      alignSelf: 'flex-end',
      marginBottom: 20,
    },
    forgotText: {
      color: '#777',
    },
    loginButton: {
      backgroundColor: '#0099e6',
      width: '100%',
      padding: 10,
      borderRadius: 25,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOpacity: 0.2,
      shadowRadius: 5,
      shadowOffset: { width: 0, height: 2 },
      elevation: 5,
    },
    loginButtonText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
    },
  });

export default Login