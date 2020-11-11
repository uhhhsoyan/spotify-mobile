import React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, ScrollView } from 'react-native';
import Icon from '../assets/icons';
import { Colors, Typography } from '../styles';
import { SEARCH_CARDS } from '../data';
import { CardSearchGrid } from '../components/molecules';


const SearchScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles.header}>Search</Text>
                <TouchableWithoutFeedback onPress={() => navigation.navigate('SearchInput')}>
                    <View style={styles.searchBar}>
                        <Icon name='search' size={20} color={Colors.BLACK}/>
                        <Text style={{ marginLeft: 10 }}>Artists, songs, or podcasts</Text>
                        <Icon name='microphone' size={24} color={Colors.BLACK} style={{ marginLeft: 'auto'}}/>
                    </View>
                </TouchableWithoutFeedback>
                <Text style={styles.subHeader}>Your top genres</Text>
                <CardSearchGrid cards={SEARCH_CARDS.filter(card => card.cardType === 'top-genres')} />
                <Text style={styles.subHeader}>Popular podcast categories</Text>
                <CardSearchGrid cards={SEARCH_CARDS.filter(card => card.cardType === 'podcast')} />
                <Text style={styles.subHeader}>Browse all</Text>
                <CardSearchGrid cards={SEARCH_CARDS.filter(card => card.cardType === 'browse-all')} />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.BACKGROUND,
        padding: 15,
        paddingTop: 80,
    },
    header: {
        color: Colors.WHITE,
        fontFamily: Typography.FONT_700,
        fontSize: Typography.FONT_SIZE_32,
        marginBottom: 15,
    },
    subHeader: {
        color: Colors.WHITE,
        fontFamily: Typography.FONT_700,
        fontSize: Typography.FONT_SIZE_16,
        marginTop: 25,
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: Colors.WHITE,
        borderRadius: 10
    }
})

export default SearchScreen;