import React from 'react'
import {StyleSheet, View, Text, ScrollView} from 'react-native'
import {compose, withHandlers, withState, lifecycle, setStatic, defaultProps} from 'recompose'
import {Numberpad} from '../ui/numberpad'
import {piNumbers} from '../../lib/number'
import {PiStatusBar} from '../ui/pi-status-bar'
import {StatusBar} from '../ui/status-bar'
const RCTUIManager = require('NativeModules').UIManager

const isNumberCorrect = (numbers, entered, position) =>
  +numbers[position +1] === +entered

const getSuccesRate = (total, errors) => {
  return Math.floor(100 - ((errors / total) * 100 ))
}

const enhance = compose(
  setStatic('navigationOptions', {
    header: null,
  }),
  defaultProps({
    startValue: [{ value: '3.', isCorrect: true}],
  }),
  withState('inputed', 'setInputed', ({startValue}) => startValue),
  withState('errors', 'setErrors', 0),
  withState('succesRate', 'setSuccesRate', 100),
  withState('myScrollRef', 'setMyScrollRef', null),
  withHandlers({
    addNumber: ({inputed, setInputed, myScrollRef, errors, setErrors, setSuccesRate, startValue}) => (number) => {
      // clear is pressed
      if (number === null) {
        setSuccesRate(100)
        setErrors(0)
        setInputed(startValue)
        return
      }

      const isCorrect = isNumberCorrect(piNumbers, number, [...inputed, number].length-1)
      const current = [...inputed, {value: number, isCorrect}]
      const currentErrors = errors + (isCorrect ? 0 : 1)

      setSuccesRate(getSuccesRate(current.length-1, currentErrors))
      setErrors(currentErrors)
      setInputed(current)

      // auto scroll to bottom
      RCTUIManager.measure(myScrollRef.getInnerViewNode(), (...data)=>{
        myScrollRef.scrollTo({y: data[3], animated: true})
      })
    },
  })
)

const StatelessTry = ({setMyScrollRef, inputed, addNumber, errors, succesRate}) =>
  <View style={styles.container}>
    <StatusBar/>
    <ScrollView
      ref={setMyScrollRef}
      style={styles.inputed}
    >
      <Text style={styles.textHolder}>
      {inputed.map(({value, isCorrect}, index) =>
        <Text
          key={index}
          style={[styles.inputedText, isCorrect ? undefined : styles.incorrectNumber]}
        >
          {value}
        </Text>
      )}
      </Text>

    </ScrollView>
    <View
      style={styles.numPadWrapper}
    >
      <PiStatusBar
        digits={inputed.length-1}
        errors={errors}
        precentage={`${succesRate}%`}
      />
      <Numberpad
        onPress={addNumber}
      />
    </View>
  </View>

const styles = StyleSheet.create({
  textHolder: {
    textAlign: 'left',
  },

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
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
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
