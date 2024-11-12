import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

const Home = () => {
  return (
    <SafeAreaView>
      <View className='space-y-5 ml-3'>
        <Link href="/login" className='font-bold'>login</Link>
        <Link href="/cadastro" className='font-bold'>cadastro</Link>
        <Link href="/EditarUsuario" className='font-bold'>EditarUsuario</Link>
        <Link href="/criar-reserva" className='font-bold'>Cria reserva</Link>
        <Link href="/criar-reserva2" className='font-bold'>Cria reserva2</Link>
        <Link href="/home" className='font-bold'>Homepage</Link>
        <Link href="/calendario" className='font-bold'>calendario</Link>
        <Link href="/AgendarServico" className='font-bold'>Agendar Serviço</Link>
      </View>
    </SafeAreaView>
  )
}

export default Home