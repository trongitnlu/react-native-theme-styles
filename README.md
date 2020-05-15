# react-native-theme-styles
### Install
`yarn add react-native-theme-styles@https://github.com/trongitnlu/react-native-theme-styles.git`

### Config
Import the following lines into app.js
```
import {setThemeColors} from 'react-native-theme-styles';
...
setThemeColors({
  dark: {
    background: 'red',
    text: 'blue',
  } as ColorsType,
  light: {
    text: 'yellow',
    background: 'green',
  } as ColorsType,
});
```

### Usage

```
const styleDefault = StyleSheet.create({
  container: (_isDark, theme) => ({
    flex: 1,
    backgroundColor: theme.background,
  }),
  btnLogin: {
    marginHorizontal: 0,
    marginVertical: 0,
  },
});

import {useStyle} from 'react-native-theme-styles';
...
const styles = useStyle(styleDefault);

```
