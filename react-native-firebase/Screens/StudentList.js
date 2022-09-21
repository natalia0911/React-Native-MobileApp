import React from "react";
import { View, Button, ScrollView, StyleSheet } from "react-native";
import react, { useEffect, useState } from "react";
import firebase from "../Database/firebase";
import { ListItem, Avatar } from "react-native-elements";

const StudentList = (props) => {

  const [students, setStudents] = useState([]);

  //Tomo la informacion de la bd
  useEffect(() => {
    firebase.db.collection("Student").onSnapshot((querySnapshot) => {
      //lista a llenar con los datos de firebase
      const students = [];
      querySnapshot.docs.forEach((doc) => {
        var temp = { ...doc.data(), ...{ id: doc.id } };
        students.push(temp);
      });
      setStudents(students);
    });
  }, []);


  // props.navigation.navigate('StudentDetails', {studentId: student.studentId}) en listitem
  return (
    <View>
      <ScrollView>
        <Button title="Crear estudiante" onPress={() => props.navigation.navigate("CreateStudent")} />

        {students.map((student) => {
          return (
            //Este id es del documento
            <ListItem key={student.id} bottomDivider onPress={() => props.navigation.navigate('StudentDetails', {studentId: student.id})}>
              <ListItem.Chevron />
              <ListItem.Content>

              <ListItem.Title>{student.name}</ListItem.Title>

             
             </ListItem.Content>
            </ListItem>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default StudentList;
