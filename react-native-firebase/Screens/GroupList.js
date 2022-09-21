
import React from "react";
import { View, Button, ScrollView, StyleSheet } from "react-native";
import react, { useEffect, useState } from "react";
import firebase from "../Database/firebase";
import { ListItem } from "react-native-elements";



const GroupList = (props) => {  

const [groups, setGroup] = useState([]);

  //Tomo la informacion de la bd
  useEffect(() => {
    firebase.db.collection("Group").onSnapshot((querySnapshot) => {
      //lista a llenar con los datos de firebase
      const group = [];
      querySnapshot.docs.forEach((doc) => {
        var temp = { ...doc.data(), ...{ id: doc.id } };
        group.push(temp);
      });
      console.log(group);
      console.log(group.course);
      setGroup(group);
    });
  }, []);


//Nota>onPress={() => props.navigation.navigate('StudentsXGroup', {students: group.students}) }
//Queria usar esto para ver estudiantes pero no se pudo
  return (
    <View>
      <ScrollView>
        <Button title="Crear un grupo" onPress={() => props.navigation.navigate("CreateGroup")} />

        {groups.map((group) => {
          return (
            //Este id es del documento
            <ListItem key={group.id}  bottomDivider>
                

              <ListItem.Chevron />

              <ListItem.Content>

              <ListItem.Title>{group.groupId}</ListItem.Title>
              <ListItem.Subtitle>Curso: {group.course.name}</ListItem.Subtitle>
              <ListItem.Subtitle>Integrantes: </ListItem.Subtitle>
              
                {group.students.map((student) => {
                return (
                     <ListItem.Subtitle key={student.studentId} >{student.name} </ListItem.Subtitle>
                );
                })}
             
             </ListItem.Content>
            </ListItem>
          );
        })}


      </ScrollView>
    </View>
  );
};

export default GroupList;