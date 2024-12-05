import React, { useState, useEffect } from 'react';
import { Text, FlatList, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FuncionarioService } from '../../services/api/FuncionarioService';

const CriarReserva = () => {
  const [profissionais, setProfissionais] = useState([]);
  const [dataSelecionada, setDataSelecionada] = useState(null);
  const funcionarioService = new FuncionarioService();
  
  const mockImage = "https://img.freepik.com/free-photo/headshot-angry-man-frowning-looking-disappointed-bothered-standing-blue-background_1258-65524.jpg?t=st=1730732359~exp=1730735959~hmac=71f40929dfe690b671ecf84e3a3d566b783461d617ac06f25848e34fa3983b74&w=740"

  useEffect(() => {
    funcionarioService.getAllFuncionarios()
      .then((response) => {
        console.log(response.data)
        setProfissionais(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar dados:", error);
      });
  }, []);

  const selecionarData = (dia) => {
    setDataSelecionada(dia);
  };

  const selecionarProfissional = (profissional) => {
    router.push({
      pathname: 'cliente/agendar-servico',
      params: {
        funcionarioId: profissional.funcionarioId,
        funcionarioNome: profissional.funcionarioNome,
        dataSelecionada: dataSelecionada
      }
    })
  };

  return (
    <SafeAreaView style={styles.container}>
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
            showsHorizontalScrollIndicator={false}
            horizontal
            data={profissionais}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.professionalItem} onPress={() => selecionarProfissional(item)}>
                <Image source={{ uri: mockImage }} style={styles.professionalImage} />
                <Text style={styles.professionalName}>{item.funcionarioNome}</Text>
              </TouchableOpacity>
            )}
          />
        </>
      )}
    </SafeAreaView>
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
