import React from 'react'
import { Stack } from 'expo-router' 

const ClienteLayout = () => {
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name='criar-reserva' options={{ headerShown: false }}/>
            <Stack.Screen name='CanselamentoHorario' options={{headerShown: false}}/>
            <Stack.Screen name='agendar-servico' options={{headerShown: false}}/>
            <Stack.Screen name='Selecionar-Barbearia' options={{headerShown: false}}/>
        </Stack>
    )
}

export default ClienteLayout