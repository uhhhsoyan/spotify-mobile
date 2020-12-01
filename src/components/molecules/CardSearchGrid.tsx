import React, { FC } from 'react';
import { View, StyleSheet } from 'react-native';
import { CardSearch } from '../atoms';
import { Card } from '../../data';

type Props = {
  cards: Array<Card>
};

const renderCards = (cards: Array<Card>) => {
  return cards.map((card, idx: number) => {
    <CardSearch key={idx} text={card.cardTitle} color={card.cardColor} />;
  });
};

const CardSearchGrid: FC<Props> = ({ cards }) => {
  return <View style={styles.gridContainer}>{renderCards(cards)}</View>;
};

const styles = StyleSheet.create({
  gridContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
  },
});

export default CardSearchGrid;
