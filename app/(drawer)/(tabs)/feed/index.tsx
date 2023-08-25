import { StyleSheet, FlatList, Pressable, Text, ActivityIndicator } from 'react-native';
import Tweet from '../../../../components/Tweet';
import { View } from '../../../../components/Themed';
// import tweets from '../../../../assets/data/tweets';
import { FlashList } from "@shopify/flash-list";
import { useState } from 'react';
import { useEffect } from 'react';
import { listTweets } from '../../../../lib/api/tweets';
import { useQuery } from '@tanstack/react-query';

import { Entypo } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { TweetType } from '../../../../types';





export default function FeedScreen() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['tweets'],
    queryFn: listTweets,
  })


  // const [tweets, setTweets] = useState()

  // useEffect(() => {
  //   const fetchTweets = async () => {
  //     const newTweets = await listTweets()
  //     setTweets(newTweets)
  //   }
  //   fetchTweets()


  // }, [])


  if (isLoading) return <ActivityIndicator style={{ marginTop: 250 }} size="large" />
  if (error) return <Text style={{
    color: '#000000', // A softer, complementary color
    textAlign: 'center',
    marginTop: 200,
    fontSize: 24,
    fontWeight: 'bold',
    fontStyle: 'italic',
    textShadowColor: 'rgba(0, 0, 0, 0.1)', // A subtle shadow with less contrast
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  }}>
    {error.message}
  </Text>







  return (
    <View style={styles.page}>

      <FlashList data={data} estimatedItemSize={313} renderItem={({ item }) => {
        return (
          <Tweet tweet={item as TweetType} />
        )
      }} />

      {/* <FlatList data={tweets} renderItem={({item}) => {
        return (
          <Tweet tweet={item} />
      )
        } } /> */}

      <Link href="/new-tweet" style={styles.button}>

        <Entypo name="feather" size={24} color="white" />

      </Link>


    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    color: 'white',
    width: '100%',
  },
  button: {
    backgroundColor: 'black',
    position: 'absolute',
    bottom: 20,
    left: '50%',
    transform: [{ translateX: -25 }],
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: "#000",

    textAlign: 'center',


    shadowOffset: {
      width: 0,
      height: 4,
    },

    shadowOpacity: 0.30,
    shadowRadius: 4.65,

    elevation: 8,
    lineHeight: 50,
    overflow: 'hidden',

  },

});


