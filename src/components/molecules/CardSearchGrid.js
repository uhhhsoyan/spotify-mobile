import React from 'react';
import { View, StyleSheet } from 'react-native';
import { CardSearch } from '../atoms';

const CardSearchGrid = ({cards}) => {
    const renderCards = (cards) => {
        return cards.map((card, idx) => <CardSearch key={idx} text={card.cardTitle} color={card.cardColor} />);
    }

    return (
        <View style={styles.gridContainer}>
            {renderCards(cards)}
        </View>
    )
}

const styles = StyleSheet.create({
    gridContainer: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 25,
    },
})

export default CardSearchGrid;