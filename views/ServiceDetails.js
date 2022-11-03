import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import addPackage from './ServicesDetails/addPackage';

export default function ServiceDetails() {
  const navigation = useNavigation();
  const selectedService = navigation.getState().routes[1].params;

  switch (selectedService.id) {
    case 1:
      return addPackage(selectedService);
      break;
    case 2:
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
      break;
    case 3:
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
      break;
    default:
      return (
        <View style={styles.container}>
          <Text>Serviço indisponivel..</Text>
          <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
            <Text style={styles.back}>Voltar</Text>
          </TouchableOpacity>
        </View>
      );
      break;
  }
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
