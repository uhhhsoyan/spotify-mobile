import React, { FC } from 'react';
import { View, StyleSheet } from 'react-native';
import { CardSearch } from '../atoms';

type Props = {
  cards: Array<string>;  // array of Cards...how do I define and import a 'Card type'
};

const CardSearchGrid: FC<Props> = ({ cards }) => {
  // why is cards in below line not being recognized from props?
  const renderCards = (cards) => {
    return cards.map((card, idx: number) => {
      <CardSearch key={idx} text={card.cardTitle} color={card.cardColor} />;
    });
  };

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