import React from 'react';
import { Foundation } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const Icon = ({name, size, color, style }) => {
    switch(name) {
        case 'home':
            return <MaterialCommunityIcons name="home-variant" size={size} color={color} style={style} />
        case 'homeOutline':
            return  <MaterialCommunityIcons name="home-variant-outline" size={size} color={color} />
        case 'search':
            return <Feather name="search" size={size} color={color} />
        case 'library':
            return <MaterialIcons name="library-music" size={size} color={color} />
        case 'settings':
            return <Feather name="settings" size={size} color={color} style={style} />
        case 'arrowBack':
            return <Ionicons name="ios-arrow-back" size={size} color={color} style={style} />
        case 'arrowForward':
            return <Ionicons name="ios-arrow-forward" size={size} color={color} style={style} />
        case 'arrowUp':
            return <Ionicons name="ios-arrow-up" size={size} color={color} style={style} />
        case 'arrowDown':
            return <Ionicons name="ios-arrow-down" size={size} color={color} style={style} />
        case 'microphone':
            return <MaterialCommunityIcons name="microphone-outline" size={size} color={color} style={style} />
        case 'camera':
            return <Feather name="camera" size={size} color={color} style={style} />
        case 'ellipsis':
            return <AntDesign name="ellipsis1" size={size} color={color} style={style} />
        case 'play':
            return <Entypo name="controller-play" size={size} color={color} style={style} />
        case 'pause':
            return <Entypo name="controller-paus" size={size} color={color} style={style} />
        case 'construction':
            return <Ionicons name="ios-construct" size={size} color={color} style={style} />
        case 'heart':
            return <AntDesign name="heart" size={size} color={color} style={style}/>
        case 'heartOutline':
            return <AntDesign name="hearto" size={size} color={color} style={style} />
        case 'playCircle':
            return <MaterialIcons name="play-circle-filled" size={size} color={color} style={style} />
        case 'pauseCircle':
            return <MaterialIcons name="pause-circle-filled" size={size} color={color} style={style} />
        case 'nextSong':
            return <Entypo name="controller-next" size={size} color={color} style={style} />
        case 'jumpToStart':
            return <Entypo name="controller-jump-to-start" size={size} color={color} style={style} />
        case 'shuffle':
            return <Ionicons name="ios-shuffle" size={size} color={color} style={style} />
        case 'repeat':
            return <Ionicons name="ios-repeat" size={size} color={color} style={style} />
        default:
            return <MaterialCommunityIcons name="home-variant" size={size} color={color} />
    }
}

export default Icon;

/*
<Foundation name="home" size={24} color="black" />


<AntDesign name="search1" size={24} color="black" />

<Feather name="settings" size={24} color="black" />
<AntDesign name="addusergroup" size={24} color="black" /> // Find Friends
<Feather name="share" size={24} color="black" />
<EvilIcons name="close" size={24} color="black" />

*/