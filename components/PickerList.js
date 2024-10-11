import { StyleSheet  } from 'react-native'
import React, { useState } from 'react'
import { Picker } from '@react-native-picker/picker'
import { useTailwind } from 'nativewind'

const PickerList = ({title, selectedValue, onValueChange }) => {
  return (
    <Picker
        selectedValue={selectedValue}
        onValueChange={onValueChange}
        style = {{color: "white"}}
        dropdownIconColor={"white"}
    >
        <Picker.Item label={title}/>
        <Picker.Item label='Item1' value="Item1" />
        <Picker.Item label='Item2' value="Item2" />
        <Picker.Item label='Item3' value="Item3" />
        <Picker.Item label='Item4' value="Item4" />
        <Picker.Item label='Item5' value="Item5" />
    </Picker>
  )
}

export default PickerList