import React from 'react'
import {StyleSheet, View, Text, ScrollView, Button} from 'react-native'
import {compose, withHandlers, withState, lifecycle, setStatic} from 'recompose'
import {Numberpad} from '../ui/numberpad'
import {piNumbers} from '../../lib/number'
import {StatusBar} from '../ui/status-bar'
import {PaddedBox} from '../ui/layout'
import {IncreaseDecreaseView} from '../ui/increase-decrease'
import R from 'ramda'
const RCTUIManager = require('NativeModules').UIManager

const groupArray = (amount, array) => {
  return R.addIndex(R.reduce)((total, _, index) => {
    return index % amount === 0
      ? [...total, array.slice(index, index + amount)]
      : total
  }, [], array)
}

const enhance = compose(
  setStatic('navigationOptions', {
    header: null,
  }),
  withState('groupSize', 'setGroupSize', 6),
  withState('fontSize', 'setFontSize', 60),
  withState('loadSize', 'setLoadSize', 256),
  withState('numbers', 'setNumbers', ({groupSize, loadSize}) =>
    groupArray(groupSize, piNumbers.split('').slice(0, loadSize))),
  withHandlers({
    increaseGroupsizePress: ({setNumbers, setGroupSize, groupSize, loadSize}) => () => {
      const newGroupSize = ++groupSize
      setGroupSize(newGroupSize)
      setNumbers(groupArray(newGroupSize, piNumbers.split('').slice(0, loadSize)))
    },
    decreaseGroupsizePress: ({setNumbers, setGroupSize, groupSize, loadSize}) => () => {
      const newGroupSize = groupSize-- <= 0 ? 0 : groupSize--
      setGroupSize(newGroupSize)
      setNumbers(groupArray(newGroupSize, piNumbers.split('').slice(0, loadSize)))
    },

    increaseFontSizePress: ({fontSize, setFontSize}) => () =>
      setFontSize(++fontSize),
    decreaseFontSizePress: ({fontSize, setFontSize}) => () =>
      setFontSize(fontSize-- <= 4 ? 4 : fontSize--),

    doubbleLoadSize: ({loadSize, setLoadSize, groupSize, setGroupSize, setNumbers}) => () => {
      const newLoadSize = loadSize * 2
      setLoadSize(newLoadSize)

      setGroupSize(groupSize)
      setNumbers(
        groupArray(groupSize,
          piNumbers
            .split('')
            .slice(0, newLoadSize
          )
        )
      )
    }

  })
)

const StatelessReference = ({
  numbers,
  fontSize,
  groupSize,
  increaseGroupsizePress,
  decreaseGroupsizePress,
  increaseFontSizePress,
  decreaseFontSizePress,
  doubbleLoadSize,
}) =>
  <View style={styles.container}>
    <StatusBar/>
    <ScrollView
      style={styles.contentHolder}
    >
      <IncreaseDecreaseView
        groupSize={groupSize}
        fontSize={fontSize}
        increaseFontSizePress={increaseFontSizePress}
        decreaseFontSizePress={decreaseFontSizePress}
        increaseGroupsizePress={increaseGroupsizePress}
        decreaseGroupsizePress={decreaseGroupsizePress}
      />
      <View style={styles.textHolder}>
      {numbers.map((group, index) =>
        <Text
          style={styles.numbers}
          key={index}
        >
          {group.map((number, index) =>
            <Text
              style={[styles.number, {fontSize}]}
              key={`${index}-${number}`}
            >
              {number}
            </Text>
          )}
        </Text>
      )}

    </View>
    <Button
      style={styles.loadMoreNumbersButton}
      onPress={doubbleLoadSize}
      title='Load more numbers'
      color='#EE5E5E'
      accessibilityLabel='Loads more pi numbers'
    />
    </ScrollView>
  </View>

const styles = StyleSheet.create({
  loadMoreNumbersButton: {
    height: 70,
  },

  numbers: {
    textAlign: 'left',
    flexDirection: 'row',
  },

  number: {
    fontSize: 70,
    color: '#FFFFFF',
  },

  textHolder: {
    flex: 1,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
  },

  contentHolder: {
    flex: 1,
  },

  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#FF7F7F',
  },
})

export const Reference = enhance(StatelessReference)
