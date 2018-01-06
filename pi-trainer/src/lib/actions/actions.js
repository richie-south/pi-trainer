
export const setRecordPi = (value) => ({
  type: 'SET_RECORD_PI',
  payload: value,
})

export const setRecordTime = (value) => ({
  type: 'SET_RECORD_TIME',
  payload: value,
})

export const activateAchievements = () => ({
  type: 'ACTIVATE_ACHIEVEMENTS',
})

export const deactivateAchievements = () => ({
  type: 'DEACTIVATE_ACHIEVEMENTS',
})

export const increaseTextSize = (value) => ({
  type: 'INCREASE_TEXT_SIZE',
  payload: value,
})

export const decreaseTextSize = (value) => ({
  type: 'DECREASE_TEXT_SIZE',
  payload: value,
})

export const increaseGroupSize = (value) => ({
  type: 'INCREASE_GROUP_SIZE',
  payload: value,
})

export const decreaseGroupSize = (value) => ({
  type: 'DECREASE_GROUP_SIZE',
  payload: value,
})
