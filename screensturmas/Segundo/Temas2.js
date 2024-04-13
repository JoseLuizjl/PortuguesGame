import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

export default function ChooseTopicScreen({ navigation }) {
  return (
    <ImageBackground source={{ uri: 'https://img.freepik.com/vetores-gratis/vetor-de-plano-de-fundo-com-padrao-de-neon-azul-synthewave_53876-173388.jpg' }} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Escolha o conteúdo do QUIZZ</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Sub2')}
        >
          <Text style={styles.buttonText}>Substantivo (Coletivo)</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Adj2')}
        >
          <Text style={styles.buttonText}>Adjetivo (Pátrios)</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Pro2')}
        >
          <Text style={styles.buttonText}>Pronomes (De Tratamento)</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Ver2')}
        >
          <Text style={styles.buttonText}>Verbos</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Cor de fundo com transparência
  },
  title: {
  fontSize: 20,
  color: '#FFFFFF',
  fontWeight: 'bold',
  textAlign: 'center',
  marginBottom: 30,
  borderWidth: 2, // Largura da borda
  borderColor: 'yellow', // Cor da borda
  padding: 10, // Espaçamento entre o texto e a borda
},
button: {
  backgroundColor: '#5A4FCF',
  paddingVertical: 15,
  paddingHorizontal: 30,
  marginVertical: 10,
  width: '80%',
  borderWidth: 2, // Largura da borda
  borderColor: '#FFFFFF', // Cor da borda
},
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
