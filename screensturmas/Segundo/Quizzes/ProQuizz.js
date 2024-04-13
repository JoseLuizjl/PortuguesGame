import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Importe FontAwesome ou outro pacote de ícones

const QUESTIONS = [
  {
    question: 'Qual é o pronome de tratamento utilizado para se dirigir a uma pessoa em posição de autoridade ou respeito?',
    options: ['Vossa Senhoria', 'Tu', 'Você', 'Vós'],
    correctAnswer: 'Vossa Senhoria',
  },
  {
    question: 'Qual é o pronome de tratamento utilizado para se dirigir a um presidente?',
    options: ['Vossa Excelência', 'Senhor', 'Você', 'Vós'],
    correctAnswer: 'Vossa Excelência',
  },
  {
    question: 'Qual é o pronome de tratamento utilizado para se dirigir a um superior religioso?',
    options: ['Vossa Santidade', 'Senhor', 'Você', 'Vós'],
    correctAnswer: 'Vossa Santidade',
  },
  {
    question: 'Qual é o pronome de tratamento utilizado para se dirigir a uma pessoa mais velha ou em posição de respeito?',
    options: ['Vossa Senhoria', 'Tu', 'Você', 'Vós'],
    correctAnswer: 'Você',
  },
  {
    question: 'Qual é o pronome de tratamento utilizado para se dirigir a uma pessoa em uma situação formal?',
    options: ['Vossa Excelência', 'Tu', 'Você', 'Vós'],
    correctAnswer: 'Vossa Excelência',
  },
  {
    question: 'Qual é o pronome de tratamento utilizado para se dirigir a um magistrado?',
    options: ['Vossa Excelência', 'Tu', 'Você', 'Vós'],
    correctAnswer: 'Vossa Excelência',
  },
  {
    question: 'Qual é o pronome de tratamento utilizado para se dirigir a uma pessoa de alta nobreza?',
    options: ['Vossa Alteza', 'Tu', 'Você', 'Vós'],
    correctAnswer: 'Vossa Alteza',
  },
  {
    question: 'Qual é o pronome de tratamento utilizado para se dirigir a um reitor de universidade?',
    options: ['Vossa Magnificência', 'Tu', 'Você', 'Vós'],
    correctAnswer: 'Vossa Magnificência',
  },
];



export default function PronomesScreen({navigation}) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

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
      setAnswered(false); // Habilita os botões de resposta para a próxima pergunta
      setSelectedOption(null); // Limpa a opção selecionada
    } else {
      // Exibir modal com o resultado final do quiz
      setModalVisible(true);
    }
  };
    const closeModalAndNavigate = () => {
    setModalVisible(false);
    setCurrentQuestionIndex(0);
    setScore(0);
    setAnswered(false);
    setSelectedOption(null);
    // Aqui você pode adicionar a navegação para a tela principal
    navigation.navigate('Temas2');
  };

  return (
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

       {/* Modal para mostrar o resultado */}
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
            <FontAwesome name={score >= 3 ? 'smile-o' : 'frown-o'} size={50} color={score >= 3 ? '#77DD77' : '#FF6B6B'} />
            <TouchableOpacity style={styles.modalButton} onPress={closeModalAndNavigate}>
              <Text style={styles.modalButtonText}>Voltar para a tela inicial</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#7B68EE', // Purple background color
    paddingHorizontal: 20,
  },
  questionContainer: {
    marginBottom: 20,
  },
  questionText: {
    fontSize: 28,
    color: 'white', // White text color
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  optionButton: {
    backgroundColor: '#5A4FCF', // Purple button background color
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginVertical: 10,
    width: '100%',
    shadowColor: '#000', // Button shadow
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  optionText: {
    color: '#FFFFFF', // White text color
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  nextButton: {
    backgroundColor: '#5A4FCF', // Purple button background color
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 20, // Rounded corners
    marginVertical: 10,
    width: '100%',
    shadowColor: '#000', // Button shadow
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  nextButtonText: {
    color: 'black', // White text color
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
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalText: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  modalButton: {
    backgroundColor: '#5A4FCF',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 20,
    marginTop: 20,
  },
  modalButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});