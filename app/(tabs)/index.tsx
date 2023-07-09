import {StyleSheet , FlatList} from 'react-native';
import Tweet from '../../components/Tweet';
import { View } from '../../components/Themed';
import tweets from '../../assets/data/tweets';

export default function TabOneScreen() {

  return (
    <View style={styles.page}>
      <FlatList data={tweets} renderItem={({item}) => {
        return (
          <Tweet tweet={item} />
      )
        
        } } />
    </View>
   );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    color: 'white',
    width: '100%',
  },
});


