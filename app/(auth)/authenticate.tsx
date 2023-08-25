import {
    View,
    Text,
    TextInput,
    Pressable,
    StyleSheet,
    Alert,
} from 'react-native';
import React, { useState } from 'react';
import { useSearchParams } from 'expo-router';


const Authenticate = () => {

    const [code, setCode] = useState('')
    const { email } = useSearchParams()

    const onConfirm = () => {
        console.warn('Sign in with the code that was sent to your mail', code, email)
        // console.warn('Your code was ', code)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Enter the Authentication code</Text>

            <TextInput
                placeholder="Email"
                value={code}
                onChangeText={setCode}
                style={styles.input}

            />


            <Pressable style={styles.button} onPress={onConfirm} >
                <Text style={styles.buttonText}>Confirm</Text>
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






export default Authenticate;