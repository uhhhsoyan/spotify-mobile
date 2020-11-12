import React, { useState, useEffect, cloneElement } from 'react';
import { View, Text, TextInput, Modal, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Context as AuthContext } from '../../context/AuthContext';

const SongModal = () => {
    
    return (
        <Modal
            animationType='slide'
            visible={showSearch}
            presentationStyle='fullscreen'
        >


        </Modal>
    )
}

export default SongModal;