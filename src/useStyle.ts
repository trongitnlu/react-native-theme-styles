import {useColorScheme} from 'react-native';
import {useMemo} from 'react';
import {getThemeColors} from './theme';

export default function useStyle<T>(styles: T): T {
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
