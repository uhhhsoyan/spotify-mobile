import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, ScrollView, TextInput } from 'react-native';
import Icon from '../assets/icons';
import { Colors, Typography } from '../styles';

const SearchInputScreen = ({ navigation }) => {
    const [term, setTerm] = useState('');
    
    return (
        <View style={styles.container}>
            <View style={styles.screenHeader}>
                <View style={styles.inputContainer}>
                    <Icon name='search' size={20} color={Colors.WHITE}/>
                    <TextInput
                        autoCapitalize='none'
                        autoCorrect={false}
                        style={styles.input}
                        placeholder="Search"
                        placeholderTextColor={Colors.WHITE}
                        value={term}
                        onChangeText={text => setTerm(term)}
                        onEndEditing={() => null}
                        />
                </View>
                <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
                    <Text style={styles.cancelText}>Cancel</Text>
                </TouchableWithoutFeedback>
                <Icon name='camera' size={20} color={Colors.WHITE}/>
            </View>
            <ScrollView>
                <Text style={styles.subHeader}>Recent searches</Text>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.BACKGROUND,
    },
    screenHeader: {
        backgroundColor: 'rgba(25, 25, 25, 0.8)',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        paddingTop: 50,
        paddingBottom: 10
    },
    inputContainer: {
        backgroundColor: Colors.GRAY_DARK,
        width: '75%',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 8,
        padding: 7
    },
    input: {
        fontSize: Typography.FONT_SIZE_18,
        marginLeft: 8
    },
    cancelText: {
        color: Colors.WHITE,
    },
    subHeader: {
        color: Colors.WHITE,
        fontFamily: Typography.FONT_700,
        fontSize: Typography.FONT_SIZE_16,
        marginTop: 25,
    },
})

export default SearchInputScreen;