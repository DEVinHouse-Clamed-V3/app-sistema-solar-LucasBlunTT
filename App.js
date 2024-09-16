import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from './styles/colors';
import { musicas } from './utils/musicas';
import CardMusica from './components/card-musica';

export default function App() {
  const [musicaAtual, setMusicaAtual] = useState(0);
  const qtdMusicas = musicas.length;

  const proximaMusica = () => {
    if (musicaAtual < qtdMusicas - 1) {
      setMusicaAtual(musicaAtual + 1);
    }
  };

  const musicaAnterior = () => {
    if (musicaAtual > 0) {
      setMusicaAtual(musicaAtual - 1);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" backgroundColor={colors.bakcground} />
      <View style={styles.header}>
        <Image
          source={{
            uri: 'https://avatars.githubusercontent.com/u/83377646?v=4',
          }}
          style={{ width: 40, height: 40, borderRadius: 100, marginRight: 87 }}
        />
        <Text style={styles.titleHeader}>Músicas</Text>
        <Text
          style={{
            position: 'absolute',
            right: 180,
            bottom: 6,
            color: 'white',
          }}
        >
          {musicaAtual + 1} de {qtdMusicas}
        </Text>
      </View>

      {/* Mostrando apenas a música atual */}
      <CardMusica
        imgAlbum={musicas[musicaAtual].imgAlbum}
        artista={musicas[musicaAtual].artista}
        duracao={musicas[musicaAtual].duracao}
        key={musicaAtual}
      />

      <View style={styles.controls}>
        <TouchableOpacity onPress={musicaAnterior} disabled={musicaAtual === 0}>
          <MaterialCommunityIcons
            name="skip-previous"
            size={40}
            color={musicaAtual === 0 ? '#555' : colors.title}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={musicaAnterior} disabled={musicaAtual === 0}>
          <MaterialCommunityIcons
            name="play-box"
            size={40}
            color={colors.title}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={proximaMusica}
          disabled={musicaAtual === qtdMusicas - 1}
        >
          <MaterialCommunityIcons
            name="skip-next"
            size={40}
            color={musicaAtual === qtdMusicas - 1 ? '#555' : colors.title}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    flex: 1,
    backgroundColor: colors.bakcground,
  },
  header: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  titleHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.title,
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 50,
    marginTop: 20,
  },
});
