# react-native-theme-styles
### Install
`yarn add react-native-theme-styles@https://github.com/trongitnlu/react-native-theme-styles.git`

### Config
Add the following lines into app.js
```
import {setThemeColors} from 'react-native-theme-styles';
...
setThemeColors({
  dark: {
    background: 'red',
    text: 'blue',
  },
  light: {
    text: 'yellow',
    background: 'green',
  }
});
```

### Usage

```
// Init styles
const styleDefault = StyleSheet.create({
  container: (_isDark, theme) => ({
    flex: 1,
    backgroundColor: theme.background,
  }),
  btnLogin: {
    marginHorizontal: 0,
    marginVertical: 0,
  }
});

import * as React from 'react';
import {TouchableOpacity} from 'react-native';
import {useStyle} from 'react-native-theme-styles'; // Import here

function ExampleView() {
  const styles = useStyle(styleDefault); // use here
  console.log('>>>styles', styles);
  return <View style={styles.container} />
}
```
