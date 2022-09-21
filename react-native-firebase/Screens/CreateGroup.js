import React from "react";
import {useState} from "react";
import {View, Button, TextInput, ScrollView, StyleSheet} from 'react-native';
import firebase from "../Database/firebase";


const CreateGroup= () => {

    const [state, setState] = useState({
        code:"",
    })

    const handleChangeInput = (name, value) => {
        setState({...state, [name]:value})
    }

    
    return (
        <ScrollView style={styles.container}>
        <View style={styles.inputGroup}>
            <TextInput placeholder="Código de grupo" onChangeText={(value) => handleChangeInput('code', value)}>
            </TextInput>
        </View>

        <View style={styles.inputGroup}>

        </View>

        <View style={styles.inputGroup}>
            <Button title="Guardar" ></Button>
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

 export default CreateGroup
