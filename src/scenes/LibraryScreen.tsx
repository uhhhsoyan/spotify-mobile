import React, { useState, useEffect, useContext, FC } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';
import { Mixins } from '../styles';
import spotifySearch from '../api/spotifySearch';
import { Colors, Typography } from '../styles';

type SpotifyData = Array<Record<string, any>> | null;

const LibraryScreen: FC = () => {
  const { state } = useContext(AuthContext);
  const [music, setMusic] = useState(true);
  const [subHeaderIdx, setSubHeaderIdx] = useState(0);
  const [playlists, setPlaylists] = useState<SpotifyData>(null);
  const [artists, setArtists] = useState<SpotifyData>(null);
  const [albums, setAlbums] = useState<SpotifyData>(null);

  useEffect(() => {
    const search = async () => {
      const { data } = await spotifySearch.get('/browse/featured-playlists', {
        headers: { Authorization: 'Bearer ' + state.token },
        params: {
          locale: 'en_US',
          country: 'US',
        },
      });
      setPlaylists(data.playlists.items);
    };
    search();
  }, [state.token]);

  useEffect(() => {
    const search = async () => {
      const { data } = await spotifySearch.get('/browse/new-releases', {
        headers: { Authorization: 'Bearer ' + state.token },
        params: {
          locale: 'en_US',
          country: 'US',
        },
      });
      setAlbums(data.albums.items);
      setArtists(data.albums.items);
    };
    search();
  }, [state.token]);

  const renderMusicScreen = (
    playlists: SpotifyData,
    artists: SpotifyData,
    albums: SpotifyData) => {
    return (
      <View>
        <View style={styles.subHeader}>
          <Text style={styles.subHeaderText}>Playlists</Text>
          <Text style={styles.subHeaderText}>Artists</Text>
          <Text style={styles.subHeaderText}>Albums</Text>
        </View>
        <ScrollView horizontal pagingEnabled>
          <ScrollView contentContainerStyle={{ width: Mixins.WINDOW_WIDTH, paddingBottom: 140 }}>
            {renderPlaylists(playlists)}
          </ScrollView>
          <ScrollView contentContainerStyle={{ width: Mixins.WINDOW_WIDTH, paddingBottom: 140 }}>
            {renderArtists(artists)}
          </ScrollView>
          <ScrollView contentContainerStyle={{ width: Mixins.WINDOW_WIDTH, paddingBottom: 140 }}>
            {renderAlbums(albums)}
          </ScrollView>
        </ScrollView>
      </View>
    );
  };

  const renderPodcastScreen = () => {
    return (
      <View>
        <View style={styles.subHeader}>
          <Text style={styles.subHeaderText}>Episodes</Text>
          <Text style={styles.subHeaderText}>Downloads</Text>
          <Text style={styles.subHeaderText}>Shows</Text>
        </View>
      </View>
    );
  };

  const renderPlaylists = (items: SpotifyData) => {
    if (!items) {
      return null;
    }
    return items.map((item) => {
      return (
        <TouchableOpacity key={item.id}>
          <View key={item.id} style={styles.listItem}>
            <Image source={{ uri: item.images[0].url }} style={styles.thumbnail} />
            <View style={styles.itemTitles}>
              <Text style={styles.listItemTitle}>{item.name}</Text>
              <Text style={styles.listItemSubtitle}>by {item.owner.id}</Text>
            </View>
          </View>
        </TouchableOpacity>
      );
    });
  };

  const renderArtists = (items: SpotifyData) => {
    if (!items) {
      return null;
    }
    return items.map((item) => {
      return (
        <TouchableOpacity key={item.id}>
          <View key={item.id} style={styles.listItem}>
            <Image source={{ uri: item.images[0].url }} style={styles.thumbnail} />
            <View style={styles.itemTitles}>
              <Text style={styles.listItemTitle}>{item.name}</Text>
              <Text style={styles.listItemSubtitle}>{item.artists[0].name}</Text>
            </View>
          </View>
        </TouchableOpacity>
      );
    });
  };

  const renderAlbums = (items: SpotifyData) => {
    if (!items) {
      return null;
    }
    return items.map((item) => {
      return (
        <TouchableOpacity key={item.id}>
          <View key={item.id} style={styles.listItem}>
            <Image source={{ uri: item.images[0].url }} style={styles.thumbnail} />
            <View style={styles.itemTitles}>
              <Text style={styles.listItemTitle}>{item.name}</Text>
              <Text style={styles.listItemSubtitle}>{item.artists[0].name}</Text>
            </View>
          </View>
        </TouchableOpacity>
      );
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => setMusic(true)}>
          <Text
            style={[styles.headerText, { color: music ? Colors.WHITE : Colors.GRAY_LIGHT_MED }]}
          >
            Music
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setMusic(false)}>
          <Text
            style={[styles.headerText, { color: music ? Colors.GRAY_LIGHT_MED : Colors.WHITE }]}
          >
            Podcasts
          </Text>
        </TouchableOpacity>
      </View>
      {music ? renderMusicScreen(playlists, artists, albums) : renderPodcastScreen()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BACKGROUND,
  },
  header: {
    marginTop: 60,
    marginBottom: 15,
    marginLeft: 15,
    flexDirection: 'row',
  },
  headerText: {
    fontFamily: Typography.FONT_700,
    fontSize: Typography.FONT_SIZE_32,
    color: Colors.WHITE,
    paddingRight: 20,
  },
  subHeader: {
    marginLeft: 15,
    flexDirection: 'row',
    marginBottom: 15,
  },
  subHeaderText: {
    fontFamily: Typography.FONT_700,
    fontSize: Typography.FONT_SIZE_16,
    color: Colors.WHITE,
    paddingRight: 30,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
    paddingLeft: 15,
  },
  thumbnail: {
    height: 70,
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
});

export default LibraryScreen;
