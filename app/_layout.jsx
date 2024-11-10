import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router' 

const RootLayout = () => {
  return (
    <Stack>
        <Stack.Screen name='index' options={{headerShown: false}}/>
        <Stack.Screen name='(auth)' options={{headerShown: false}}/>
        <Stack.Screen name='(tabs)' options={{headerShown: false}}/>
        <Stack.Screen name='criar-reserva' options={{headerShown: false}}/>
        <Stack.Screen name='criar-reserva2' options={{headerShown: false}}/>
        <Stack.Screen name='AgendarServico' options={{headerShown: false}}/>
    </Stack>
  )
}

export default RootLayout