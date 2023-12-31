import { Link, useRouter } from "expo-router";
import { View } from "../components/Themed";
import { StyleSheet, Text, Image, TextInput, Pressable, ActivityIndicator } from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute, } from "@react-navigation/native";
import { useTweetsApi } from "../lib/api/tweets";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getUser } from "../lib/api/user";







const user = {
    id: 'u1',
    username: 'Vedant01',
    name: 'Vedant',
    image:
        'https://i.pinimg.com/564x/d4/19/00/d41900d6d2f0ce97a62ac7785de9fcdd.jpg',
}

export default function NewTweet() {

    const [tweet, setTweet] = useState('');
    const router = useRouter();
    const { createTweet } = useTweetsApi()

    const queryClient = useQueryClient()

    const { mutateAsync, isLoading, error, isError } = useMutation({
        mutationFn: createTweet,
        onSuccess: (data) => {
            queryClient.setQueriesData(['tweets'], (oldTweets: any) => {
                return [data, ...oldTweets]

            })
        }

    }
    )

    const onTweetPress = async () => {
        try {
            await mutateAsync({ content: tweet })
            setTweet('')
            // const userData = await getUser('jangidvedant01@gmail.com')
            // console.log('User: ', userData)
            router.back()
        } catch (error) {
            console.log('Error: ', error.message)
        }


    }






    return (

        <SafeAreaView style={styles.container}>
            <View style={styles.buttonContainer}>
                <Link href={'../'} >
                    <Text style={styles.cancel}>Cancel</Text>
                </Link>
                {isLoading && <ActivityIndicator />}
                <Pressable onPress={onTweetPress} style={styles.tweet}>
                    <Text style={{ color: 'white', fontWeight: '600' }} >Tweet</Text>
                </Pressable>

            </View>


            <View style={styles.inputContainer}>
                <Image src={user.image} style={styles.image} />
                <TextInput
                    onChange={
                        (newValue) => {
                            setTweet(newValue.nativeEvent.text)
                        }}
                    value={tweet}
                    multiline={true}
                    numberOfLines={3}
                    style={styles.input}
                    placeholder={"What's happening?"}
                />
                {isError && <Text style={{ color: 'red' }}>Error</Text>}
            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: 'white',
        flex: 1,

    },
    title: {

    },
    separator: {

    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 50,
        aspectRatio: 1,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    input: {
        flex: 1,
        marginLeft: 10,
    },
    cancel: {
        alignSelf: 'flex-end',

        fontSize: 16,
        color: '#1DA1F2',
    },
    buttonContainer: {
        marginTop: 5,
        marginBottom: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    tweet: {
        backgroundColor: '#1DA1F2',
        borderRadius: 50,
        padding: 10,
        paddingHorizontal: 20,


    },




});
