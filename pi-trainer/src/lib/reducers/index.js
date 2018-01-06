import {combineReducers} from 'redux'
import {textSize, groupSize} from './size'
import {records, isAchievementsActive, displayNewAchievement} from './achievements'

export const rootReducer = combineReducers({
  records,
  isAchievementsActive,
  displayNewAchievement,
  textSize,
  groupSize,
})
