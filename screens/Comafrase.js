import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, ImageBackground } from 'react-native';

const PronomeTratamentoQuizScreen = ({ navigation }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const QUESTIONS = [
    {
      question: '____ está indo ao mercado.',
      options: ['Eu', 'Ele', 'Você', 'Nós'],
      correctAnswer: 'Ele',
    },
    {
      question: '____ quer conversar com você.',
      options: ['Eu', 'Ela', 'Eles', 'Elas'],
      correctAnswer: 'Eles',
    },
    {
      question: 'Você viu ____ hoje?',
      options: ['Eu', 'Ele', 'Você', 'Nós'],
      correctAnswer: 'Eu',
    },
    {
      question: '____ está com pressa.',
      options: ['Eu', 'Ela', 'Você', 'Nós'],
      correctAnswer: 'Eu',
    },
    {
      question: '____ está esperando na sala de espera.',
      options: ['Eu', 'Ele', 'Você', 'Nós'],
      correctAnswer: 'Você',
    },
    {
      question: 'Você falou com ____?',
      options: ['Eu', 'Ele', 'Você', 'Nós'],
      correctAnswer: 'Nós',
    },
    {
      question: 'Você viu ____ ontem à noite?',
      options: ['Ele', 'Ela', 'Eles', 'Elas'],
      correctAnswer: 'Ela',
    },
    // Adicione mais perguntas conforme necessário
  ];

  const handleAnswer = (selectedAnswer) => {
    if (!answered) {
      const isCorrect = selectedAnswer === QUESTIONS[currentQuestionIndex].correctAnswer;
      setAnswered(true);
      setSelectedOption(selectedAnswer);
      if (isCorrect) {
        setScore(score + 1);
      }
    }
  };

  const nextQuestion = () => {
    if (currentQuestionIndex + 1 < QUESTIONS.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setAnswered(false);
      setSelectedOption(null);
    } else {
      setModalVisible(true);
    }
  };

  const closeModalAndNavigate = () => {
    setModalVisible(false);
    navigation.navigate('Escolha o Conteúdo'); // Navega para outra página
  };

  return (
     <ImageBackground source={{ uri: 'https://cdn.abya.app/media/gfn/static_nvidia_background.png' }} style={styles.background}>
    <View style={styles.container}>
      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>
          {currentQuestionIndex + 1}/{QUESTIONS.length}
        </Text>
        <Text style={styles.questionText}>{QUESTIONS[currentQuestionIndex].question}</Text>
      </View>
      {QUESTIONS[currentQuestionIndex].options.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.optionButton,
            answered && selectedOption === option && option !== QUESTIONS[currentQuestionIndex].correctAnswer && { backgroundColor: '#FF6B6B' },
            answered && option === QUESTIONS[currentQuestionIndex].correctAnswer && { backgroundColor: '#77DD77' },
          ]}
          onPress={() => handleAnswer(option)}
          disabled={answered}
        >
          <Text style={styles.optionText}>{option}</Text>
        </TouchableOpacity>
      ))}
      {answered && (
        <TouchableOpacity style={styles.nextButton} onPress={nextQuestion}>
          <Text style={styles.nextButtonText}>Próxima Pergunta</Text>
        </TouchableOpacity>
      )}

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Você acertou {score} de {QUESTIONS.length} perguntas.</Text>
            <TouchableOpacity style={styles.modalButton} onPress={closeModalAndNavigate}>
              <Text style={styles.modalButtonText}>Ir para outra página</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
    </ImageBackground>
  );
};

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
    paddingHorizontal: 20,
  },
  questionContainer: {
    marginBottom: 20,
  },
  questionText: {
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  optionButton: {
    backgroundColor: '#5A4FCF',
    borderWidth: 2,
    borderColor: 'white',
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginVertical: 10,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  optionText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  nextButton: {
    backgroundColor: '#5A4FCF',
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginVertical: 10,
    borderWidth: 2,
    borderColor: 'yellow',
  },
  nextButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 20,
    marginBottom: 20,
  },
  modalButton: {
    backgroundColor: '#5A4FCF',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  modalButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default PronomeTratamentoQuizScreen;




