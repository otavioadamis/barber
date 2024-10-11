import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router } from 'expo-router';
import { useLocalSearchParams } from 'expo-router';
import PickerList from '../components/PickerList'

const CriarReserva = () => {
  const [selectedProfissional, setSelectedProfissional] = useState('')
  const [selectedServico, setSelectedServico] = useState('')
  const searchParams = useLocalSearchParams(); 
  const { dia, horario } = searchParams;

  const createNewReserva = () => {
    router.navigate('/home')
  }

  return (
    <SafeAreaView>
      <View className='flex-col p-4 items-start justify-between h-[80%]'>
        <View className='flex-row justify-evenly items-center rounded-xl w-full p-1 bg-slate-200 shadow shadow-black'>
          <TouchableOpacity activeOpacity={0.5} onPress={router.back}>
            <View className='bg-blue-200 rounded-xl w-14 h-8 justify-center items-center'>
              <Text className='font-medium'>Voltar</Text>
            </View>
          </TouchableOpacity>
          <Text className='font-medium text-[18px]'>Agendar</Text>
          <Text className='font-medium'>{dia}</Text>
        </View>
        <View className='items-start flex-col w-full p-3 space-y-20 mt-16'>
          <View className='flex-row justify-between w-full bg-purple-800 h-10 items-center rounded-xl p-2'>
            <Text className='font-medium text-white'>Horário selecionado</Text>
            <Text className='font-medium text-white'>{horario}</Text>
          </View>
          <View className='flex-col w-full justify-center  bg-green-800 h-10 rounded-xl p-2'>
            <PickerList
              title={"Selecione o profissional"}
              selectedValue={selectedProfissional}
              onValueChange={setSelectedProfissional}
            />
          </View>
          <View className='flex-col w-full justify-center  bg-green-800 h-10 rounded-xl p-2'>
            <PickerList
              title={"Selecione os serviços"}
              selectedValue={selectedServico}
              onValueChange={setSelectedServico}
            />
          </View>
          <TouchableOpacity className='self-center' activeOpacity={0.5} onPress={createNewReserva}>
            <View className=' bg-blue-200 rounded-xl w-24 h-8 justify-center items-center'>
              <Text className='font-medium'>Agendar</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default CriarReserva