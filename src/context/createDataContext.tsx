import React, { FC, ReactChild, useReducer } from 'react';
import { AuthActions, AuthState, initialAuthState } from './types';
import { signin, signout,
  clearErrorMessage,
  playSong,
  pauseSong,
  showModal,
  hideModal,
  selectSong } from './AuthContext';

interface ContextActions {
  signin?: typeof signin;
  signout?: typeof signout;
  clearErrorMessage?: typeof clearErrorMessage;
  playSong?: typeof playSong;
  pauseSong?: typeof pauseSong;
  showModal?: typeof showModal;
  hideModal?: typeof hideModal;
  selectSong?: typeof selectSong;
}

interface ContextValue extends ContextActions {
  state: AuthState
}

type Props = {
  children: ReactChild;
};

export default (
  reducer: (state: AuthState, action: AuthActions) => AuthState,
  actions: ContextActions,
  defaultValue: AuthState,
) => {
  const Context = React.createContext<ContextValue>({ state : initialAuthState });

  const Provider: FC<Props> = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, defaultValue);
    const boundActions: any = {};
    for (const key in actions) {
      boundActions[key] = actions[key](dispatch);
    }
    return <Context.Provider value={{ state, ...boundActions }}>{children}</Context.Provider>;
  };
  return { Context, Provider };
};
