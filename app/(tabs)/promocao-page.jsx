import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from 'expo-router';

const Promocoes = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.promoBox}>
          <Text style={styles.title}>Promoções Semanais</Text>

          <View style={styles.promoCard}>
            <Image              
            source={{ uri: 'data:image/jpeg;base64,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' }}
              style={styles.promoImage}
            />
            <Text style={styles.promoText}>Promoção 1</Text>
            
          </View>

          <View style={styles.promoCard}>
            <Image
              style={styles.promoImage}
              source={{ uri: 'https://via.placeholder.com/300x150.png?text=Promo+2' }}
            />
            <Text style={styles.promoText}>Promoção 2</Text>
          </View>

          <View style={styles.promoCard}>
            <Image
              style={styles.promoImage}
              source={{ uri: 'https://via.placeholder.com/300x150.png?text=Promo+3' }}
            />
            <Text style={styles.promoText}>Promoção 3</Text>
          </View>

          <Link href="/" style={styles.backText}>
            Voltar para o Início
          </Link>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Promocoes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#171717',
  },
  scrollContainer: {
    alignItems: 'center',
  },
  promoBox: {
    backgroundColor: '#f0f0f0',
    width: '90%',
    borderRadius: 30,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 10,
    marginTop: 30,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000',
  },
  promoCard: {
    backgroundColor: '#c81c1c',
    width: '100%',
    borderRadius: 20,
    marginBottom: 20,
    padding: 15,
    alignItems: 'center',
  },
  promoImage: {
    width: '100%',
    height: 150,
    borderRadius: 15,
    marginBottom: 10,
  },
  promoText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  backText: {
    color: '#1a73e8',
    marginTop: 20,
    fontSize: 16,
  },
});
