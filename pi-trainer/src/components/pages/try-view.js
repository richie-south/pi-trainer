import React from 'react'
import {StyleSheet, View, Text, ScrollView} from 'react-native'
import {compose, withHandlers, withState, lifecycle} from 'recompose'
import {Numberpad} from '../ui/numberpad'
import {piNumbers} from '../../lib/number'
const RCTUIManager = require('NativeModules').UIManager

const isNumberCorrect = (numbers, entered, position) =>
  +numbers[position] === +entered

const enhance = compose(

  withState('inputed', 'setInputed', [{ value: '3.', isCorrect: true}]),
  withState('myScrollRef', 'setMyScrollRef', null),
  withHandlers({
    addNumber: ({inputed, setInputed, myScrollRef}) => (number) => {
      const isCorrect = isNumberCorrect(piNumbers, number, [...inputed, number].length-1)
      setInputed([...inputed, {value: number, isCorrect}])

      // auto scroll to bottom
      RCTUIManager.measure(myScrollRef.getInnerViewNode(), (...data)=>{
        myScrollRef.scrollTo({y: data[3], animated: true})
      })
    },
  })
)

const StatelessTry = ({setMyScrollRef, inputed, addNumber}) =>
  <View style={styles.container}>

    <ScrollView
      ref={setMyScrollRef}
      style={styles.inputed}
    >
      <Text style={styles.textHolder}>
      {inputed.map(({value, isCorrect}, index) =>
        <Text
          key={index}
          style={[styles.inputedText, isCorrect ? styles.correctNumber : styles.incorrectNumber]}
        >
          {value}
        </Text>
      )}
      </Text>

    </ScrollView>
    <View
      style={styles.numPadWrapper}
    >
      <Numberpad
        onPress={addNumber}
      />
    </View>
  </View>


const styles = StyleSheet.create({
  textHolder: {
    textAlign: 'left',
  },

  correctNumber: {},

  incorrectNumber: {
    color: '#444444'
  },

  inputedText: {
    textAlign: 'left',
    flexDirection: 'row',
    lineHeight: 80,
    fontSize: 70,
    color: '#FFFFFF'
  },

  inputed: {
    flex: 1,
    marginLeft: 16,
    marginRight: 16,
    marginTop: 80,
  },

  numPadWrapper: {
  },

  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#FF7F7F',
  },
})

export const TryView = enhance(StatelessTry)
