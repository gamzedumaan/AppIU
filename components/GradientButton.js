import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function GradientButton(props) {
  return (
    <LinearGradient colors={['#FAE7F3', 'rgba(58, 131, 244,0.9)']} style={{ borderRadius: 50 }}>
      <TouchableOpacity style={styles.categoriesButton}>
        <Text style={styles.categoriesText}>{props.value}</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  categoriesButton: {
    margin: 10,
    padding: 10,
    backgroundColor: 'rgba(58, 131, 244,0.9)',
    borderRadius: 20,
  },
  categoriesText: {
    color: 'white',
    fontWeight: '500',
  },
});
