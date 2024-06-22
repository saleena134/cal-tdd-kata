import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

const App = () => {
  const [inputFieldValue, setInputFieldValue] = useState<string>("")
  const [result, setResult] = useState<number>(0)
  const [negativeValue, setNegativeValue] = useState<number>(0)

  const handleAddANumber = (num: string) => {
    setInputFieldValue(num)
    setNegativeValue(0)
    let newArr: [] = []
    let temp = num.replaceAll('\\n', ',').split(',')
    for (let i = 0; i < temp.length; i++) {
      let convertedValue = parseInt(temp[i])
      if (!isNaN(convertedValue)) {
        if (convertedValue < 0) {
          setNegativeValue(convertedValue)
          break;
        }
        newArr.push(convertedValue)
      }

    }
    const sum = newArr?.reduce((partialSum: number, a: number) => partialSum + a, 0);
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
        <Text style={{ paddingHorizontal: 10 }} testID='t-display-text'>{negativeValue ? `negative numbers not allowed ${negativeValue}` : result}</Text>
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