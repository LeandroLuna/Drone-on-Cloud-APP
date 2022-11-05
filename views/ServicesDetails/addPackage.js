import { useNavigation } from '@react-navigation/native';
import { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { PackagesContext } from '../../controllers/PackagesContext';

export default function AddPackage(params) {
  const navigation = useNavigation();
  const selectedService = params;
  const { addPackage } = useContext(PackagesContext);

  return (
    <View style={styles.container}>
      <Text>
        {selectedService.id} - {selectedService.title}
      </Text>
      <TouchableOpacity onPress={() => addPackage()}>
        <Text>Add item</Text>
      </TouchableOpacity>
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
