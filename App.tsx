import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <Image 
        source={{uri: 'https://example.com/your-burger-image.png'}} // Add the URL of the burger image
        style={styles.burgerImage}
      />
      <Text style={styles.title}>Welcome to <Text style={styles.flavorscape}>Flavorscape!</Text></Text>
      <Text style={styles.subtitle}>ENJOY YOUR FOOD</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>GET STARTED</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  burgerImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  title: {
    fontSize: 24,
    marginTop: 20,
    textAlign: 'center',
  },
  flavorscape: {
    color: 'red',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    marginTop: 10,
  },
  button: {
    backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginTop: 20,
    borderRadius: 25,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});
