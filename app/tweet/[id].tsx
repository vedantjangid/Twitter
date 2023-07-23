import { View, Text } from "react-native";
import Tweet from "../../components/Tweet";
import tweets from "../../assets/data/tweets";
import { useSearchParams } from "expo-router";

export default function TweetScreen() {
    const { id } = useSearchParams();

    const tweet = tweets.find((tweet) => tweet.id === id);
    if (!tweet) {
        return (
            <View>
                <Text> Tweet not found</Text>
            </View>
        )
    }

    return (
        <Tweet tweet={tweet} />
    )
}