import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Cancel(params) {
  const navigation = useNavigation();
  const selectedService = params;

  return (
    <View style={styles.container}>
      <Text>
        {selectedService.id} - {selectedService.title}
      </Text>
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
  back: {
    color: 'white',
    textAlign: 'center',
    paddingTop: 3,
  },
});
