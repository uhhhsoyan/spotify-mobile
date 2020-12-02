import { CompositeNavigationProp } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { StackNavigationProp } from '@react-navigation/stack';

export type AuthStackParamList = {
  SignIn: undefined;
  Home: undefined;
}

export type TabNavParamList = {
  Home: undefined; // HomeStack
  Search: undefined; // SearchStack
  Library: undefined; // LibraryStack
}

export type HomeStackParamList = {
  Home: undefined;
  Settings: undefined;
  SettingsDetail: undefined;
}

export type SearchStackParamList = {
  Search: undefined;
  SearchInput: undefined;
}

export type LibraryStackParamList = {
  Library: undefined;
}

// Nested navigation props



export type HomeScreenNavigationProp = CompositeNavigationProp<
  StackNavigationProp<HomeStackParamList, 'Home'>,
  BottomTabNavigationProp<TabNavParamList>
>;

export type SettingsScreenNavigationProp = CompositeNavigationProp<
  StackNavigationProp<HomeStackParamList, 'Settings'>,
  BottomTabNavigationProp<TabNavParamList>
>;

export type SettingsDetailScreenNavigationProp = CompositeNavigationProp<
  StackNavigationProp<HomeStackParamList, 'SettingsDetail'>,
  BottomTabNavigationProp<TabNavParamList>
>;

export type SearchScreenNavigationProp = CompositeNavigationProp<
  StackNavigationProp<SearchStackParamList, 'Search'>,
  BottomTabNavigationProp<TabNavParamList>
>;

export type SearchInputScreenNavigationProp = CompositeNavigationProp<
  StackNavigationProp<SearchStackParamList, 'SearchInput'>,
  BottomTabNavigationProp<TabNavParamList>
>;

export type LibraryScreenNavigationProp = CompositeNavigationProp<
  StackNavigationProp<LibraryStackParamList, 'Library'>,
  BottomTabNavigationProp<TabNavParamList>
>;

export type NavPropState = {

}

export type NavPropDescriptors = {

}

