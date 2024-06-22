import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

const App = () => {
  const [inputFieldValue, setInputFieldValue] = useState<string>("")
  const [result, setResult] = useState<number>(0)

  const handleAddANumber = (num: string) => {
    setInputFieldValue(num)
    let newArr: [] = []
    num.split(',').forEach(val => {
      if (!isNaN(parseInt(val))) {
        newArr.push(parseInt(val))
      }
    });
    console.log("result==>", newArr);

    const sum = newArr?.reduce((partialSum: number, a: number) => partialSum + a, 0);
    console.log("sums==>", sum);
    setResult(sum)
  }

  const handleClearText = () => {
    setInputFieldValue("")
    setResult(0)
  }


  return (
    <View style={styles.container}>
      <TextInput testID='ti-to-take-number-input' value={inputFieldValue} placeholder='Enter a first number to add' onChangeText={(num: any) => handleAddANumber(num)} style={styles.textInputField} />
      <View style={styles.textAndButtonContainer}>
        <Text style={{ paddingHorizontal: 10 }} testID='t-display-text'>{result}</Text>
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