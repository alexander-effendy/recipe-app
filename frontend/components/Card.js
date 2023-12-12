import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const EventCard = ({ }) => {
  return (
    <TouchableOpacity onPress={() => console.log('press')} style={styles.card}>
      {/* <Image 
        source={{ uri: `data:image/jpeg;base64,${image}` }}
        style={styles.image}
      /> */}
			<View
				style={styles.image}
			>
				<Text>Yes</Text>
			</View>
      <View style={styles.info}>
        <Text style={styles.title}>title</Text>
        <Text style={styles.location}>location</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'rgb(26, 26, 26)',
    borderRadius: 8,
    overflow: 'hidden',
    marginVertical: 10,
    borderWidth: 0.2,
    borderColor: 'white',
  },
  image: {
    width: '100%',
    height: 200,
  },
  info: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white'
  },
  location: {
    fontSize: 12,
    color: 'lightgrey',
  },
});

export default EventCard;
