import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Task = (props) => {
  
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
      <View style={styles.circular}>
      
      <TouchableOpacity >
          <View >
          
          </View>
        </TouchableOpacity>
        </View>      
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    paddingRight: 30
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: '#55BCF6',
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: {
    maxWidth: '100%',
    paddingRight: 30
  },
  circular: {
    width: 20,
    height: 20,
    borderColor: '#5200cc',
    borderWidth: 2,
    borderRadius: 10,
    paddingRight:5,
    backgroundColor: '#f0e6ff'
  },

});

export default Task;