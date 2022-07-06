import {useState} from "react";
import { SafeAreaView, StyleSheet, TextInput, Text, TouchableOpacity } from "react-native";



const sendText = async (phoneNumber) => {
  const loginResponse = await fetch('https://dev.stedi.me/twofactorlogin/'+phoneNumber,{
    method: 'POST',
    headers:{
      'content-type':'application/text'
    }
  });
  const loginResponseText = await loginResponse.text();//
  console.log('Login Response', loginResponseText);

}
const getToken = async({phoneNumber,oneTimePassword}) =>{
  const loginResponse = await fetch('https://dev.stedi.me/twofactorlogin/',{
    method: 'POST',
    headers:{
      'content-type':'application/text'
    },
    body:(
      phoneNumber,
      oneTimePassword
    )
  });
  const token = await loginResponse.text(); 
  console.log(token); 
}

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [oneTimePassword, setOneTimePassword] = useState(null);

  console.log(loginResponse.text());//print the response

  return (
    <SafeAreaView style={styles.margin}>
      <TextInput
        style={styles.input}
        onChangeText={setPhoneNumber}
        value={phoneNumber}
        placeholder="801-555-1212"
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          sendText(phoneNumber);
        }}
      >
        <Text>Send Text</Text>
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        onChangeText={setOneTimePassword}
        value={oneTimePassword}
        placeholder="01234"
        keyboardType="numeric"
        secureTextEntry={true}
      />
        <TouchableOpacity
        style={styles.button}
        onPress={()=>{
          getToken({phonrNumber, oneTimePassword});
        }}
      >
        <Text>Press Here</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },

  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  },
  margin:{
    marginTop:100
  }
});

export default Login;