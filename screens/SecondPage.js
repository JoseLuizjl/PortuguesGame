import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';

export default function SecondPage({navigation}) {
  const [email, setEmail] = useState('');

  const verificarEmail = () => {
    fetch('http://192.168.1.2:3000/api/verify-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.valid) {
          navigation.navigate('Primeiro')

        } else {
          Alert.alert('Erro', 'Email não encontrado');
        }
      })
      .catch(error => {
        console.error('Erro ao verificar o email:', error);
        Alert.alert('Erro', 'Ocorreu um erro ao verificar o email. Por favor, tente novamente mais tarde');
      });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite seu email"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <TouchableOpacity style={styles.button} onPress={verificarEmail}>
        <Text style={styles.buttonText}>Verificar Email</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    padding: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#5A4FCF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
