import React, { FC, ReactChild, useReducer } from 'react';
import { AuthActions, AuthState, initialAuthState } from './types';
import {
  signin,
  signout,
  clearErrorMessage,
  playSong,
  pauseSong,
  showModal,
  hideModal,
  selectSong,
} from './AuthContext';

type ContextActions = {
  signin?: typeof signin;
  signout?: typeof signout;
  clearErrorMessage?: typeof clearErrorMessage;
  playSong?: typeof playSong;
  pauseSong?: typeof pauseSong;
  showModal?: typeof showModal;
  hideModal?: typeof hideModal;
  selectSong?: typeof selectSong;
};

type ContextValue = {
  state: AuthState;
  signin?: () => Promise<void>;
  signout?: () => Promise<void>;
  clearErrorMessage?: () => void;
  playSong?: () => void;
  pauseSong?: () => void;
  showModal?: () => void;
  hideModal?: () => void;
  selectSong?: (songId: string, token: string | null) => Promise<void>;
};

type Props = {
  children: ReactChild;
};

export default (
  reducer: (state: AuthState, action: AuthActions) => AuthState,
  actions: ContextActions,
  defaultValue: AuthState,
) => {
  const Context = React.createContext<ContextValue>({ state: initialAuthState });

  const Provider: FC<Props> = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, defaultValue);
    return (
      <Context.Provider
        value={{
          state,
          signin: actions.signin && actions.signin(dispatch),
          signout: actions.signout && actions.signout(dispatch),
          clearErrorMessage: actions.clearErrorMessage && actions.clearErrorMessage(dispatch),
          playSong: actions.playSong && actions.playSong(dispatch),
          pauseSong: actions.pauseSong && actions.pauseSong(dispatch),
          showModal: actions.showModal && actions.showModal(dispatch),
          hideModal: actions.hideModal && actions.hideModal(dispatch),
          selectSong: actions.selectSong && actions.selectSong(dispatch),
        }}
      >
        {children}
      </Context.Provider>
    );
  };
  return { Context, Provider };
};
