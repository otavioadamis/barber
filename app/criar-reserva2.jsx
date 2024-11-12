import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const CriarReserva = () => {
  const [profissionais, setProfissionais] = useState([]);
  const [dataSelecionada, setDataSelecionada] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    axios.get('http://ip:3001/funcionarios')
    .then((response) => {
        setProfissionais(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar dados:", error);
      });
  }, []);

  const selecionarData = (dia) => {
    setDataSelecionada(dia);

    axios.get('http:///ip:3001/funcionarios')
    .then((response) => {
        const profissionaisDisponiveis = response.data.filter(profissional =>
          profissional.horarios.some(horario => horario.dia === dia)
        );
        setProfissionais(profissionaisDisponiveis);
      })
      .catch((error) => {
        console.error("Erro ao filtrar profissionais:", error);
      });
  };

  const selecionarProfissional = (profissional) => {
    navigation.navigate('agendar-servico', {
      profissional,
      dataSelecionada,
    });
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Selecionar uma Data</Text>
      <Calendar
        onDayPress={(day) => selecionarData(day.dateString)}
        markedDates={{
          [dataSelecionada]: { selected: true, selectedColor: '#1E90FF' },
        }}
      />

      {dataSelecionada && (
        <>
          <Text style={styles.title}>Profissionais Disponíveis</Text>
          <FlatList
            horizontal
            data={profissionais}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.professionalItem} onPress={() => selecionarProfissional(item)}>
                <Image source={{ uri: item.imagem }} style={styles.professionalImage} />
                <Text style={styles.professionalName}>{item.nome}</Text>
              </TouchableOpacity>
            )}
          />
        </>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  professionalItem: {
    alignItems: 'center',
    padding: 8,
    marginRight: 10,
  },
  professionalImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 4,
  },
  professionalName: {
    fontSize: 12,
    textAlign: 'center',
  },
});
export default CriarReserva;
