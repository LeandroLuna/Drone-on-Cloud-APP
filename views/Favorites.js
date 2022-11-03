import { StyleSheet, Text, View } from 'react-native';

export default function Favorites() {
  return (
    <View style={styles.container}>
      <Text>Lista de pacotes favoritados</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'cornflowerblue',
  },
});
