import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Keyboard, KeyboardAvoidingView, Platform, Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // Importando ícones do MaterialIcons

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

const handleLogin = () => {
  // Credenciais válidas
  const validCredentials = [
    { username: 't2024', password: 't24', screen: 'SecondPage' },
    { username: 's2024', password: 'seg24', screen: 'SecondPage' },
    { username: 'p2024', password: 'primeirao24', screen: 'SecondPage' },
  ];

  // Verificar se as credenciais inseridas correspondem a alguma entrada no array de credenciais válidas
  const validCredential = validCredentials.find(cred => cred.username === username && cred.password === password);

  if (validCredential) {
    // Se as credenciais forem válidas, navegar para a tela correspondente
    navigation.navigate(validCredential.screen);
  } else {
    // Se as credenciais forem inválidas, exibir uma mensagem de alerta
    Alert.alert('Credenciais inválidas', 'Por favor, verifique seu nome de usuário e senha.');
  }
};

  return (
    <ImageBackground
      source={{ uri: 'https://example.com/sua-imagem-de-fundo.jpg' }}
      style={styles.backgroundImage}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <View style={[styles.container]}>
          <MaterialIcons name="account-circle" size={120} color="#4CAF50" style={styles.icon} />
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Nome de usuário</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite seu nome de usuário"
              value={username}
              onChangeText={setUsername}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Senha</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite sua senha"
              secureTextEntry={true}
              value={password}
              onChangeText={setPassword}
            />
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={handleLogin}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // Cobrir toda a área disponível
    justifyContent: 'center',
  },
  icon: {
    marginBottom: 50,
    color:'#5A4FCF'
  },
  inputContainer: {
    width: '80%',
    marginBottom: 20,
  },
  inputLabel: {
    color: 'black',
    fontSize: 18,
    marginBottom: 5,
    textAlign: 'left',
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#F2F2F2',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    color: 'black',
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#CCCCCC',
  },
  button: {
    backgroundColor: '#5A4FCF', // Cor do botão verde
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 10,
    shadowColor: '#000', // Sombra do botão
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
  },
  buttonText: {
    color: '#FFFFFF', // Cor do texto do botão
    fontSize: 24,
    fontWeight: 'bold',
  },
});


