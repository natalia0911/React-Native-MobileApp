import React from "react";
import {useState} from "react";
import {View, Button, TextInput, ScrollView, StyleSheet} from 'react-native';
import firebase from "../Database/firebase";

const CreateStudent = (props) => {

    const [state, setState] = useState({
        name:"",
        studentId:""
    })

    const handleChangeInput = (name, value) => {
        setState({...state, [name]:value})
    }

    const addStudent = async()=>{
        if(state.name === ""){
            alert("Ingrese un nombre!");
            return;
        }
        if(state.studentId === ""){
            alert("Ingrese un carnet");
            return;
        }
        else{
            try{
                await firebase.db.collection("Student").add({
                    name: state.name,
                    studentId: state.studentId,
                })
                alert('Guardado')
                props.navigation.navigate('StudentList');
            }
            catch (error){
                console.log(error);
            }

        }
    }

    return (
        <ScrollView style={styles.container}>
        <View style={styles.inputGroup}>
            <TextInput placeholder="Nombre del estudiante" onChangeText={(value) => handleChangeInput('name', value)}>
            </TextInput>
        </View>

        <View style={styles.inputGroup}>
            <TextInput placeholder="Carnet del estudiante" onChangeText={(value) => handleChangeInput('studentId', value)}>
            </TextInput>
        </View>

        <View style={styles.inputGroup}>
            <Button title="Guardar" onPress={() => addStudent()} ></Button>
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

 export default CreateStudent
