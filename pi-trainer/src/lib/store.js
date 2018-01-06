import {createStore, applyMiddleware} from 'redux'
import {rootReducer} from './reducers/index'
import thunk from 'redux-thunk'
import {AsyncStorage} from 'react-native'
import {setRecordPi, setRecordTime} from './actions/actions'

export const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
)

// TODO: promise all..
const loadAsyncStorage = () => async (dispatch) => {
  try {
    const time = await AsyncStorage.getItem('@piTrainer:recordTime')
    const groupSize = await AsyncStorage.getItem('@piTrainer:groupSize')
    const textSize = await AsyncStorage.getItem('@piTrainer:textSize')
    const pi = await AsyncStorage.getItem('@piTrainer:recordPI')
    if (time === null || pi === null || groupSize === null || textSize === null){
      await AsyncStorage.setItem('@piTrainer:recordTime', 0)
      await AsyncStorage.setItem('@piTrainer:recordPI', 0)
      await AsyncStorage.setItem('@piTrainer:textSize', 60)
      await AsyncStorage.setItem('@piTrainer:groupSize', 8)
    } else {
      dispatch(setRecordPi(pi))
      dispatch(setRecordTime(time))
      dispatch(activateAchievements())
      dispatch(increaseGroupSize(groupSize))
      dispatch(increaseTextSize(textSize))
    }
  } catch (error) {
    // Error retrieving data
  }
}

store.dispatch(
  loadAsyncStorage()
).then(() => {
  console.log('Success in loading async storage!')
})
