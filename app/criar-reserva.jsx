import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const CriarReserva = () => {
  return (
    <SafeAreaView>
      <View className='flex-col p-4 items-start justify-between h-[80%]'>
        <View className='flex-row justify-between items-center rounded-xl w-full p-1'>
          <Text>Voltar</Text>
          <Text className='font-medium text-[18px]'>Agendar</Text>
          <Text>19/9</Text>
        </View>
        <View className='items-start flex-col w-full p-3 space-y-20'>
          <View className='flex-row justify-between w-full'>
            <Text>Horário selecionado</Text>
            <Text>14:00</Text>
          </View>
          <View className='flex-col justify-between w-full'>
            <Text>Selecione o profissional</Text>
          </View>
          <View className='flex-col justify-between w-full'>
            <Text>Selecione os serviços</Text>
          </View>
        </View>
        <Text className='self-center'>Agendar</Text>
      </View>
    </SafeAreaView>
  )
}

export default CriarReserva