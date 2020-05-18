type StateReducer = {
  themeKey: string;
};

export const initialState = {themeKey: ''} as StateReducer;

export const ACTION_TYPE = {
  UPDATE_THEME_KEY: 'ACTION_TYPE/UPDATE_THEME_KEY',
};

export function updateThemeKey(value: string) {
  return {type: ACTION_TYPE.UPDATE_THEME_KEY, payload: value};
}

export function reducer(state: StateReducer, action: any): StateReducer {
  switch (action.type) {
    case ACTION_TYPE.UPDATE_THEME_KEY:
      return {...state, themeKey: action.payload};
    default:
      return state;
  }
}
