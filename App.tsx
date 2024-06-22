import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

const App = () => {
  const [inputFieldValue, setInputFieldValue] = useState<string>("")
  const [result, setResult] = useState<number>(0)
  const [negativeValue, setNegativeValue] = useState<number>(0)

  const handleAddANumber = (num: string) => {
    setInputFieldValue(num)
    setNegativeValue(0)

    let delimiter = ","
    let newString = num
    if (num.indexOf("//") === 0 && num.length > 5) {

      delimiter = num[2];

      let numArr = num.split('');

      for (let i = 0; i < numArr.length; i++) {
        if (numArr[i] == "n") {
          numArr[i] = "\Y"
          break
        }
      }
      newString = numArr.join('');
    }
    let finalString
    if (newString.indexOf("//" + delimiter + "\\Y") === 0) {
      finalString = newString.substring(5)
    } else {
      finalString = newString
    }

    let result = 0;
    let temp = finalString?.replaceAll('\\n', delimiter).split(delimiter)
    for (let i = 0; i < temp.length; i++) {
      let convertedValue = parseInt(temp[i])

      if (!isNaN(convertedValue)) {
        if (convertedValue < 0) {
          setNegativeValue(convertedValue)
          break;
        }
        result += convertedValue;
      }

    }
    setResult(result)
    console.log('fdlog', result);
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