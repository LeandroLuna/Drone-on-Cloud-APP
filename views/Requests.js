import { StyleSheet, Text, View } from 'react-native';

export default function Requests() {
  return (
    <View style={styles.container}>
      <Text>Lista de serviços solicitados.</Text>
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
