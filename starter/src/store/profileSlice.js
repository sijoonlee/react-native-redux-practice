import AsyncStorage from '@react-native-async-storage/async-storage'
import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit'
import { min } from 'react-native-reanimated';


const LOAD_STATUS = {
  HAS_NOT_LOADED: 'hasNotLoaded',
  HAS_LOADED: 'hasLoaded',
  IS_LOADING: 'isLoading',
  HAS_ERROR: 'hasError'
}

const profileAdapter = createEntityAdapter();

const initialState = profileAdapter.getInitialState({
  firstName: 'test',
  lastName: '',
  email: '',
  isSignedIn: false,
  loadStatus: LOAD_STATUS.HAS_NOT_LOADED
})

function waitFor(ms) {
  return new Promise(function(resolve) {
    setTimeout(resolve, ms)
  })
}

export const loadProfile = createAsyncThunk('profile/loadProfile', async () => {
  await AsyncStorage.setItem('profile', JSON.stringify({ firstName: 'initial'}))
  await waitFor(500);
  const profile = await AsyncStorage.getItem('profile')
  
  return profile
    ? JSON.parse(profile)
    : null
})

export const profileSlice = createSlice({
    name: 'profile',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
      setFirstName: (state, action) => {
        state.firstName = action.payload
        //await AsyncStorage.setItem('profile', state)
      },
    },
    extraReducers: (builder) => {
      builder
        .addCase(loadProfile.pending, (state, action) => {
          console.log("isloading", state, action.payload)
          state.loadStatus = LOAD_STATUS.IS_LOADING;
        })
        .addCase(loadProfile.fulfilled, (state, action) => {
          //todosAdapter.setAll(state, action.payload)
          console.log("fullfilled", state, action.payload)
          const profile = action.payload
          if (profile != null) {
            if (profile.firstName) {
              state.firstName = profile.firstName
            }
            if (profile.lastName) {
              state.lastName = profile.lasttName
            }
            if (profile.email) {
              state.email = profile.email
            }
          }
          state.loadStatus = LOAD_STATUS.HAS_LOADED;
        })
        .addCase(loadProfile.rejected, (state, action) => {
          //todosAdapter.setAll(state, action.payload)
          console.log("rejected", state, action.payload)
          state.loadStatus = LOAD_STATUS.HAS_ERROR;
        })
    },
  }
)
  
export const selectProfile = (state) => state.profile

export const profileActions = profileSlice.actions

export default profileSlice.reducer