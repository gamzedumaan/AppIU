import { AntDesign } from '@expo/vector-icons';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import StarRating from 'react-native-star-rating';

import { storeColors } from '../theme';

export default function GameCard({ game }) {
  const [isFavorite, setIsFavorite] = useState(false);
  return (
    <View>
      <Image
        style={{
          height: 200,
          width: 250,
          borderRadius: 20,
          margin: 10,
          padding: 10,
        }}
        source={game.image}
      />
      <TouchableOpacity
        style={{ position: 'absolute', marginLeft: '80%', top: 20 }}
        onPress={() => setIsFavorite(!isFavorite)}>
        <View>
          <AntDesign
            name="heart"
            size={24}
            color={isFavorite ? storeColors.redHeart : storeColors.whiteHeart}
          />
        </View>
      </TouchableOpacity>
      <View style={{ position: 'absolute', marginTop: '48%', left: 20 }}>
        <Text style={styles.titleText}>{game.title}</Text>
        <StarRating
          disabled
          starSize={14}
          containerStyle={{ width: 80 }}
          rating={game.stars}
          maxStars={5}
          emptyStar={require('../assets/images/emptyStar.png')}
          fullStar={require('../assets/images/fullStar.png')}
        />
        <AntDesign name="arrowdown" size={20} color="#fff" />
        <Text style={styles.titleText}>{game.downloads}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  titleText: {
    fontSize: 14,
    fontWeight: '500',
    color: 'black',
  },
});
