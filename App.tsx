import { Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

const App = () => {

  const [inputFieldValue, setInputFieldValue] = useState<string>("")
  // this state is to have value of TextInputField
  const [result, setResult] = useState<number>(0)
  // this state is to have result of TextInputField 
  const [negativeValue, setNegativeValue] = useState<Array<Number>>()
  // this state is to have set of negative numbers

  // this arrow function is will take number as an arguments as input and produce an output with calculate value ( in setResult state)
  const handleAddANumber = (num: string) => {
    setInputFieldValue(num)
    setNegativeValue(undefined)

    let delimiter = ","
    let newString = num

    //this condition will check the index of "//" should be 0 and length should be lesser than 5 to match the expression //[delimiter]\n[numbers…]
    if (num.indexOf("//") === 0 && num.length > 5) {

      delimiter = num[2];

      let numArr = num.split('');

      // this loop will chcek each value of numArr array in which we have values from TextInputField
      for (let i = 0; i < numArr.length; i++) {

        // with the help of this if statment we are able to change "\n" to "\Y"
        if (numArr[i] == "n") {
          numArr[i] = "\Y"
          break
        }
      }

      newString = numArr.join('');
    }

    let finalString

    //with this if statment we are finally getting value matching //[delimiter]\n[numbers…] expression
    if (newString.indexOf("//" + delimiter + "\\Y") === 0) {
      finalString = newString.substring(5)
    } else {
      finalString = newString
    }

    let result = 0;

    let temp = finalString?.replaceAll('\\n', delimiter).split(delimiter)
    var arrNew = []

    //this will help to calculate the value for an output
    for (let i = 0; i < temp.length; i++) {
      let convertedValue = parseInt(temp[i])

      // to check if the value is Not A Number
      if (!isNaN(convertedValue)) {
        if (convertedValue < 0) {

          //inside this if statment we are chceking and pushing multiple negative values
          arrNew.push(convertedValue)
          setNegativeValue(arrNew)
        } else {

          // simpling calculating the result
          result += convertedValue;
        }
      }

    }
    // setting the values
    setResult(result)
  }

  // this function is for clearing the states
  const handleClearText = () => {
    setInputFieldValue("")
    setNegativeValue(undefined)
    setResult(0)
  }


  return (
    <View style={styles.container}>
      <Text style={styles.title}>{"Calculator Tdd Kata"}</Text>

      <View style={styles.innerContainer}>
        <Text style={{ fontSize: negativeValue ? 20 : 30, marginVertical: 20 }} testID='t-display-text'>{negativeValue ? `negative numbers not allowed ${negativeValue}` : result}</Text>
        <View style={styles.textInputFieldContainer}>
          <TextInput testID='ti-to-take-number-input' value={inputFieldValue} placeholder='Enter a first number to add' onChangeText={(num: any) => handleAddANumber(num)} style={styles.textField} />

          <Pressable testID='b-clear-text' style={({ pressed }: any) => [{ opacity: pressed ? 0.4 : 1, alignSelf: "center" }]} onPress={() => handleClearText()}>
            <Image source={require("./assests/clear.png")} style={styles.crossIcon} />
          </Pressable>

        </View>
      </View>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, marginVertical: 20 },
  title: { fontSize: 30, alignSelf: "center", marginVertical: 20 },
  innerContainer: { justifyContent: "center", flex: 1, alignItems: "center" },
  textInputFieldContainer: { borderColor: "grey", borderWidth: 1, width: '100%', height: '6%', borderRadius: 10, flexDirection: "row" },
  textField: { width: "90%", paddingHorizontal: 10 },
  crossIcon: { tintColor: "grey", height: 20, width: 20 }
})