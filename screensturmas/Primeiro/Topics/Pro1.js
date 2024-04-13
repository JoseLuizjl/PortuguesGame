import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

export default function PronomesDeTratamentoScreen({ navigation }) {
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setInterval(() => {
        setCountdown((prevCount) => prevCount - 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [countdown]);

  const startQuiz = () => {
    // Inicie o quiz aqui
    navigation.navigate('ProQuizz1');
  };

  return (
    <ImageBackground source={{ uri: 'https://example.com/sua-imagem-de-fundo.jpg' }} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.title}>Quiz de Pronomes de Tratamento</Text>
        <TouchableOpacity style={styles.button} onPress={startQuiz} disabled={countdown > 0}>
          <Text style={styles.buttonText}>{countdown > 0 ? `Começar em ${countdown}` : 'Começar Quiz'}</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // ou 'stretch' se desejar
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Cor de fundo com transparência
    padding: 20,
  },
  title: {
    fontSize: 36,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    textShadowColor: 'rgba(0, 0, 0, 0.75)', // Sombra do texto
    textShadowOffset: { width: 2, height: 2 }, // Deslocamento da sombra
    textShadowRadius: 5, // Raio da sombra
  },
  button: {
    backgroundColor: '#5A4FCF',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    width: '80%',
    opacity: 0.9,
    shadowColor: 'black',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
