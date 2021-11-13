import React from "react";
import { Touchable, TouchableOpacity, View,Text } from "react-native";
const Button_Component =({button,buttonPress})=>{
return(
        <TouchableOpacity   onPress = {()=>{buttonPress(button.id)}} style={{backgroundColor:"white",height:50,width:110,borderRadius:5,elevation:5,margin:5,alignItems:"center",justifyContent:"center"}}>
            <Text  style={{color:"grey",fontSize:30}}  >{button.id}</Text>
        </TouchableOpacity>
);
}
export default Button_Component;