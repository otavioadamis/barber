import { View, Text, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import Icons from '../constants/icons'

const ReservaCard = () => {
    return (
        <View className='flex-row'>
            <View className='flex-col items-start space-y-2 w-full relative'>
                <Text className=' font-medium'>19/9</Text>
                <View className='flex-row bg-blue-200 w-full rounded-lg p-2 shadow-lg shadow-black'>
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
                        <TouchableOpacity activeOpacity={0.5}>
                            <View className='bg-yellow-50 rounded-xl w-14 h-8 items-center justify-center flex-row'>
                                <Text className='font-bold'>Editar</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default ReservaCard