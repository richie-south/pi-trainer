
export const setRecordPi = (value) => {
  AsyncStorage.setItem('@piTrainer:recordPI', value)
  return {
    type: 'SET_RECORD_PI',
    payload: value,
  }
}

export const setRecordTime = (value) => {
  AsyncStorage.setItem('@piTrainer:recordTime', value)
  return {
    type: 'SET_RECORD_TIME',
    payload: value,
  }
}

export const activateAchievements = () => ({
  type: 'ACTIVATE_ACHIEVEMENTS',
})

export const deactivateAchievements = () => ({
  type: 'DEACTIVATE_ACHIEVEMENTS',
})

export const increaseTextSize = (value) => {
  AsyncStorage.setItem('@piTrainer:textSize', value)
  return {
    type: 'INCREASE_TEXT_SIZE',
    payload: value,
  }
}

export const decreaseTextSize = (value) => {
  AsyncStorage.setItem('@piTrainer:textSize', value)
  return {
    type: 'DECREASE_TEXT_SIZE',
    payload: value,
  }
}

export const increaseGroupSize = (value) => {
  AsyncStorage.setItem('@piTrainer:groupSize', value)
  return {
    type: 'INCREASE_GROUP_SIZE',
    payload: value,
  }
}

export const decreaseGroupSize = (value) => {
  AsyncStorage.setItem('@piTrainer:groupSize', value)
  return {
    type: 'DECREASE_GROUP_SIZE',
    payload: value,
  }
}
