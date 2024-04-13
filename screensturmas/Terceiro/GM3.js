import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

export default function GameModeScreen({ navigation }) {
  return (
    <ImageBackground source={{ uri: 'https://blog.ebaconline.com.br/blog/wp-content/uploads/2022/12/kcnb4lkkucfipej3ngqxm-scaled-e1674744655926.jpeg' }} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Seja Bem-vindo</Text>
        <Text style={styles.subtitle}>Terceiro Ano</Text>
        <TouchableOpacity
          style={[styles.button, styles.hoverButton]}
          onPress={() => navigation.navigate('Temas3')}
        >
          <Text style={styles.buttonText}>Modo Quiz</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.hoverButton]}
          onPress={() => navigation.navigate('Comafrase')}
        >
          <Text style={styles.buttonText}>Complete a Frase</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.hoverButton]}
          onPress={() => navigation.navigate('Creditos')}
        >
          <Text style={styles.buttonTextC}>Créditos</Text>
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
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  title: {
    fontSize: 28,
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginBottom: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  subtitle: {
    fontSize: 28,
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginBottom: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderWidth: 2,
    borderColor: 'yellow'
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 40,
    marginBottom: 20,
    width: '80%',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'yellow',
    backgroundColor: '#5A4FCF',
    borderRadius: 10,
  },
  hoverButton: {
    backgroundColor: '#725DDC',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonTextC: {
    color: 'yellow',
    fontSize: 20,
    fontWeight: 'bold',
  },
});