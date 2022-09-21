import { deleteUser } from "firebase/auth";
import React, {useEffect, useState} from "react";
import { View, Text, Button, TextInput, ScrollView, StyleSheet, Alert} from 'react-native';
import { ActivityIndicator } from "react-native";
import firebase from "../Database/firebase";


const CourseDetails = (props) => {

    const [course, setState] = useState({
        id:"",
        name:"",
        courseId:""
    })

    const inicitalState = {
        id:"",
        name:"",
        courseId:""
    }

    const [loading, setLoading] = useState(true);

    const getCoursetById = async(courseId) =>{
        const ref = firebase.db.collection("Course").doc(courseId) //Le paso id del documento
        const doc = await ref.get();
        const course = doc.data();
        console.log(doc);
        console.log(course)
        //Del usuario que recibe de firebase
        //Lo guarda en el estado de react
        setState({
            ...course,
            id: doc.id,
        })
        setLoading(false);
    }

    useEffect(() => {
        getCoursetById(props.route.params.courseId);
    },
    []); //Con esto hag una sola peticion


    //Maneja cambios hechos en los inputs para que luego se puedan tomar
    const handleChangeInput = (name, value) => {
        setState({...course, [name]:value})
    }


    //Eliminar el curso
    const deleteCourse = async () => {
        const ref = firebase.db.collection('Course').doc(props.route.params.courseId);
        await ref.delete();
        props.navigation.navigate('CourseList');
        alert("Curso borrado correctamente!")
    }


    const updateCourse= async () => {
        const ref = firebase.db.collection('Course').doc(props.route.params.courseId);
        await ref.set({
            name : course.name,
            courseId: course.courseId
        });
        //Dejar el estado del curso en vacio
        setState(inicitalState)
        props.navigation.navigate('CourseList');
        alert("Curso editado correctamente!");
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
            <TextInput value = {course.name} onChangeText={(value) => handleChangeInput('name', value)}>
            </TextInput>
        </View>

        <View style={styles.inputGroup}>
            <TextInput value = {course.courseId} onChangeText={(value) => handleChangeInput('courseId', value)}>
            </TextInput>
        </View>

        <View style={styles.inputGroup}>
            <Button color="#2DAB4F" title="Actualizar" onPress={() => updateCourse()} ></Button>
        </View>

        <View style={styles.inputGroup}>
            <Button color="#FF3838" title="Borrar" onPress={() => deleteCourse()} ></Button>
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

    
export default CourseDetails