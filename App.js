import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text,Button, TouchableOpacity, View, InteractionManager } from 'react-native';
import { useState } from 'react';
import Buttons_Component from './Components/buttons';
export default function App() {
  const [screen,setScreen] = useState(0);
  const [numbers,setNumbers] = useState([]); 
  const [randNumber,setRandNumber] = useState();
  console.log("1234",numbers)
  const[buttons,setButtons] =useState(
    [
      
      {
        id:1,
        value1:"1"
        
      },
      {
        id:2,
        value1:"2"
      },
      {
        id:3,
        value1:"3"
      },
      {
        id:4,
        value1:"4"
      },
      {
        id:5,
        value1:"5"
      },
      {
        id:6,
        value1:"6"
      },
      {
        id:7,
        value1:"7"
      },
      {
        id:8,
        value1:"8"
      },
      {
        id:9,
        value1:"9"
      },
      {
        id:0,
        value1:"0"
      }

    ]
  );

    const buttonPress=(id)=>{
      if(numbers.length<3){
      setNumbers([...numbers,id])
      }
    }
    const clearHandle=()=>{
      console.log("clicked")
      
    //setNumbers(numbers.shift())

    numbers.pop();
    setNumbers([...numbers])
    }
    
    const guess = ()=>{
        
      
      
      setScreen(2);
        
    }

  if(screen==0){
  return (
    <View style={styles.container}>
      <View style={{backgroundColor:"white",height:25,width:"100%",marginBottom:250,elevation:5}}></View>
        <Text style={{fontSize:30,fontWeight:'bold',color:"white",elevation:5}}>Welcome to Guess Game</Text>
        <TouchableOpacity onPress ={()=>{setScreen(1);setRandNumber(Math.floor(Math.random()*100))}} style = {{backgroundColor:"white",height:50,elevation:5,width:100,alignItems:'center',justifyContent:'center' }}>
          <Text style={{fontSize:20,fontWeight:'bold',color:"grey"}}>Play</Text>
        </TouchableOpacity>
    </View>
  );
  }else if(screen==1){
    return(
    <View style={{flex:1,backgroundColor:"grey"}}>
      <View style={{backgroundColor:"white",height:25,elevation:10}}></View>
      
      <View style={{top:200}}>
        <View style={{height:100,marginBottom:10 ,borderColor:"white",justifyContent:'center',width:"100%",borderWidth:2}}>
          
          <Text style={{fontSize:40,color:"white",textAlign:'right'}}>{numbers}</Text>
          <TouchableOpacity  onPress={clearHandle}  style={{position:'absolute',width:40,height:40,marginLeft:5,marginBottom:5,alignItems:'center',justifyContent:'center',backgroundColor:"white"}} >
            <Text style={{color:"grey",fontSize:30}} >X</Text>
          </TouchableOpacity>
        </View>
        <Buttons_Component  buttons={buttons}  buttonPress={buttonPress}  />
        <TouchableOpacity  onPress={guess} style={{backgroundColor:"white",alignItems:'center',marginTop:10,borderRadius:10,justifyContent:'center',height:50,width:"90%",marginRight:10,alignSelf:'center'}}>
          <Text  style={{fontSize:30,color:"grey"}} >Done</Text>
        </TouchableOpacity>
      </View>
    </View>
    )
  }else if(screen==2){
      return(
        <View style={{flex:1,backgroundColor:"grey",alignItems:'center'}}>
          <TouchableOpacity onPress={()=>setScreen(1)} style={{height:50,width:250,backgroundColor:"white"}}>
            <Text>Play Again</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>setScreen(0)}  style={{height:50,width:250,backgroundColor:"white"}}>
            <Text>Finish</Text>
          </TouchableOpacity>
        </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
   // justifyContent: 'center',
  },
});
