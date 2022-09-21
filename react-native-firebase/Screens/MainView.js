import React from "react";
import { View, Button, ScrollView, StyleSheet } from "react-native";

const MainView = (props) => {
  return (
    <View>
      <ScrollView style={styles.container}>

        <View style={styles.inputGroup}>
          <Button
            title="Estudiantes"
            onPress={() => props.navigation.navigate("StudentList")}
          ></Button>
        </View>

        <View style={styles.inputGroup}>
          <Button
            title="Cursos"
            onPress={() => props.navigation.navigate("CourseList")}
          ></Button>
        </View>

        <View style={styles.inputGroup}>
          <Button
            title="Grupos"
            onPress={() => props.navigation.navigate("GroupList")}
          ></Button>
        </View>

      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
  },
  inputGroup: {
    flex: 1,
    padding: 0,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
});

export default MainView;
