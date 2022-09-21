import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import CreateStudent from './Screens/CreateStudent';
import StudentDetails from './Screens/StudentDetails';
import StudentList from './Screens/StudentList';
import CreateCourse from './Screens/CreateCourse';
import CourseList from './Screens/CourseList';
import CourseDetails from './Screens/CourseDetails';
import GroupList from './Screens/GroupList';
import StudentsXGroup from './Screens/StudentsXGroup';
import CreateGroup from './Screens/CreateGroup';
import MainView from './Screens/MainView';

const  Stack = createNativeStackNavigator();



function MyStack(){
  return (
    <Stack.Navigator>
      <Stack.Screen name= "MainView" component={MainView} options={{title:'Opciones'}}/>
      <Stack.Screen name= "CourseList" component={CourseList} options={{title:'Lista de cursos'}}/>
      <Stack.Screen name= "StudentList" component={StudentList} options={{title:'Lista de estudiantes'}}/>
      <Stack.Screen name= "CreateStudent" component={CreateStudent} options={{title:'Crear estudiante'}}/>
      <Stack.Screen name= "StudentDetails" component={StudentDetails} options={{title:'Ver estudiante'}}/>
      <Stack.Screen name= "CreateCourse" component={CreateCourse} options={{title:'Crear curso'}}/>
      <Stack.Screen name= "CourseDetails" component={CourseDetails} options={{title:'Ver curso'}}/>
      <Stack.Screen name= "GroupList" component={GroupList} options={{title:'Ver grupos'}}/>

      <Stack.Screen name= "CreateGroup" component={CreateGroup} options={{title:'Crear grupo'}}/>
      <Stack.Screen name= "StudentsXGroup" component={StudentsXGroup} options={{title:'Estudiantes del grupo'}}/>

    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack></MyStack>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
