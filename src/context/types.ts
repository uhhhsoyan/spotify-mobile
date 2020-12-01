import { Audio } from 'expo-av';

export type AuthState = {
  audio: null | Audio.Sound;
  duration: number;
  errorMessage: string | Error;
  modalVisible: boolean;
  playing: boolean;
  token: null | string;
  trackData: null | Record<string, unknown>;
};

export const initialAuthState: AuthState = {
  token: null,
  errorMessage: '',
  trackData: null,
  audio: null,
  playing: true,
  duration: 0,
  modalVisible: false,
};

export type SignIn = {
  type: 'signin';
  payload: string;
};

export type SignOut = {
  type: 'signout';
};

export type AddError = {
  type: 'add_error';
  payload: Error | string;
};

export type ClearError = {
  type: 'clear_error';
};

export type PlaySong = {
  type: 'play_song';
};

export type PauseSong = {
  type: 'pause_song';
};

export type ShowModal = {
  type: 'show_modal';
};

export type HideModal = {
  type: 'hide_modal';
};

export type SelectSong = {
  type: 'select_song';
  payload: [Audio.Sound, Record<string, unknown>];
};

export type AuthActions =
  | SignIn
  | SignOut
  | AddError
  | ClearError
  | PlaySong
  | PauseSong
  | ShowModal
  | HideModal
  | SelectSong;
