import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function Search() {
  return (
    <View style={styles.container}>
      <Text>Faça aqui a pesquisa de um pedido</Text>
      <TextInput
        style={styles.input}
        placeholder='Informe o número do pedido'
        onSubmitEditing={(event) => console.log(event.nativeEvent.text)}
      ></TextInput>
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

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
