import React, { useState } from "react";
import { Text, View, Image, TextInput } from "react-native";

export default App = () => {
  const [text, setText] = useState("");

  const handleTextChange = (newText) => {
    setText(newText);
  };

  return (
    <View>
      <Image source={require("./assets/favicon.png")} />
      <TextInput
        placeholder="Tap Here to Capitalize"
        onChangeText={handleTextChange} 
        value={text} 
      />

      <Text>{text.toUpperCase()}</Text>
    </View>
  );
};
