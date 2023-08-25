import {
    View,
    Text,
    TextInput,
    Pressable,
    StyleSheet,
    Alert,
} from 'react-native';
import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import { login } from '../../lib/api/auth';


const SignIn = () => {

    const [email, setEmail] = useState('')
    const router = useRouter()

    const onSignInPress = async () => {
        console.warn('Sign in', email)
        try {
            await login({ email })
            router.push({ pathname: 'authenticate', params: { email } })
        } catch (error) {
            Alert.alert('Error', error.message)
        }


    }

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Sign in or create an account</Text>

            <TextInput
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                style={styles.input}

            />


            <Pressable style={styles.button} onPress={onSignInPress} >
                <Text style={styles.buttonText}>Sign in</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F8F8',
        padding: 24,
        justifyContent: 'space-between', // Distribute space evenly between children
    },
    label: {
        fontSize: 28,
        marginVertical: 10,
        paddingTop: 30,
        color: '#333',
        textAlign: 'center',
        marginTop: 10, // Push the label to the top
    },
    error: {
        fontSize: 16,
        marginVertical: 10,
        color: 'red',
        textAlign: 'center',
    },
    input: {
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 14,
        fontSize: 20,
        borderRadius: 10,
        marginBottom: 20, // Some space between input and button
    },
    button: {
        backgroundColor: '#050A12',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        borderRadius: 10,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
    },
});






export default SignIn;