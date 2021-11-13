import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text,Button, TouchableOpacity, View, InteractionManager } from 'react-native';
import { useState } from 'react';
import Buttons_Component from './Components/buttons';
export default function App() {
  const [screen,setScreen] = useState(0);
  const [numbers,setNumbers] = useState([]); 
  const [randNumber,setRandNumber] = useState();
  const [attempts,setAttempts] = useState(4);
  const [score,setScore] = useState(50);
  const[msg,setMsg]=useState("Guess between 0-100")
  const [hint,setHint] = useState(" ");
 const [matched,setMatched] = useState(false);
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
      var s="";
      numbers.forEach(number=>{
        s=s+number
      })
      console.log("this",s)

      if(s == randNumber ){
        console.log("matched");
        setNumbers([]);
        setMatched(true);
          setScreen(2);
      }else if(attempts<=1){
         setMatched(false) 
         setScore(score-10)
         setAttempts(attempts-1)
         setScreen(2);
         setNumbers([]);
      }
      else{
        setAttempts(attempts-1)
        setScore(score-10)
        setMatched(false);
        setMsg("Wrong guess,try again")
        setNumbers([]);
      }
      
        
    }
    const giveHint=()=>{
        console.log("guess",randNumber)
        if(randNumber!=null && randNumber>50 && randNumber <100 && randNumber%2==0){
          setHint("50<number<100 and even");
        
        }else if(randNumber!=null && randNumber>50 && randNumber <100 && randNumber%2!=0){
          setHint("50<number<100 and odd");
        }else if(randNumber!=null && randNumber>0 && randNumber <50 && randNumber%2==0){
          setHint("0<number<50 and even");
        }
        else if(randNumber!=null && randNumber>0 && randNumber <50 && randNumber%2!=0){
          setHint("0<number<50 and odd");
        }
    }

    const handleFinish=()=>{
      setHint("")
      setAttempts(4);
      setScore(50);
      setMsg("Guess between 0-100")
      setScreen(0)
    }
    const playAgainHandle=()=>{
      setRandNumber(Math.floor(Math.random()*100))
      console.log("--->",randNumber);
      setAttempts(4);
      setScore(50);
      setHint("");
      setMsg("Guess between 0-100")
      setScreen(1)
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
      <View style={{display:"flex",flexDirection:"row"}}>
        <TouchableOpacity   onLongPress ={giveHint}  style={{backgroundColor:"white",justifyContent:'center',height:40,width:100,marginTop:10}} >
          <Text style={{textAlign:'center',color:"grey",fontSize:20,fontWeight:"bold"}} >Hint</Text>
        </TouchableOpacity>
        <Text style={{marginLeft:5,marginTop:5,color:"white",textAlign:"center",alignSelf:"center"}} >{hint}</Text>
      </View>
      <View>
        <Text style={{fontSize:20,color:"white"}}>Attempts remaining : {attempts}</Text>
        <Text style={{fontSize:20,color:"white"}}>Score : {score}</Text>
        <Text  style={{textAlign:'center',fontSize:20,backgroundColor:"white",padding:10,color:"grey"}}>{msg}</Text>
      </View>
     
     
      <View style={{top:20}}>
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
  }else if(screen==2 && matched){
      return(
        <View style={{flex:1,backgroundColor:"grey",alignItems:'center'}}>
          <View  style={{flex:1,backgroundColor:"grey",alignItems:'center',top:80}}  >
          <Text style={{fontSize:20,color:"white",marginBottom:10}}> Right Guess</Text>
            <Text style={{fontSize:20,color:"white",marginBottom:10}}> Your Score : {score}</Text>
            <Text style={{fontSize:20,color:"white",marginBottom:10}}> Attempts remaining : {attempts} </Text>
          <TouchableOpacity onPress={playAgainHandle} style={{height:50,width:250,justifyContent:'center',backgroundColor:"white",marginBottom:10}}>
            <Text style={{alignSelf:'center',color:"grey",fontWeight:"bold"}} >Play Again</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleFinish}  style={{height:50,width:250,alignItems:'center',justifyContent:'center',backgroundColor:"white"}}>
            <Text  style={{color:"grey",fontWeight:"bold"}} >  Finish</Text>
          </TouchableOpacity>
          </View>
        </View>
      );
  }else if(screen==2 && !matched){
    return(
      <View style={{flex:1,backgroundColor:"grey",alignItems:'center'}}>
        <View  style={{flex:1,backgroundColor:"grey",alignItems:'center',top:40}}  >
        <Text style={{fontSize:20,color:"white",marginBottom:10}}> You lose </Text>
          <Text style={{fontSize:20,color:"white",marginBottom:10}}> Your Score : 0 </Text>
          <Text style={{fontSize:20,color:"white",marginBottom:10}}> Attempts remaining : 0 </Text>
          <Text style={{fontSize:20,color:"white",marginBottom:10}}> The number was : {randNumber}  </Text>
        <TouchableOpacity onPress={playAgainHandle} style={{height:50,width:250,justifyContent:'center',backgroundColor:"white",marginBottom:10}}>
          <Text style={{alignSelf:'center',color:"grey",fontWeight:"bold"}} >Play Again</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleFinish}  style={{height:50,width:250,alignItems:'center',justifyContent:'center',backgroundColor:"white"}}>
          <Text  style={{color:"grey",fontWeight:"bold"}} >  Finish</Text>
        </TouchableOpacity>
        </View>
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
