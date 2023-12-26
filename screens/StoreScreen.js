import { Ionicons, AntDesign } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';

import GameCard from '../components/GameCard';
import GradientButton from '../components/GradientButton';
import { storeColors } from '../theme';

export default function StoreScreen() {
  const [activeCategory, setActiveCategory] = useState('Action');
  const categories = ['Action', 'Family', 'Puzzle', 'Adventure', 'Racing', 'Education', 'Others'];
  const featured = [
    {
      id: 1,
      title: 'Zooba',
      image: require('../assets/images/zooba.png'),
      downloads: '200k',
      stars: 4,
    },
    {
      id: 2,
      title: 'Subway Surfer',
      image: require('../assets/images/zooba.png'),
      downloads: '5M',
      stars: 4,
    },
    {
      id: 3,
      title: 'Free Fire',
      image: require('../assets/images/zooba.png'),
      downloads: '100M',
      stars: 3,
    },

    {
      id: 4,
      title: "Alto's Adventure",
      image: require('../assets/images/zooba.png'),
      downloads: '20k',
      stars: 4,
    },
  ];
  const games = [
    {
      id: 1,
      title: 'Shadow Fight',
      image: require('../assets/images/clashofclans.png'),
      downloads: '20M',
      stars: 4.5,
    },
    {
      id: 2,
      title: 'Valor Arena',
      image: require('../assets/images/valorArena.png'),
      downloads: '10k',
      stars: 3.4,
    },
    {
      id: 3,
      title: 'Frag',
      image: require('../assets/images/clashofclans.png'),
      downloads: '80k',
      stars: 4.6,
    },
    {
      id: 4,
      title: 'Zooba Wildlife',
      image: require('../assets/images/valorArena.png'),
      downloads: '40k',
      stars: 3.5,
    },
    {
      id: 4,
      title: 'Clash of Clans',
      image: require('../assets/images/clashofclans.png'),
      downloads: '20k',
      stars: 4.2,
    },
  ];
  return (
    <LinearGradient
      style={{ flex: 1 }}
      colors={['rgba(58, 131, 244,0.4)', 'rgba(9, 181, 211, 0.4)']}
      className="w-full flex-1">
      <View style={styles.container}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', top: 10 }}>
          <Ionicons name="menu" size={24} color="black" />
          <Ionicons name="notifications" size={24} color="black" />
        </View>
        <Text style={styles.titleText}>Browse Games</Text>

        {/* Categories*/}
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {categories.map((cat) => {
            if (cat == activeCategory) {
              return <GradientButton key={cat} value={cat} />;
            } else {
              return (
                <TouchableOpacity
                  style={styles.categoriesButton}
                  onPress={() => setActiveCategory(cat)}>
                  <Text style={styles.categoriesText}>{cat}</Text>
                </TouchableOpacity>
              );
            }
          })}
        </ScrollView>

        {/*Featured*/}
        <Text style={styles.featuredText}> Featured Games</Text>
        <ScrollView horizontal showsVerticalScrollIndicator={false}>
          {featured.map((item) => {
            return <GameCard game={item} />;
          })}
        </ScrollView>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={styles.title}> Top Action Games</Text>
          <TouchableOpacity>
            <Text style={styles.text}>See All</Text>
          </TouchableOpacity>
        </View>

        {/* Game*/}
        <ScrollView style={{ height: 350 }} showsVerticalScrollIndicator={false}>
          {games.map((item) => {
            return (
              <View style={{ margin: 5 }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <Image style={styles.image} source={item.image} />
                  <TouchableOpacity style={styles.playButton}>
                    <Text style={{ textAlign: 'center', color: '#fff' }}>Play</Text>
                  </TouchableOpacity>
                </View>

                <View style={{ position: 'absolute', marginLeft: '30%', top: 20 }}>
                  <Text style={{ fontSize: 14, color: 'black', fontWeight: '700' }}>
                    {item.title}
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-evenly',
                      right: 10,
                      top: 5,
                    }}>
                    <Text style={{ fontSize: 12 }}>{item.stars}</Text>
                    <AntDesign name="arrowdown" size={15} color="blue" />
                    <Text style={{ fontSize: 12 }}>{item.downloads}</Text>
                  </View>
                </View>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  titleText: {
    fontSize: 30,
    fontWeight: '800',
    marginTop: 20,
    color: storeColors.text,
  },
  categoriesButton: {
    margin: 10,
    padding: 10,
    backgroundColor: '#FAE7F3',
    borderRadius: 20,
  },
  categoriesText: {
    color: 'black',
    fontWeight: '500',
  },
  featuredText: {
    fontSize: 20,
    fontWeight: '600',
    top: 10,
  },
  title: {
    fontWeight: '700',
    fontSize: 17,
  },
  text: {
    fontWeight: '500',
    fontSize: 17,
    color: 'blue',
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 20,
  },
  playButton: {
    height: 40,
    width: 100,
    backgroundColor: 'blue',
    borderRadius: 50,
    justifyContent: 'center',
  },
});
