import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, Dimensions } from 'react-native';

const windowHeight = Dimensions.get('window').height;

export default function PresentationScreen({ navigation }) {
  return (
    <ImageBackground
      source={{ uri: 'https://example.com/sua-imagem-de-fundo.jpg' }}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <View style={styles.template}>
          <Text style={styles.title}>Bem-vindo ao App de Atividades Escolares!</Text>
          <Text style={styles.description}>
            Este aplicativo foi desenvolvido para ajudar os alunos do Segundo ano do ensino médio a acessarem atividades escolares de forma interativa e divertida.
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('GM2')}
          >
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5A4FCF',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  template: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 20,
    width: '80%',
    maxWidth: 600,
    alignItems: 'center',
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#5A4FCF',
  },
  description: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
    color: '#333333',
  },
  button: {
    backgroundColor: '#5A4FCF',
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
