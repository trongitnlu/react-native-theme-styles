import React, {useEffect, useReducer} from 'react';
import {
  ViewStyle,
  TextStyle,
  ImageStyle,
  TouchableOpacity,
  Text,
} from 'react-native';
import {reducer, initialState, updateThemeKey} from './reducer';
import useStyle from './useStyle';

type StyleProps = {
  [key: string]: ViewStyle | TextStyle | ImageStyle | any;
};
type ValueTheme = {
  [key: string]: StyleProps;
};
interface Props {
  initTheme: ValueTheme;
  children: React.ReactNode;
  value: string;
}

function ThemeProvider(props: Props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  // const style = useStyle({
  //   yellow: {
  //     trong: 'red',
  //   },
  // });
  // useEffect(() => {
  //   console.log('>>>useEffect', {style, state});
  // }, [state, props]);
  return (
    <>
      <TouchableOpacity
        onPress={() => {
          dispatch(updateThemeKey('hehe'));
        }}
        style={{padding: 50, backgroundColor: 'red'}}>
        <Text>ABC</Text>
      </TouchableOpacity>
      {props.children}
    </>
  );
}

export default React.memo(ThemeProvider);
