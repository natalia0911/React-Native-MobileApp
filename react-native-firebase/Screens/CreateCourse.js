import React from "react";
import {useState} from "react";
import {View, Button, TextInput, ScrollView, StyleSheet} from 'react-native';
import firebase from "../Database/firebase";

const CreateCourse = () => {

    const [state, setState] = useState({
        name:"",
        courseId:""
    })

    const handleChangeInput = (name, value) => {
        setState({...state, [name]:value})
    }

    const addCourse = async()=>{
        if(state.name === ""){
            alert("Ingrese un nombre para el curso!");
            return;
        }
        if(state.studentId === ""){
            alert("Ingrese un código de curso");
            return;
        }
        else{
            await firebase.db.collection("Course").add({
                name: state.name,
                courseId: state.courseId,
            })
            alert('Curso guardado');
            props.navigation.navigate('CourseList');
        }
    }

    return (
        <ScrollView style={styles.container}>
        <View style={styles.inputGroup}>
            <TextInput placeholder="Nombre del curso" onChangeText={(value) => handleChangeInput('name', value)}>
            </TextInput>
        </View>

        <View style={styles.inputGroup}>
            <TextInput placeholder="Código del curso" onChangeText={(value) => handleChangeInput('courseId', value)}>
            </TextInput>
        </View>

        <View style={styles.inputGroup}>
            <Button title="Guardar" onPress={() => addCourse()} ></Button>
        </View>
        
    </ScrollView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:35
    },
    inputGroup:{
        flex:1,
        padding:0,
        marginBottom:15,
        borderBottomWidth:1,
        borderBottomColor:'#cccccc'
    }
})

 export default CreateCourse
