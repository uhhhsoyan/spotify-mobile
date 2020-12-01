import React, { FC, ReactChild, useReducer } from 'react';
import { AuthActions, AuthState, initialAuthState } from './types';
import { signin } from './AuthContext';

interface ContextActions {
  signin?: typeof signin
  // signout,
  // clearErrorMessage,
  // playSong,
  // pauseSong,
  // showModal,
  // hideModal,
  // selectSong,
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
