
import React from "react";
import { View, Button, ScrollView, StyleSheet } from "react-native";
import react, { useEffect, useState } from "react";
import { ListItem } from "react-native-elements";


const StudentsXGroup = (props) => {  

  const [students, setStudents] = useState([]);


  useEffect(() => {
    setStudents(props.students);
    console.log(students);
    console.log('que putas')
  }, []);



  return (
    <View>
      <ScrollView>


      </ScrollView>
    </View>
  );
};

export default StudentsXGroup;