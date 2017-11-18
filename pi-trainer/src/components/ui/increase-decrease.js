import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableNativeFeedback,
} from 'react-native'
import {compose, withHandlers} from 'recompose'
import {Column, Row} from './layout'

const enhance = compose(
)

export const IncreaseDecrease = ({increasePress, decreasePress, value, title}) => [
    <TouchableNativeFeedback
      key={0}
      onPress={decreasePress}
      background={TouchableNativeFeedback.SelectableBackground()}
    >
      <View style={styles.button}>
        <Text style={styles.butonText}>-</Text>
      </View>
    </TouchableNativeFeedback>,
    <View key={1} style={styles.valueView}>
      <Text style={styles.title}>
        {title}
      </Text>
      <Text style={styles.valueText}>
        {value}
      </Text>
    </View>,
    <TouchableNativeFeedback
      key={2}
      onPress={increasePress}
      background={TouchableNativeFeedback.SelectableBackground()}
    >
      <View style={styles.button}>
        <Text style={styles.butonText}>+</Text>
      </View>
    </TouchableNativeFeedback>]


const StatelessIncreaseDecreaseView = ({
  fontSize,
  groupSize,
  increaseFontSizePress,
  decreaseFontSizePress,
  increaseGroupsizePress,
  decreaseGroupsizePress,
}) =>
  <View style={styles.container}>
    <Row>
      <IncreaseDecrease
        title='group size'
        value={groupSize}
        increasePress={increaseGroupsizePress}
        decreasePress={decreaseGroupsizePress}
      />
      <IncreaseDecrease
        title='font size'
        value={fontSize}
        increasePress={increaseFontSizePress}
        decreasePress={decreaseFontSizePress}
      />
    </Row>
  </View>


const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  valueView: {
    height: 60,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EE5E5E',
  },

  title: {
    fontSize: 12,
    color: '#A74040'
  },

  valueText: {
    fontSize: 16,
    color: '#FFFFFF'
  },

  button: {
    height: 60,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EE5E5E',
  },

  butonText: {
    fontSize: 24,
    color: '#FFFFFF'
  }
})

export const IncreaseDecreaseView = enhance(StatelessIncreaseDecreaseView)
