import React from 'react'
import { Stack } from 'expo-router' 

const AdminLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name='PaginaSalao' options={{headerShown: false}}/>
        <Stack.Screen name='CriarFuncionario' options={{headerShown: false}}/>
        <Stack.Screen name='ListarFuncionarios' options={{headerShown: false}}/>
        <Stack.Screen name='AdicionarServico' options={{headerShown: false}}/>
        <Stack.Screen name='ListarServicos' options={{headerShown: false}}/>
        <Stack.Screen name='CriarPromocao' options={{headerShown: false}}/>
        <Stack.Screen name='VisualizarPromocoes' options={{headerShown: false}}/>
        <Stack.Screen name='ProgramarDisponibilidade' options={{headerShown: false}}/>
    </Stack>
  )
}

export default AdminLayout