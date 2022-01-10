import React from 'react';
import { Text, View, StyleSheet, TextInput, Button, FlatList, ScrollView } from 'react-native';
import { styles } from './css/mystyles';
import { useState } from 'react';

function App() {

const [todos, setTodos] = useState([]);
const [input, setInput] = useState('');

 const callalert =()=>{
   setTodos([...todos, input]);
 }


  return (
    <View style={styles.container}>
      <Text style={styles.inputheader}> Daily Todos App</Text>
      <TextInput style={styles.inputcss}
       placeholder="Add Tasks"
       value={input}
       onChangeText = {(txt)=> setInput(txt)}
       />
      <View style={{marginHorizontal:5, borderRadius:5}}>
       <Button 
       
       title="Add Task"
       onPress = {callalert}
        />
      </View>
      <View>

       <FlatList
        data = {todos}
        renderItem = {({item})=><View>
        
         <Text style={{
           margin:7, borderWidth:1, borderColor:'white',
           padding:7
           }}>{item}</Text>
           
        </View>}
        />

      </View>
    </View>
  );
}

export default App;





