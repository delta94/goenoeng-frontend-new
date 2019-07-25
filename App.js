import React, {Component} from 'react'
import store from './src/public/redux/store';
import BottomNavigation from './src/route/AppNavigation'
import {Provider} from 'react-redux';
import OneSignal from 'react-native-onesignal'

export default class App extends Component {
  constructor(props) {
    super(props)
    OneSignal.init("aa96fe5a-eaa7-4897-a5ed-b7ea2b8df88a")
    OneSignal.inFocusDisplaying(2)
  }
  render() {
    return (
      <Provider store={store}>
        
        <BottomNavigation/>
       </Provider>
    )
  }
}
