import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from './styles/colors';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" backgroundColor={colors.bakcground} />
      <View style={styles.header}>
        <Image
          source={{
            uri: 'https://avatars.githubusercontent.com/u/83377646?v=4',
          }}
          style={{ width: 40, height: 40, borderRadius: 100, marginRight: 90 }}
        />
        <Text style={styles.titleHeader}>Músicas</Text>
      </View>
      <ScrollView>
        <View style={styles.card}>
          <Image
            source={require('./assets/alok.jpg')}
            style={styles.cardImage}
          />
          <View style={styles.bottomCard}>
            <Text style={styles.singer}>Alok</Text>
            <TouchableOpacity>
              <Text style={styles.follow}>Seguir</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
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
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  titleHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
    color: colors.title,
  },
  card: {
    width: '100%',
    marginBottom: 20,
    paddingHorizontal: 40,
  },
  cardImage: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
  },
  bottomCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  singer: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.title,
  },
  follow: {
    borderColor: '#CCC',
    borderWidth: 1,
    borderRadius: 50,
    paddingVertical: 5,
    paddingHorizontal: 10,
    color: colors.title,
    fontSize: 15,
    fontWeight: 'bold',
  },
});
