import React, { useState, useEffect, useContext, FC } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ScrollView,
  TextInput,
} from 'react-native';
import Icon from '../assets/icons';
import { Context as AuthContext } from '../context/AuthContext';
import spotifySearch from '../api/spotifySearch';
import { Colors, Typography } from '../styles';
import { SearchInputScreenNavigationProp } from '../nav/types';

type Props = {
  navigation: SearchInputScreenNavigationProp;
}

const SearchInputScreen: FC<Props> = ({ navigation }) => {
  const { state, selectSong } = useContext(AuthContext);
  const [term, setTerm] = useState('');
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  const [results, setResults] = useState(null);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedTerm(term);
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, [term]);

  useEffect(() => {
    const search = async () => {
      const { data } = await spotifySearch.get('/search', {
        headers: { Authorization: 'Bearer ' + state.token },
        params: {
          q: debouncedTerm,
          type: 'track',
          limit: 10,
        },
      });
      setResults(data.tracks.items);
    };
    debouncedTerm === '' ? setResults(null) : search();
  }, [debouncedTerm]);

  const renderResults = (results: SearchResponse) => {
    if (!results) {
      return <Text style={styles.subHeader}>Recent searches</Text>;
    } else {
      return results.map((result) => {
        return (
          <TouchableOpacity
            key={result.id}
            onPress={() => selectSong(result.id, state.token)}
          >
            <View key={result.id} style={styles.listItem}>
              <Image source={{ uri: result.album.images[0].url }} style={styles.thumbnail} />
              <View style={styles.itemTitles}>
                <Text style={styles.listItemTitle}>{result.name}</Text>
                <Text style={styles.listItemSubtitle}>Song &middot; {result.artists[0].name}</Text>
              </View>
            </View>
          </TouchableOpacity>
        );
      });
    }
  };

  const renderMoreSearch = () => {
    if (!results) {
      return null;
    } else {
      return (
        <View>
          <TouchableOpacity>
            <View style={styles.moreSearchRow}>
              <Text style={styles.moreSearchText}>See all artists</Text>
              <Icon name="arrowForward" size={24} color={Colors.GRAY_LIGHT} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.moreSearchRow}>
              <Text style={styles.moreSearchText}>See all songs</Text>
              <Icon name="arrowForward" size={24} color={Colors.GRAY_LIGHT} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.moreSearchRow}>
              <Text style={styles.moreSearchText}>See all playlists</Text>
              <Icon name="arrowForward" size={24} color={Colors.GRAY_LIGHT} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.moreSearchRow}>
              <Text style={styles.moreSearchText}>See all albums</Text>
              <Icon name="arrowForward" size={24} color={Colors.GRAY_LIGHT} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.moreSearchRow}>
              <Text style={styles.moreSearchText}>See all podcasts & shows</Text>
              <Icon name="arrowForward" size={24} color={Colors.GRAY_LIGHT} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.moreSearchRow}>
              <Text style={styles.moreSearchText}>See all episodes</Text>
              <Icon name="arrowForward" size={24} color={Colors.GRAY_LIGHT} />
            </View>
          </TouchableOpacity>
        </View>
      );
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.screenHeader}>
        <View style={styles.inputContainer}>
          <Icon name="search" size={20} color={Colors.WHITE} />
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            autoFocus={true}
            style={styles.input}
            placeholder="Search"
            placeholderTextColor={Colors.WHITE}
            value={term}
            onChangeText={(text) => setTerm(text)}
            onEndEditing={() => null}
          />
        </View>
        <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
          <Text style={styles.cancelText}>Cancel</Text>
        </TouchableWithoutFeedback>
        <Icon name="camera" size={20} color={Colors.WHITE} />
      </View>
      <ScrollView contentContainerStyle={{ padding: 15 }}>
        {renderResults(results)}
        {renderMoreSearch()}
      </ScrollView>
    </View>
  );
};

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
    paddingBottom: 10,
  },
  inputContainer: {
    backgroundColor: Colors.GRAY_DARK,
    width: '75%',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    padding: 7,
  },
  input: {
    fontSize: Typography.FONT_SIZE_18,
    color: Colors.WHITE,
    marginLeft: 8,
  },
  cancelText: {
    color: Colors.WHITE,
  },
  subHeader: {
    color: Colors.WHITE,
    fontFamily: Typography.FONT_700,
    fontSize: Typography.FONT_SIZE_16,
    marginTop: 5,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  thumbnail: {
    height: 60,
    width: 'auto',
    aspectRatio: 1,
  },
  itemTitles: {
    flexDirection: 'column',
    marginLeft: 15,
  },
  listItemTitle: {
    color: Colors.WHITE,
    fontFamily: Typography.FONT_700,
    fontSize: Typography.FONT_SIZE_16,
    paddingBottom: 5,
  },
  listItemSubtitle: {
    color: Colors.GRAY_LIGHT,
    fontFamily: Typography.FONT_500,
    fontSize: Typography.FONT_SIZE_14,
  },
  moreSearchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
    paddingRight: 5,
  },
  moreSearchText: {
    color: Colors.WHITE,
    fontFamily: Typography.FONT_600,
    fontSize: Typography.FONT_SIZE_16,
  },
});

export default SearchInputScreen;
