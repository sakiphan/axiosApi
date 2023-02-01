import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const UserCard = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.username}>{props.username}</Text>
      <View style={styles.inner_container}>
        <Text style={styles.name}>{props.name}</Text>
        <Text style={styles.email}>{props.email}</Text>
      </View>
    </View>
  );
};

export default UserCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'gray',
    padding: 10,
    marginVertical: 5,
  },
  email: {
    fontSize: 12,
    fontStyle: 'italic',
    color: 'white',
    marginLeft: 10,
  },
  username: {
    fontWeight: 'bold',
    fontSize: 18,
    
  },
  inner_container: {
    flexDirection: 'row',
    alignİtems: 'center',
  },
});
