import React, { useState } from 'react';
import { View, Text, ScrollView, Button, Alert, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Calendar } from 'react-native-calendars';

const Disponibilidade = () => {
  const [diasSemAtendimento, setDiasSemAtendimento] = useState({});

  const toggleDia = (dia) => {
    setDiasSemAtendimento((prev) => {
      const isSelected = prev[dia];
      if (isSelected) {
        const { [dia]: omitido, ...restante } = prev;
        return restante;
      } else {
        return {
          ...prev,
          [dia]: { selected: true, selectedColor: 'red' },
        };
      }
    });
  };

  const salvarAlteracoes = () => {
    Alert.alert('Alterações salvas!');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
        <View style={styles.headerContainer}>
          <View style={styles.headerContent}>
            <Text style={styles.userName}>Camila Cabelo</Text>
            <Text style={styles.userRole}>administrador</Text>
          </View>
        </View>

        <View style={styles.calendarContainer}>
          <Calendar
            markedDates={diasSemAtendimento}
            onDayPress={(day) => toggleDia(day.dateString)}
            theme={styles.calendarTheme}
          />
        </View>

        <Text style={styles.sectionTitle}>Dias sem atendimento</Text>

        <View style={styles.diasContainer}>
          {Object.keys(diasSemAtendimento).length === 0 ? (
            <Text>Nenhum dia selecionado</Text>
          ) : (
            Object.keys(diasSemAtendimento).map((dia) => (
              <View key={dia} style={styles.diaBox}>
                <Text>{dia.split('-').reverse().join('/')}</Text>
              </View>
            ))
          )}
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Salvar" onPress={salvarAlteracoes} color="#f0ad4e" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    padding: 20,
  },
  headerContainer: {
    backgroundColor: '#e5e5e5',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  userRole: {
    fontSize: 14,
  },
  calendarContainer: {
    backgroundColor: '#d9d9d9',
    height: 300,
    borderRadius: 10,
    marginBottom: 20,
  },
  calendarTheme: {
    todayTextColor: '#00adf5',
    arrowColor: '#00adf5',
    monthTextColor: 'black',
    textMonthFontWeight: 'bold',
    dayTextColor: '#2d4150',
    textDayFontWeight: 'bold',
    textDisabledColor: '#d9e1e8',
    selectedDayBackgroundColor: 'red',
    selectedDayTextColor: 'white',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  diasContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  diaBox: {
    backgroundColor: '#d9d9d9',
    padding: 10,
    borderRadius: 10,
    marginRight: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    marginBottom: 20,
  },
});

export default Disponibilidade;
