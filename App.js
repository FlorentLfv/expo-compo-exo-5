import { StyleSheet, View, Text } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Text style={styles.text}>Félicitations</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '60%',
    paddingVertical: 50,
    borderWidth: 5,
    borderRadius: 10,
    backgroundColor: 'green',
    elevation: 25
  },
  text: {
    color: 'white',
    textTransform: 'uppercase'
  }
});