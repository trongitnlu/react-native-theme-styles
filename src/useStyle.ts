import {useMemo} from 'react';
import {getThemeColors} from './theme';
import {reducer, initialState} from './reducer';
import {useReducer} from 'react';
import {useColorScheme} from 'react-native';

export default function useStyle<T>(styles: T): T {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log('>>>state', state);

  const scheme = useColorScheme();
  return useMemo(() => {
    const arr = Object.entries(styles);
    const themeColors = getThemeColors();
    const theme = scheme === 'light' ? themeColors.light : themeColors.dark;
    const isDark = scheme === 'dark';
    const stylesResult = arr.reduce((result, currentValue) => {
      const [key, value] = currentValue;
      return {
        ...result,
        [key]: typeof value === 'function' ? value(isDark, theme) : value,
      };
    }, {});
    return stylesResult;
  }, [styles, scheme]) as T;
}
