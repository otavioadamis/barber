import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const ReservaCard = ({ diaHorario, servicoNome, funcionarioNome }) => {
    return (
        <View className="flex-row mb-4">
            <View className="flex-col items-start space-y-2 w-full relative">
                <Text>{`Dia: ${diaHorario}`}</Text>
                <View className="flex-row bg-blue-200 w-full rounded-lg p-2">
                    <View>
                        <View className="flex-row space-x-2">
                            <Text>Agendamento:</Text>
                            <Text>{funcionarioNome}</Text>
                        </View>
                        <View className="flex-row space-x-2">
                            <Text>Serviço:</Text>
                            <Text>{servicoNome}</Text>
                        </View>
                    </View>
                    <View className="absolute right-0 h-full justify-center mt-2 mr-2">
                        <TouchableOpacity className="bg-yellow-200 rounded-xl p-2">
                            <Text className="font-semibold">Remarcar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default ReservaCard;