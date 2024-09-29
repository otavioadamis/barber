import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

const Home = () => {
  return (
    <SafeAreaView>
      <View className='space-y-5 ml-3'>
      <Text>Aqui vai ser uma pagina inicial mas por enquanto pra facilitar os testes a gente deixa um bocado de link pras rotas</Text>
        <Link href="/login" className='font-bold'>login</Link>
        <Link href="/cadastro" className='font-bold'>cadastro</Link>
      </View>
    </SafeAreaView>
  )
}

export default Home