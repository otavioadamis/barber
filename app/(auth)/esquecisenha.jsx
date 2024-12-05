import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, SafeAreaView, Image } from 'react-native';  // Corrigido a importação de 'Image'
import { useRouter } from 'expo-router';
import { UserService } from '../../services/api/UserService';

const EsqueciSenha = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState(null);
    const router = useRouter();
    const userService = new UserService();

    const handleRecuperarSenha = async () => {
        const emailRequest = { email: email.trim() };

        if (!emailRequest.email) {
            return setError('O campo de email é obrigatório.');
        } else {
            setError(null);
        }

        try {
            const resposta = await userService.recuperarSenha(emailRequest);
            if (resposta) {
                Alert.alert('Sucesso', 'Um link para recuperação de senha foi enviado para o seu e-mail.');
                router.push('/login');
            } else {
                Alert.alert('Erro', 'Não foi possível enviar o link de recuperação.');
            }
        } catch (error) {
            console.error('Erro ao tentar recuperar a senha:', error);
            Alert.alert('Erro', 'Ocorreu um erro ao tentar recuperar a senha.');
        }
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <View style={styles.resetBox}>
                    <Text style={styles.title}>Recuperar Senha</Text>
                    <Image
                        source={require('../../assets/logo.png')}
                        style={styles.logo}
                        resizeMode="contain"
                    />
                    <Text style={styles.label}>Digite seu e-mail</Text>
                    <TextInput
                        style={styles.input}
                        keyboardType="email-address"
                        value={email}
                        onChangeText={setEmail}
                    />
                    {error && <Text style={styles.errorText}>{error}</Text>}
                    <TouchableOpacity style={styles.button} onPress={handleRecuperarSenha}>
                        <Text style={styles.buttonText}>Enviar Link</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.backToLogin} onPress={() => router.push('/login')}>
                        <Text style={styles.backText}>Voltar para o Login</Text>
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
    resetBox: {
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
    errorText: {
        color: 'red',
        fontSize: 14,
        marginBottom: 10,
    },
    button: {
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
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    backToLogin: {
        marginTop: 20,
    },
    backText: {
        color: '#0099e6',
        fontSize: 16,
    },
    logo: {
        width: 150,
        height: 150,
        marginBottom: 20,
    },
});

export default EsqueciSenha;
