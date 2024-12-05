import React, { useState } from "react";
import { View, Text, TextInput, FlatList, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import barbeariasData from "../../barbearia.json"; 
const SelecionarBarbearia = () => {
  const [pesquisa, setPesquisa] = useState("");
  const navigation = useNavigation();
  const selecionarBarbearia = (barbearia) => {
    navigation.navigate("HomePage", {
      barbeariaId: barbearia.id,
      barbeariaNome: barbearia.nome,
      barbeariaImagem: barbearia.imagem,
      barbeariaBairro: barbearia.bairro,
      barbeariaEndereco: `${barbearia.rua}, Nº ${barbearia.numero}`
    });
  };
  const barbeariasFiltradas = barbeariasData.barbearias.filter((barbearia) =>
    barbearia.nome.toLowerCase().includes(pesquisa.toLowerCase())
  );
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Barbearia Cadastrada</Text>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Pesquisar Barbearia"
          value={pesquisa}
          onChangeText={(text) => setPesquisa(text)}
        />
      </View>
      <FlatList
        data={barbeariasFiltradas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => selecionarBarbearia(item)} 
          >
            <Text style={styles.bairro}>{item.bairro}</Text>
            <View style={styles.cardContent}>
              <Image
                source={{ uri: item.imagem }}
                style={styles.logo}
              />
              <View style={styles.info}>
                <Text style={styles.name}>{item.nome}</Text>
                <Text style={styles.address}>
                  {item.rua} Nº {item.numero}
                </Text>
                <Text style={styles.status}>Aberto Até 00:00</Text>
              </View>
              
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  searchContainer: {
    marginBottom: 20,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
  },
  card: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    marginBottom: 20,
    padding: 10,
  },
  bairro: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  cardContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    width: 80,
    height: 80,
    marginRight: 10,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  address: {
    fontSize: 14,
    color: "#666",
  },
  status: {
    fontSize: 14,
    color: "#666",
  },
});
export default SelecionarBarbearia;