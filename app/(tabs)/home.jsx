import { View, Text, ScrollView, ActivityIndicator, Alert } from 'react-native';
import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ReservaCard from '../../components/ReservaCard'
import { ReservaService } from '../../services/api/ReservaService'

const Home = () => {
    const [reservas, setReservas] = useState([]);
    const [loading, setLoading] = useState(true);
    const reservaService = new ReservaService();

    useEffect(() => {
        const fetchReservas = async () => {
            try {
                const response = await reservaService.getReservas();
                setReservas(response.data);
            } catch (error) {
                console.error('Error fetching reservations:', error);
                Alert.alert('Error', 'Failed to fetch reservations');
            } finally {
                setLoading(false);
            }
        };

        fetchReservas();
    }, []);

    return (
        <SafeAreaView>
            <View className="flex-col mt-8 ml-6 items-start space-y-6 mr-6">
                <Text className="font-bold text-[24px]">Visualizar agendamentos</Text>
                <Text className="font-medium text-[16px]">Próximos agendamentos</Text>

                {loading ? (
                    <ActivityIndicator size="large" color="#0000ff" />
                ) : (
                    <ScrollView>
                        {reservas.map((reserva) => (
                            <ReservaCard
                                key={reserva.reservaId}
                                diaHorario={reserva.diaHorario}
                                servicoNome={reserva.servicoNome}
                                funcionarioNome={reserva.funcionarioNome}
                            />
                        ))}
                    </ScrollView>
                )}
            </View>
        </SafeAreaView>
    )
}

export default Home