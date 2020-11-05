import React from 'react';
import { Foundation } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

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
<Ionicons name="ios-arrow-forward" size={24} color="black" />
<Ionicons name="ios-arrow-up" size={24} color="black" />
<Ionicons name="ios-arrow-back" size={24} color="black" />
<Ionicons name="ios-arrow-down" size={24} color="black" />
<Entypo name="controller-play" size={24} color="black" />
<Ionicons name="ios-play-circle" size={24} color="black" />
<Entypo name="controller-next" size={24} color="black" />
<Entypo name="controller-jump-to-start" size={24} color="black" />
*/