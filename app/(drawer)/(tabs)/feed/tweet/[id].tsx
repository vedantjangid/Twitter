import { View, Text, ActivityIndicator } from "react-native";
import Tweet from "../../../../../components/Tweet";
import { useQuery } from "@tanstack/react-query";
import { useTweetsApi } from "../../../../../lib/api/tweets";
import { useSearchParams } from "expo-router";

export default function TweetScreen() {
    const { id } = useSearchParams();
    const { getTweet } = useTweetsApi()
    const { data, isLoading, error } = useQuery({
        queryKey: ['tweet', id],
        queryFn: () => getTweet(id as string),
    })


    // if (!tweet) {
    //     return (
    //         <View>
    //             <Text> Tweet not found</Text>
    //         </View>
    //     )
    // }
    if (isLoading) return <ActivityIndicator size={"large"} style={{ marginTop: 250 }} />

    if (error) return <Text>error</Text>

    return (
        <Tweet tweet={data} />
    )
}