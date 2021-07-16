import React, { useState } from "react";
import { View, Switch, StyleSheet } from "react-native";

const Switchbutton = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={{marginRight:40,marginTop:-20}}>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#1F85FF" : "#939290"}
        ios_backgroundColor="##939290"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   
  }
});

export default Switchbutton;