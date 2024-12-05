import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Alert, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';
import { UserService } from '../../services/api/UserService';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [error, setError] = useState(null);
    const router = useRouter();
    const userService = new UserService();

    const handleLogin = async () => {
        const loginRequest = { email: email.trim(), senha: senha.trim() };
        if (!loginRequest.email || !loginRequest.senha) {
            return setError('Campo(s) obrigatório(s) faltando.');
        } else {
            setError(null);
        }
        try {
            const loginResponse = await userService.login(loginRequest);
            if (loginResponse) {
                const { usuario, token } = loginResponse;
                await AsyncStorage.setItem('jwtToken', token);
                Alert.alert('Login bem-sucedido', `Bem-vindo, ${usuario.nome}`);
                if (usuario.tipo === 'ROLE_CLIENTE') {
                    router.push('/home');
                } else if (usuario.tipo === 'ROLE_FUNCIONARIO') {
                    router.push('/admin/PaginaSalao');
                } else if (usuario.tipo === 'ROLE_ADMIN') {
                    router.push('/admin/PaginaSalao');
                }
                else {
                    Alert.alert('Erro de login', 'Email ou senha incorretos');
                }
            }
        } catch (error) {
            console.error('Erro ao fazer login:', error);
            Alert.alert('Erro', 'Não foi possível conectar ao servidor');
        }
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <View style={styles.loginBox}>
                    <Text style={styles.title}>Login</Text>
                    <Image
                        source={require('../../assets/logo.png')}
                        style={styles.logo}
                        resizeMode="contain"
                    />
                    <Text style={styles.label}>Email</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Digite seu email"
                        value={email}
                        onChangeText={setEmail}
                    />
                    <Text style={styles.label}>Senha</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Digite sua senha"
                        secureTextEntry
                        value={senha}
                        onChangeText={setSenha}
                    />
                     <TouchableOpacity
                        style={styles.forgotPassword}
                        onPress={() => router.push('/esquecisenha')}
                    >
                        <Text style={styles.forgotText}>Esqueci Senha</Text>
                    </TouchableOpacity>
                    {error && <Text style={{ color: 'red' }}>{error}</Text>}
                    <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                        <Text style={styles.loginButtonText}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#fff',
    },
    container: {
        flex: 1,
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
        width: 150,
        height: 150,
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

export default Login;
