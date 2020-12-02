import React, { FC } from 'react';
import { StyleProp, TextStyle } from 'react-native';
import { Foundation } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

type Props = {
  name: string;
  size: number;
  color: string;
  style?: StyleProp<TextStyle>;
  onPress?: () => void;
};

const Icon: FC<Props> = ({ name, size, color, style, onPress }) => {
    switch(name) {
        case 'home':
            return <MaterialCommunityIcons name="home-variant" size={size} color={color} style={style} onPress={onPress}/>;
        case 'homeOutline':
            return  <MaterialCommunityIcons name="home-variant-outline" size={size} color={color} onPress={onPress}/>;
        case 'search':
            return <Feather name="search" size={size} color={color} onPress={onPress}/>;
        case 'library':
            return <MaterialIcons name="library-music" size={size} color={color} onPress={onPress}/>;
        case 'settings':
            return <Feather name="settings" size={size} color={color} style={style} onPress={onPress}/>;
        case 'arrowBack':
            return <Ionicons name="ios-arrow-back" size={size} color={color} style={style} onPress={onPress}/>;
        case 'arrowForward':
            return <Ionicons name="ios-arrow-forward" size={size} color={color} style={style} onPress={onPress}/>;
        case 'arrowUp':
            return <Ionicons name="ios-arrow-up" size={size} color={color} style={style} onPress={onPress}/>;
        case 'arrowDown':
            return <Ionicons name="ios-arrow-down" size={size} color={color} style={style} onPress={onPress}/>;
        case 'microphone':
            return <MaterialCommunityIcons name="microphone-outline" size={size} color={color} style={style} onPress={onPress}/>;
        case 'camera':
            return <Feather name="camera" size={size} color={color} style={style} onPress={onPress}/>;
        case 'ellipsis':
            return <AntDesign name="ellipsis1" size={size} color={color} style={style} onPress={onPress}/>;
        case 'play':
            return <Entypo name="controller-play" size={size} color={color} style={style} onPress={onPress}/>;
        case 'pause':
            return <Entypo name="controller-paus" size={size} color={color} style={style} onPress={onPress}/>;
        case 'construction':
            return <Ionicons name="ios-construct" size={size} color={color} style={style} onPress={onPress}/>;
        case 'heart':
            return <AntDesign name="heart" size={size} color={color} style={style}onPress={onPress}/>;
        case 'heartOutline':
            return <AntDesign name="hearto" size={size} color={color} style={style} onPress={onPress}/>;
        case 'playCircle':
            return <MaterialIcons name="play-circle-filled" size={size} color={color} style={style} onPress={onPress}/>;
        case 'pauseCircle':
            return <MaterialIcons name="pause-circle-filled" size={size} color={color} style={style} onPress={onPress}/>;
        case 'nextSong':
            return <Entypo name="controller-next" size={size} color={color} style={style} onPress={onPress}/>;
        case 'jumpToStart':
            return <Entypo name="controller-jump-to-start" size={size} color={color} style={style} onPress={onPress}/>;
        case 'shuffle':
            return <Ionicons name="ios-shuffle" size={size} color={color} style={style} onPress={onPress}/>;
        case 'repeat':
            return <Ionicons name="ios-repeat" size={size} color={color} style={style} onPress={onPress}/>;
        default:
            return <MaterialCommunityIcons name="home-variant" size={size} color={color} onPress={onPress}/>;
    }
};

export default Icon;

/*
<Foundation name="home" size={24} color="black" />
<AntDesign name="search1" size={24} color="black" />
<AntDesign name="addusergroup" size={24} color="black" /> // Find Friends
<Feather name="share" size={24} color="black" />
<EvilIcons name="close" size={24} color="black" />
*/