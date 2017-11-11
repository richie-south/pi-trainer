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
  withHandlers({
    padClick: ({onPress}) => (nr) => onPress(nr)
  })
)

const NumberButton = ({padClick, text}) =>
<TouchableNativeFeedback
  onPress={padClick}
  background={TouchableNativeFeedback.SelectableBackground()}
>
  <View style={styles.button}>
    <Text style={styles.butonText}>{text}</Text>
  </View>
</TouchableNativeFeedback>

const StatelessNumberpad = ({padClick}) =>
  <View>
    <Column>
      <Row>
        <NumberButton
          text={7}
          padClick={padClick.bind(null, 7)}
        />
        <NumberButton
          text={8}
          padClick={padClick.bind(null, 8)}
        />
        <NumberButton
          text={9}
          padClick={padClick.bind(null, 9)}
        />
      </Row>
      <Row>
        <NumberButton
          text={4}
          padClick={padClick.bind(null, 4)}
        />
        <NumberButton
          text={5}
          padClick={padClick.bind(null, 5)}
        />
        <NumberButton
          text={6}
          padClick={padClick.bind(null, 6)}
        />
      </Row>
      <Row>
        <NumberButton
          text={1}
          padClick={padClick.bind(null, 1)}
        />
        <NumberButton
          text={2}
          padClick={padClick.bind(null, 2)}
        />
        <NumberButton
          text={3}
          padClick={padClick.bind(null, 3)}
        />
      </Row>
      <Row>
        <NumberButton
          text={0}
          padClick={padClick.bind(null, 0)}
        />
      </Row>
    </Column>
  </View>


const styles = StyleSheet.create({

  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
    backgroundColor: '#F24949',
  },

  butonText: {
    fontSize: 32,
    color: '#FFFFFF'
  }
})

export const Numberpad = enhance(StatelessNumberpad)
