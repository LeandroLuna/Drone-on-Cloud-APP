import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';

export default function Search(params) {
  const navigation = useNavigation();
  const selectedService = params;

  return (
    <View style={styles.container}>
      <Text>
        {selectedService.id} - {selectedService.title}
      </Text>
      <TextInput
        style={styles.input}
        placeholder='Informe o número do pedido'
        onSubmitEditing={(event) => console.log(event.nativeEvent.text)}
      ></TextInput>
      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.back}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'cornflowerblue',
  },
  button: {
    backgroundColor: 'red',
    width: 100,
    height: 25,
    borderRadius: 10,
    borderColor: 'white',
    borderWidth: 1,
  },
  input: {
    height: 40,
    width: 220,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  back: {
    color: 'white',
    textAlign: 'center',
    paddingTop: 3,
  },
});
