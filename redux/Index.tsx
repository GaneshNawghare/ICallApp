import AsyncStorage from '@react-native-async-storage/async-storage';
import {configureStore, createSlice} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    userData: [],
  },
  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
    removeUserData: state => {
      state.userData = [];
    },
  },
});

const persistConfig = {
  key: 'root',
  storage:AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, authSlice.reducer);
export const { setUserData, removeUserData } = authSlice.actions
const store = configureStore({
  reducer: persistedReducer,
   middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export default store;
export const persistor = persistStore(store);