import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, TouchableOpacity, ToastAndroid } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

export default function App() {
    let name = '';
    const [selectedUType, setUtype] = useState('');
    return (
        <View>
            <Text></Text>
            <Text style = {{color: 'grey'}}>User Type:</Text>
            <RNPickerSelect
                onValueChange={(value) => setUtype(value)}
                items = {[
                    {label: 'Admin', value: 'Admin'},
                    {label: 'Guest', value: 'Guest'},
                ]}
            />

            <Text style = {{color: 'grey'}}>User Name:</Text>
                <TextInput style={{borderWidth: 1}} onChangeText={(text) => name=text} />

            <Text style = {{color: 'grey'}}>Password:</Text>
                <TextInput style={{borderWidth: 1}}></TextInput>

            {/*Exercise 1c, d*/}
            {/*<Button title = "LOG IN" onPress={ () => Alert.alert("Welcome!") } />*/}


            <TouchableOpacity onPress={ () => ToastAndroid.show("Welcome " + selectedUType + ' ' + name, ToastAndroid.SHORT) }>
                <Text style = {{color: 'grey'}}>LOG IN</Text>
            </TouchableOpacity>

              <StatusBar style="auto" />
        </View>
      );
    }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
