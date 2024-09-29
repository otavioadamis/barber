import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Home = () => {
    return (
        <SafeAreaView>
            <View className='flex-col mt-8 ml-6 items-start space-y-6 mr-6'>
                <Text className='font-bold text-[24px]'>Visualizar agendamentos</Text>
                <Text className='font-medium text-[16px]'>Próximos agendamentos</Text>
                <View className='flex-row'>
                    <View className='flex-col items-start space-y-2 w-full relative'>
                        <Text>Dia</Text>
                        <View className='flex-row bg-blue-200 w-full rounded-lg p-2'>
                            <View className=''>
                                <View className='flex-row space-x-2'>
                                    <Text>Agendamento</Text>
                                    <Text>Horário</Text>
                                </View>
                                <View className='flex-row space-x-2'>
                                    <Text>Serviço:</Text>
                                    <Text>Tipo serviço</Text>
                                </View>
                            </View>
                            <View className='absolute right-0 h-full justify-center mt-2 mr-2'>
                                <Text>Botao</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Home