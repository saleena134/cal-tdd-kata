import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

const App = () => {
  const [inputFieldValue, setInputFieldValue] = useState<number>(0)

  const handleClearText = () => {
    setInputFieldValue(0)
  }


  return (
    <View style={styles.container}>
      <TextInput testID='ti-to-take-number-input' value={inputFieldValue} placeholder='Enter a first number to add' onChangeText={(num: any) => setInputFieldValue(num)} style={styles.textInputField} />
      <View style={styles.textAndButtonContainer}>
        <Text style={{ paddingHorizontal: 10 }} testID='t-display-text'>{inputFieldValue}</Text>
        <Button title="Clear Text" testID='b-clear-text' onPress={() => handleClearText()} />
      </View>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20 },
  textInputField: { borderColor: "grey", borderWidth: 1, marginVertical: 10, width: '100%', height: '5%', borderRadius: 10, padding: 10 },
  textAndButtonContainer: { flexDirection: "row", width: "100%", justifyContent: "space-between" }
})