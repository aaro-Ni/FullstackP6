import { createSlice } from "@reduxjs/toolkit"


const initialState = null

const notificationSlice = createSlice({
  name: 'notification', 
  initialState,
  reducers: {
    setNotificationTo(state, action){
      return (action.payload)
    }
  }
})

export const {setNotificationTo} = notificationSlice.actions

export const setNotification = (notification, time) => {
    return dispatch => {
        dispatch(setNotificationTo(notification))
        setTimeout(() => {
            dispatch(setNotificationTo(null))
          }, time*1000)
    }
}

export default notificationSlice.reducer