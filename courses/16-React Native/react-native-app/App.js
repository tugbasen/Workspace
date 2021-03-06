import React, {useState, useEffect} from 'react';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

import AppNavigator from './src/navigation/AppNavigator';

const loadFonts = () => {
  
  return Font.loadAsync({
    'Ubuntu': require('./assets/fonts/Ubuntu-Regular.ttf'),
    'Ubuntu-Bold': require('./assets/fonts/Ubuntu-Bold.ttf')
  });
}

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if(!fontLoaded) {
    return (
      <AppLoading 
        startAsync={loadFonts}
        onFinish={() => setFontLoaded(true)}
        onError={console.warn}
      />
    );
  }

  return (
    <AppNavigator />
  );
}
