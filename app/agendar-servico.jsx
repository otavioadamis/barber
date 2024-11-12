import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { router, useLocalSearchParams } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

const AgendarServico = () => {
  const searchParams = useLocalSearchParams();
  const { profissionalId, dataSelecionada } = searchParams;
  const [horarios, setHorarios] = useState([]);
  const [servicos, setServicos] = useState([]);
  const [selectedServico, setSelectedServico] = useState(null);
  const [profissional, setProfissional] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const funcionarioResponse = await axios.get(`http:///10.0.0.170:3000/funcionarios/${profissionalId}`);
        setProfissional(funcionarioResponse.data);

        const funcionariosServicosResponse = await axios.get(`http:///10.0.0.170:3000/funcionarios_servicos?funcionario_id=${profissionalId}`);
        const servicosIds = funcionariosServicosResponse.data.map(item => item.servico_id);

        const servicosResponse = await axios.get(`http:///10.0.0.170:3000/servicos`);
        const servicosDisponiveis = servicosResponse.data.filter(servico => servicosIds.includes(servico.id));
        setServicos(servicosDisponiveis);

        const horariosDisponiveis = funcionarioResponse.data.horarios.filter(horario => horario.dia === dataSelecionada);
        setHorarios(horariosDisponiveis);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };

    fetchData();
  }, [profissionalId, dataSelecionada]);

  const confirmarAgendamento = (horario) => {
    if (selectedServico) {
      alert(`Serviço agendado: ${selectedServico.nome} com ${profissional.nome} no dia ${dataSelecionada} às ${horario.hora_inicio}`);
      router.back();
    } else {
      alert('Selecione um serviço antes de confirmar o agendamento.');
    }
  };

  if (!profissional) {
    return <Text>Carregando...</Text>;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Agendar com {profissional.nome}</Text>
      <Text style={styles.subtitle}>Data: {dataSelecionada}</Text>

      <Text style={styles.subtitle}>Selecione um Serviço:</Text>
      <FlatList
        data={servicos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.servicoItem} onPress={() => setSelectedServico(item)}>
            <Text style={selectedServico?.id === item.id ? styles.servicoSelected : styles.servicoName}>
              {item.nome} - R${item.preco}
            </Text>
          </TouchableOpacity>
        )}
      />

      <Text style={styles.subtitle}>Horários Disponíveis:</Text>
      <FlatList
        data={horarios}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.horarioItem}>
            <Text>{item.hora_inicio} - {item.hora_fim}</Text>
            <Button title="Agendar" onPress={() => confirmarAgendamento(item)} />
          </View>
        )}
      />
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
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 8,
  },
  servicoItem: {
    padding: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginBottom: 8,
  },
  servicoName: {
    fontSize: 16,
  },
  servicoSelected: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'blue',
  },
  horarioItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
    padding: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
  },
});

export default AgendarServico;
