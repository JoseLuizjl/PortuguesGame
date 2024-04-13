import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Certifique-se de instalar o pacote @expo/vector-icons

const { width, height } = Dimensions.get('window');
const developerNames = ['João Pedro', 'Mariana', 'José', 'Miguel', 'Oliver', 'Prof Gabriel - Jogos Digitais', 'Prof Rosangela - Portugues' , 'Prof Giuliano'];

const Creditos = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const translateY = useState(new Animated.Value(height))[0];

  useEffect(() => {
    const interval = setInterval(() => {
      Animated.timing(translateY, {
        toValue: -height,
        duration: 1000,
        useNativeDriver: true,
      }).start(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % developerNames.length);
        translateY.setValue(height);
        Animated.timing(translateY, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }).start();
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Participantes</Text>
      <Animated.View style={[styles.developerContainer, { transform: [{ translateY }] }]}>
        <View style={styles.developerBox}>
          <Ionicons name="md-person" size={24} color="#333" style={styles.icon} />
          <Text style={[styles.developer, styles.developerName]}>{developerNames[currentIndex]}</Text>
        </View>
      </Animated.View>
      <Text style={styles.footer}>© 3 DS</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#7B68EE',
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  developerContainer: {
    alignItems: 'center',
  },
  developerBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderColor: '#fff',
    backgroundColor: '#7B68EE',
  },
  icon: {
    marginRight: 10,
  },
  developer: {
    fontSize: 20,
    color: '#fff',
  },
  developerName: {
    fontWeight: 'bold',
    fontSize: 22,
  },
  footer: {
    marginTop: 30,
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Creditos;

