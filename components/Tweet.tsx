import { Image, StyleSheet, Text, View } from 'react-native';


const Tweet = ({tweet}) => {
  
  return (
    <View style={styles.container}>
    <Image  src={tweet.user.image} style={styles.userImage} />
    <View style={styles.tweetHeaderContainer}>
    <Text style={styles.name}>{tweet.user.name}</Text>
   <Text style={styles.content}>{tweet.content}</Text>
    </View>
   
  </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flexDirection:'row',
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
      fontSize: 16,
      lineHeight: 16 * 1.5,
    },
  
  
   
  });

export default Tweet