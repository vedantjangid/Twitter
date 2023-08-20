import { StyleSheet, FlatList, Pressable, Text } from 'react-native';
import Tweet from '../../../../components/Tweet';
import { View } from '../../../../components/Themed';
import tweets from '../../../../assets/data/tweets';
import { FlashList } from "@shopify/flash-list";

import { Entypo } from '@expo/vector-icons';
import { Link } from 'expo-router';




export default function TabOneScreen() {

  return (
    <View style={styles.page}>

      <FlashList data={tweets} estimatedItemSize={313} renderItem={({ item }) => {
        return (
          <Tweet tweet={item} />
        )
      }} />

      {/* <FlatList data={tweets} renderItem={({item}) => {
        return (
          <Tweet tweet={item} />
      )
        } } /> */}

      <Link href="/new-tweet" style={styles.button} >
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
    backgroundColor: '#1DA1F2',
    position: 'absolute',
    bottom: 20,
    right: 20,
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


