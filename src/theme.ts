let lightColor = {
  primary: 'rgb(255, 45, 85)',
  background: 'rgb(242, 242, 242)',
  card: 'rgb(255, 255, 255)',
  text: 'rgb(28, 28, 30)',
  border: 'rgb(199, 199, 204)',
};
let darkColor = {
  primary: 'rgb(255, 45, 85)',
  background: 'rgb(0, 0, 0)',
  card: 'rgb(255, 255, 255)',
  text: 'rgb(255, 255, 255)',
  border: 'rgb(199, 199, 204)',
};

let dark: any;
let light: any;

type ThemeColor<T> = {
  dark: T | object;
  light: T | object;
};

export function setThemeColors<T>(themeColors: ThemeColor<T>) {
  light = themeColors.light as T;
  dark = themeColors.dark as T;
}

export function getThemeColors<T>(): ThemeColor<T> {
  const dark1 = dark as T;
  const light1 = light as T;
  return {dark: dark1, light: light1};
}

setThemeColors({dark: darkColor, light: lightColor});
