import React from 'react'
import { Stack } from 'expo-router' 

const RootLayout = () => {
  return (
    <Stack>
        <Stack.Screen name='index' options={{headerShown: false}}/>
        <Stack.Screen name='(auth)' options={{headerShown: false}}/>
        <Stack.Screen name='(tabs)' options={{headerShown: false}}/>
        <Stack.Screen name='admin' options={{headerShown: false}}/>
        <Stack.Screen name='cliente' options={{headerShown: false}}/>
        <Stack.Screen name='funcionario' options={{headerShown: false}}/>
        <Stack.Screen name='CriarReserva' options={{headerShown: false}}/>
    </Stack>
  )
}

export default RootLayout