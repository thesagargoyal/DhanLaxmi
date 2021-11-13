import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import { TextInput, Button } from 'react-native-paper';


export default function LogIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  return (
    <KeyboardAvoidingView style={styles.main}>
      <View style={styles.box2}>
        <Text style={styles.text}>Please Log In to continue</Text>
        <TextInput
          mode="outlined"
          label="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          theme={{colors: {primary: 'blue'}}}
        />
        <TextInput
          mode="outlined"
          label="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
          theme={{colors: {primary: 'blue'}}}
        />
        <Button mode="contained" onPress={() => console.log("Log In")} 
          theme={{colors: {primary: 'blue'}}}>
          Log In
        </Button>
        <TouchableOpacity onPress={() => console.log("navigate")}>
          <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>
            Don't have a account ? Log In !
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  main: {
    display: 'flex',
    justifyContent: 'center',
    flex: 1,
  },
  box1: {
    alignItems: 'center',
    flex: 3,
  },
  box2: {
    paddingHorizontal: 40,
    height: '50%',
    justifyContent: 'space-evenly',
    flex: 5,
  },
  text: {
    fontSize: 22,
    textAlign: 'center',
  },
});
