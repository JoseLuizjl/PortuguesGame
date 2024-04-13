import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet,Modal } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Importe FontAwesome ou outro pacote de ícones

const QUESTIONS = [
  {
    question: 'Qual é o termo coletivo para um grupo de "lobos"?',
    options: ['Matilha', 'Alcateia', 'Rebanho', 'Cardume'],
    correctAnswer: 'Alcateia',
  },
  {
    question: 'Como é chamado o agrupamento de "abelhas"?',
    options: ['Colmeia', 'Enxame', 'Ninhada', 'Bando'],
    correctAnswer: 'Enxame',
  },
  {
    question: 'Qual é o coletivo de "pombos"?',
    options: ['Bando', 'Rebanho', 'Cardume', 'Cortejo'],
    correctAnswer: 'Bando',
  },
  {
    question: 'Como é denominado o grupo de "lobos-marinhos"?',
    options: ['Manada', 'Cardume', 'Rebanho', 'Colônia'],
    correctAnswer: 'Colônia',
  },
  {
    question: 'Qual é o termo correto para um conjunto de "corvos"?',
    options: ['Bando', 'Revoada', 'Cardume', 'Ninhada'],
    correctAnswer: 'Revoada',
  },
   {
    question: 'Qual é o coletivo apropriado para "formigas"?',
    options: ['Colmeia', 'Enxame', 'Bando', 'Colônia'],
    correctAnswer: 'Colônia',
  },
  {
    question: 'Como é chamado o agrupamento de "cobras"?',
    options: ['Ninho', 'Ninho de cobras', 'Nuvem', 'Toca'],
    correctAnswer: 'Ninho de cobras',
  },
  {
    question: 'Qual é o coletivo de "sapos"?',
    options: ['Exército', 'Cardume', 'Ninhada', 'Concílio'],
    correctAnswer: 'Concílio',
  },
  {
    question: 'Como é chamado o grupo de "raposas"?',
    options: ['Toca', 'Alcateia', 'Banda', 'Cortejo'],
    correctAnswer: 'Toca',
  },
  {
    question: 'Qual é o termo coletivo para um conjunto de "suricatos"?',
    options: ['Banda', 'Alcateia', 'Surto', 'Revoada'],
    correctAnswer: 'Surto',
  },
];



export default function SubQuizz1({navigation}) {
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
    navigation.navigate('Temas1');
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