import { StyleSheet, Text, View, TextInput, Button, ScrollView, Pressable } from 'react-native'
import React, { useState } from 'react'

const App = () => {
  const [text, setText] = useState("")
  const [textList, setTextList] = useState([])
  
  const [show, setShow] = useState(true)
  const [reminder, setReminder] = useState(false)
  
  const textHandle = (t) => {
    setText(t)
  }

  const buttonHandle = () => {
    setTextList([...textList, text])

    if(show === false){
      setReminder(true)
      setTimeout( () => setReminder(false), 250)
    }
  }

  const deleteHandle = (idx) => {
    setTextList(
      textList.filter((txt, txt_idx) => txt_idx !== idx)
    )
  }

  const showHandle = () => {
    setShow(!show)
  }

  return (
    <View>

      <Text>Wprowadź zadanie</Text>
      <TextInput style={styles.input} value={text} onChangeText={textHandle}></TextInput>
      <Button title="Dodaj do listy" onPress={buttonHandle}></Button>
      <Button color={
        show === true ? ("green") : (
          reminder ? "red" : "#333"
          )
      }
        title="Ukryj liste"
        onPress={showHandle}></Button>
      <ScrollView style={styles.list}>
        {show === true ? (
          textList.map((txt, txt_idx) => (

            <View style={{ flex: 1, justifyContent: "space-evenly", flexDirection: "row" }} key={txt_idx}>
              <Text style={styles.li}>{txt_idx + 1}.{txt}</Text>
              <Pressable style={{ backgroundColor: "#444444", width: 35, height: 35 }} onPress={() => deleteHandle(txt_idx)}>
                <Text style={{ color: "red", textAlign: "center", textAlignVertical: "center", fontSize: 20, padding: 3 }}>X</Text>
              </Pressable>

            </View>

          )
          )) : <View></View>
        }
      </ScrollView>

    </View>
  )
}

export default App

const styles = StyleSheet.create({
  input: {
    backgroundColor: "gainsboro",
    padding: 10,
  },
  list: {
    backgroundColor: "#989898",
  },
  li: {
    textAlign: "center",
    textAlignVertical: "center",
    color: "white",
  }
})