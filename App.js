
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import Comafrase from './screens/Comafrase'
import Creditos from './screens/Creditos'
import Primeiro from './screensturmas/Primeiro/Primeiro'
import Segundo from './screensturmas/Segundo/Segundo'
import Terceiro from './screensturmas/Terceiro/Terceiro'
import GM1 from './screensturmas/Primeiro/GM1'
import GM2 from './screensturmas/Segundo/GM2'
import GM3 from './screensturmas/Terceiro/GM3'
import Temas1 from './screensturmas/Primeiro/Temas1'
import Temas2 from './screensturmas/Segundo/Temas2'
import Temas3 from './screensturmas/Terceiro/Temas3'
import Sub1 from './screensturmas/Primeiro/Topics/Sub1'
import Pro1 from './screensturmas/Primeiro/Topics/Pro1'
import Adj1 from './screensturmas/Primeiro/Topics/Adj1'
import Ver1 from './screensturmas/Primeiro/Topics/Ver1'
import Sub2 from './screensturmas/Segundo/Topics/Sub2'
import Pro2 from './screensturmas/Segundo/Topics/Pro2'
import Adj2 from './screensturmas/Segundo/Topics/Adj2'
import Ver2 from './screensturmas/Segundo/Topics/Ver2'
import Sub3 from './screensturmas/Terceiro/Topics/Sub3'
import Pro3 from './screensturmas/Terceiro/Topics/Pro3'
import Adj3 from './screensturmas/Terceiro/Topics/Adj3'
import Ver3 from './screensturmas/Terceiro/Topics/Ver3'
import SubQuizz1 from './screensturmas/Primeiro/Quizzes/SubQuizz1'
import AdjQuizz1 from './screensturmas/Primeiro/Quizzes/AdjQuizz1'
import VerQuizz1 from './screensturmas/Primeiro/Quizzes/VerQuizz1'
import ProQuizz1 from './screensturmas/Primeiro/Quizzes/ProQuizz1'
import AdjQuizz2 from './screensturmas/Segundo/Quizzes/AdjQuizz2'
import SubQuizz2 from './screensturmas/Segundo/Quizzes/SubQuizz2'
import VerQuizz2 from './screensturmas/Segundo/Quizzes/VerQuizz2'
import ProQuizz2 from './screensturmas/Segundo/Quizzes/ProQuizz'
import AdjQuizz3 from './screensturmas/Terceiro/Quizzes/AdjQuizz3'
import SubQuizz3 from './screensturmas/Terceiro/Quizzes/SubQuizz3'
import VerQuizz3 from './screensturmas/Terceiro/Quizzes/VerQuizz3'
import ProQuizz3 from './screensturmas/Terceiro/Quizzes/ProQuizz'
import SecondPage from './screens/SecondPage'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="ZooQUIZZ" component={HomeScreen}options={{ headerShown: false }} />

        <Stack.Screen name="Creditos" component={Creditos} options={{
        headerTransparent: true,
        headerTitleStyle: { color: 'transparent' }, 
        headerTintColor: '#fff', 
        }} />

        
        <Stack.Screen name="Comafrase" component={Comafrase} options={{
        headerTransparent: true,
        headerTitleStyle: { color: 'transparent' }, 
        headerTintColor: '#fff', 
        }} />

      <Stack.Screen name="SecondPage" component={SecondPage} options={{
        headerTransparent: true,
        headerTitleStyle: { color: 'transparent' }, 
        headerTintColor: '#fff', 
        }} />




        <Stack.Screen name="Terceiro" component={Terceiro} options={{
        headerTransparent: true,
        headerTitleStyle: { color: 'transparent' }, 
        headerTintColor: '#fff', 
        }} />

        <Stack.Screen name="Segundo" component={Segundo} options={{
        headerTransparent: true,
        headerTitleStyle: { color: 'transparent' }, 
        headerTintColor: '#fff', 
        }} />

        <Stack.Screen name="Primeiro" component={Primeiro} options={{
        headerTransparent: true,
        headerTitleStyle: { color: 'transparent' }, 
        headerTintColor: '#fff', 
        }} />





    
        <Stack.Screen name="GM1" component={GM1} options={{
        headerTransparent: true,
        headerTitleStyle: { color: 'transparent' }, 
        headerTintColor: '#fff', 
        }} />

        <Stack.Screen name="GM2" component={GM2} options={{
        headerTransparent: true,
        headerTitleStyle: { color: 'transparent' }, 
        headerTintColor: '#fff', 
        }} />

        <Stack.Screen name="GM3" component={GM3} options={{
        headerTransparent: true,
        headerTitleStyle: { color: 'transparent' }, 
        headerTintColor: '#fff', 
        }} />






        <Stack.Screen name="Temas1" component={Temas1} options={{
        headerTransparent: true,
        headerTitleStyle: { color: 'transparent' }, 
        headerTintColor: '#fff', 
        }} />

        <Stack.Screen name="Temas2" component={Temas2} options={{
        headerTransparent: true,
        headerTitleStyle: { color: 'transparent' }, 
        headerTintColor: '#fff', 
        }} />

        <Stack.Screen name="Temas3" component={Temas3} options={{
        headerTransparent: true,
        headerTitleStyle: { color: 'transparent' }, 
        headerTintColor: '#fff', 
        }} />








        <Stack.Screen name="Sub1" component={Sub1} options={{
        headerTransparent: true,
        headerTitleStyle: { color: 'transparent' }, 
        headerTintColor: '#fff', 
        }} />

        <Stack.Screen name="Adj1" component={Adj1}j1 options={{
        headerTransparent: true,
        headerTitleStyle: { color: 'transparent' }, 
        headerTintColor: '#fff', 
        }} />

        <Stack.Screen name="Pro1" component={Pro1} options={{
        headerTransparent: true,
        headerTitleStyle: { color: 'transparent' }, 
        headerTintColor: '#fff', 
        }} />

        <Stack.Screen name="Ver1" component={Ver1} options={{
        headerTransparent: true,
        headerTitleStyle: { color: 'transparent' }, 
        headerTintColor: '#fff', 
        }} />




        <Stack.Screen name="Sub2" component={Sub2} options={{
        headerTransparent: true,
        headerTitleStyle: { color: 'transparent' }, 
        headerTintColor: '#fff', 
        }} />

        <Stack.Screen name="Adj2" component={Adj2}j1 options={{
        headerTransparent: true,
        headerTitleStyle: { color: 'transparent' }, 
        headerTintColor: '#fff', 
        }} />

        <Stack.Screen name="Pro2" component={Pro2} options={{
        headerTransparent: true,
        headerTitleStyle: { color: 'transparent' }, 
        headerTintColor: '#fff', 
        }} />

        <Stack.Screen name="Ver2" component={Ver2} options={{
        headerTransparent: true,
        headerTitleStyle: { color: 'transparent' }, 
        headerTintColor: '#fff', 
        }} />




        <Stack.Screen name="Sub3" component={Sub3} options={{
        headerTransparent: true,
        headerTitleStyle: { color: 'transparent' }, 
        headerTintColor: '#fff', 
        }} />

        <Stack.Screen name="Adj3" component={Adj3}j1 options={{
        headerTransparent: true,
        headerTitleStyle: { color: 'transparent' }, 
        headerTintColor: '#fff', 
        }} />

        <Stack.Screen name="Pro3" component={Pro3} options={{
        headerTransparent: true,
        headerTitleStyle: { color: 'transparent' }, 
        headerTintColor: '#fff', 
        }} />

        <Stack.Screen name="Ver3" component={Ver3} options={{
        headerTransparent: true,
        headerTitleStyle: { color: 'transparent' }, 
        headerTintColor: '#fff', 
        }} />



        <Stack.Screen name="SubQuizz1" component={SubQuizz1} options={{
        headerTransparent: true,
        headerTitleStyle: { color: 'transparent' }, 
        headerTintColor: '#fff', 
        }} />

        <Stack.Screen name="AdjQuizz1" component={AdjQuizz1} options={{
        headerTransparent: true,
        headerTitleStyle: { color: 'transparent' }, 
        headerTintColor: '#fff', 
        }} />

        <Stack.Screen name="VerQuizz1" component={VerQuizz1} options={{
        headerTransparent: true,
        headerTitleStyle: { color: 'transparent' }, 
        headerTintColor: '#fff', 
        }} />

        <Stack.Screen name="ProQuizz1" component={ProQuizz1} options={{
        headerTransparent: true,
        headerTitleStyle: { color: 'transparent' }, 
        headerTintColor: '#fff', 
        }} />






        <Stack.Screen name="ProQuizz2" component={ProQuizz2} options={{
        headerTransparent: true,
        headerTitleStyle: { color: 'transparent' }, 
        headerTintColor: '#fff', 
        }} />


        <Stack.Screen name="VerQuizz2" component={VerQuizz2} options={{
        headerTransparent: true,
        headerTitleStyle: { color: 'transparent' }, 
        headerTintColor: '#fff', 
        }} />

        <Stack.Screen name="SubQuizz2" component={SubQuizz2} options={{
        headerTransparent: true,
        headerTitleStyle: { color: 'transparent' }, 
        headerTintColor: '#fff', 
        }} />

        <Stack.Screen name="AdjQuizz2" component={AdjQuizz2} options={{
        headerTransparent: true,
        headerTitleStyle: { color: 'transparent' }, 
        headerTintColor: '#fff', 
        }} />







         <Stack.Screen name="ProQuizz3" component={ProQuizz3} options={{
        headerTransparent: true,
        headerTitleStyle: { color: 'transparent' }, 
        headerTintColor: '#fff', 
        }} />


        <Stack.Screen name="VerQuizz3" component={VerQuizz3} options={{
        headerTransparent: true,
        headerTitleStyle: { color: 'transparent' }, 
        headerTintColor: '#fff', 
        }} />

        <Stack.Screen name="SubQuizz3" component={SubQuizz3} options={{
        headerTransparent: true,
        headerTitleStyle: { color: 'transparent' }, 
        headerTintColor: '#fff', 
        }} />

        <Stack.Screen name="AdjQuizz3" component={AdjQuizz3} options={{
        headerTransparent: true,
        headerTitleStyle: { color: 'transparent' }, 
        headerTintColor: '#fff', 
        }} />











      </Stack.Navigator>
    </NavigationContainer>
  );
}