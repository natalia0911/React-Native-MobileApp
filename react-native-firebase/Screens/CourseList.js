import React from "react";
import { View, Button, ScrollView, StyleSheet } from "react-native";
import react, { useEffect, useState } from "react";
import firebase from "../Database/firebase";
import { ListItem } from "react-native-elements";

const CourseList = (props) => {

  const [courses, setCourses] = useState([]);

  //Tomo la informacion de la bd
  useEffect(() => {
    firebase.db.collection("Course").onSnapshot((querySnapshot) => {
      //lista a llenar con los datos de firebase
      const courses = [];
      querySnapshot.docs.forEach((doc) => {
        var temp = { ...doc.data(), ...{ id: doc.id } };
        courses.push(temp);
      });
      setCourses(courses);
    });
  }, []);


  // props.navigation.navigate('StudentDetails', {studentId: student.studentId}) en listitem
  return (
    <View>
      <ScrollView>
        <Button title="Crear curso" onPress={() => props.navigation.navigate("CreateCourse")} />

        {courses.map((course) => {
          return (
            //Este id es del documento
            <ListItem key={course.id} bottomDivider onPress={() => props.navigation.navigate('CourseDetails', {courseId: course.id})}>
              <ListItem.Chevron />
              <ListItem.Content>

              <ListItem.Title>{course.name}</ListItem.Title>

             
             </ListItem.Content>
            </ListItem>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default CourseList;
