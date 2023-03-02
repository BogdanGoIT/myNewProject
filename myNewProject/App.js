import React from "react";
import { StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity, Platform } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require("./assets/images/stars-on-night.jpg")}
      >
      <View style={styles.form}>
        <View>
          <Text style={styles.inputTitle}>EMAIL ADDRESS</Text>
          <TextInput style={styles.input} textAlign={'center'}/>
        </View>
        <View style={{marginTop: 20}}>
          <Text style={styles.inputTitle}>PASSWORD</Text>
          <TextInput style={styles.input} textAlign={'center'} secureTextEntry={true}/>
        </View>
        <TouchableOpacity style={styles.btn} activeOpacity={0.8}>
          <Text style={styles.btnTitle}>SIGN IN</Text>
        </TouchableOpacity>
      </View>
        
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    // alignItems: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: '#f0f8ff',
    borderRadius: 6,
    height: 40,
    color: '#f0f8ff',
  },
  form: {
    marginHorizontal: 40,
  },
  inputTitle: {
    color: '#f0f8ff',
    marginBottom: 10,
    fontSize: 18,
  },
  btn: {
    height: 40,
    marginTop: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
    marginHorizontal: 20,
    borderWidth: 1,

    ...Platform.select({
      ios: {
        backgroundColor: "transparent",
        borderColor: "#f0f8ff",
      },
      android: {
        backgroundColor: "#4169e1",
        borderColor: "transparent",
      },
    })


  },
  btnTitle: {
    color: Platform.OS === 'ios' ? '#4169e1' : "#f0f8ff",
    fontSize: 18,
  }
});