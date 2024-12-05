import React from 'react'
import { Stack } from 'expo-router' 

const FuncionarioLayout = () => {
  return (
    <Stack>
        <Stack.Screen name='VerAgendamento' options={{headerShown: false}}/>
    </Stack>
  )
}

export default FuncionarioLayout