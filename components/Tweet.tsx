import { Image, StyleSheet, Text, View } from 'react-native';
import { TweetType } from '../types';
import { Entypo } from '@expo/vector-icons';
import tweets from '../assets/data/tweets';
import React from 'react';


type IconButtonProps = {
  icon: React.ComponentProps<typeof Entypo>['name'];
  text?: string | number;
}

const IconButton = ({ icon, text }: IconButtonProps) => {
  return (


    <View style={{ flexDirection: 'row', alignItems: 'center' }} >
      <Entypo name={icon} size={16} color="grey" />
      <Text style={styles.font}>{text}</Text>
    </View>
  )
}

type TweetProps = {
  tweet: TweetType;
}

const Tweet = ({ tweet }: TweetProps) => {

  return (
    <>
      <View style={styles.container}>
        {/* <Image  src={tweet.user.image} style={styles.userImage} /> */}
        <Image source={{ uri: tweet.user.image }} style={styles.userImage} />

        <View style={styles.tweetHeaderContainer}>

          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.name}>{tweet.user.name}</Text>
            <Text style={styles.username}>@{tweet.user.username}</Text>
            <Text style={styles.createdAt}>2h ago</Text>
            <Entypo name="dots-three-horizontal" size={16} color="grey" style={styles.menu} />
          </View>


          <Text style={styles.content}>{tweet.content}</Text>

          {/* <Image style={styles.image} src={tweet.image} /> */}

          {tweet.image && <Image style={styles.image} source={{ uri: tweet.image }} />}
          <View style={styles.footer}>

            <IconButton icon={'heart'} text={tweet.numberOfLikes} />
            <IconButton icon={'chat'} text={tweet.numberOfComments} />
            <IconButton icon={'retweet'} text={tweet.numberOfRetweets} />
            <IconButton icon={'bar-graph'} text={tweet.impressions || 0} />
            <IconButton icon={'share'} />

            {/* <View style={{ flexDirection: 'row', alignItems: 'center' }} >
              <Entypo name="retweet" size={16} color="grey" />
              <Text style={styles.font}>{tweet.numberOfRetweets}</Text>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center' }} >
              <Entypo name="heart" size={16} color="grey" />
              <Text style={styles.font}>{tweet.numberOfLikes}</Text>
            </View> */}


          </View>


        </View>

      </View>

    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: 'lightgrey',
    backgroundColor: 'white',


  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  tweetHeaderContainer: {
    flex: 1,
    marginLeft: 10,
  },
  name: {
    fontWeight: '600',
  },
  content: {
    marginTop: 5,

    lineHeight: 16 * 1.5,
  },
  image: {
    marginTop: 10,
    width: '100%',
    aspectRatio: 16 / 9,
    borderRadius: 15,
    overflow: 'hidden',
  },
  username: {
    color: 'grey',
    opacity: 0.5,
    marginLeft: 5,

  },

  createdAt: {
    marginLeft: 5,
    opacity: 0.5,
    color: 'grey',


  },
  menu: {
    marginLeft: 'auto',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  font: {
    marginLeft: 5,
    color: 'grey',
    opacity: 0.5,
    fontSize: 12,

  }



});

export default Tweet