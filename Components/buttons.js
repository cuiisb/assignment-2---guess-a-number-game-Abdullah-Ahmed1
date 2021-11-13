import React from "react";
import { View,Text } from "react-native";
import Button_Component from "./button";
const Buttons_Component=({buttons,buttonPress})=>{
    return(
      <View style={{display:"flex",flexWrap:"wrap",flexDirection:"row",justifyContent:"center"}}>
          {
              buttons.map(button=>{
                  return <Button_Component  key={button.id} button = {button}   buttonPress={buttonPress} />
              })
          }
      </View>  
    );
}
export default Buttons_Component;