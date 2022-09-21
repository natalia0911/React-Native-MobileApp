import { deleteUser } from "firebase/auth";
import React, {useEffect, useState} from "react";
import { View, Text, Button, TextInput, ScrollView, StyleSheet, Alert} from 'react-native';
import { ActivityIndicator } from "react-native";
import firebase from "../Database/firebase";


const StudentDetails = (props) => {

    const [student, setState] = useState({
        id:"",
        name:"",
        studentId:""
    })

    const inicitalState = {
        id:"",
        name:"",
        studentId:""
    }

    const [loading, setLoading] = useState(true);

    const getStudentById = async(studentId) =>{
        const ref = firebase.db.collection("Student").doc(studentId) //Le paso id del documento
        const doc = await ref.get();
        const student = doc.data();
        console.log(doc);
        console.log(student)
        //Del usuario que recibe de firebase
        //Lo guarda en el estado de react
        setState({
            ...student,
            id: doc.id,
        })
        setLoading(false);
    }

    useEffect(() => {
        getStudentById(props.route.params.studentId);
    },
    []); //Con esto hag una sola peticion


    //Maneja cambios hechos en los inputs para que luego se puedan tomar
    const handleChangeInput = (name, value) => {
        setState({...student, [name]:value})
    }

    //Manejo de alertas
    const confirmationAlert = () => {
        Alert.alert('Eliminar estudiante', 'Desea eliminar este estudiante?', [
            {text:'Si', onPress:()=>deleteStudent()},
            {text:'No', onPress: () => console.log(false)}
        ])
    }


    //Eliminar el estudiante
    const deleteStudent = async () => {
        const ref = firebase.db.collection('Student').doc(props.route.params.studentId);
        await ref.delete();
        props.navigation.navigate('StudentList');
        alert("Estudiante borrado correctamente!")
    }


    const updateStudent= async () => {
        const ref = firebase.db.collection('Student').doc(props.route.params.studentId);
        await ref.set({
            name : student.name,
            studentId: student.studentId
        });
        //Dejar el estado del estudiante en vacio
        setState(inicitalState)
        props.navigation.navigate('StudentList');
        alert("Estudiante editado correctamente!");
    }

    //Mostrar cargando mientras se estan cargando los datos
    if (loading){
        return(
            <View>
                <ActivityIndicator size="large" color="#9e9e9e" style={styles.loarderCenter}/>
            </View>
        )
    }

    return (
        <ScrollView style={styles.container}>
        <View style={styles.inputGroup}>
            <TextInput value = {student.name} onChangeText={(value) => handleChangeInput('name', value)}>
            </TextInput>
        </View>

        <View style={styles.inputGroup}>
            <TextInput value = {student.studentId} onChangeText={(value) => handleChangeInput('studentId', value)}>
            </TextInput>
        </View>

        <View style={styles.inputGroup}>
            <Button color="#2DAB4F" title="Actualizar" onPress={() => updateStudent()} ></Button>
        </View>

        <View style={styles.inputGroup}>
            <Button color="#FF3838" title="Borrar" onPress={() => deleteStudent()} ></Button>
        </View>
        
    </ScrollView>
    )
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
    },
    loarderCenter:{
        marginTop:250
    }
    })

    
export default StudentDetails