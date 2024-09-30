import { View, Text } from 'react-native'
import React from 'react'

const ReservaCard = () => {
    return (
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
    )
}

export default ReservaCard