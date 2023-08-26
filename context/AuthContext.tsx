import { useRouter, useSegments } from 'expo-router';
import { PropsWithChildren, createContext, useState, useContext, useEffect } from 'react';
import { Alert } from 'react-native';
import * as SecureStore from 'expo-secure-store';

const AuthContext = createContext({});

const AuthContextProvider = ({ children }: PropsWithChildren) => {

    const [authToken, setAuthToken] = useState<string | null>(null);
    const segments = useSegments();
    const router = useRouter();

    useEffect(() => {
        const isAuthGroup = segments[0] === '(auth)';

        if (!authToken && segments[0] !== '(auth)') {
            // Alert.alert('Not loggedin', '', [

            //     { text: 'Login', onPress: () => console.log('OK Pressed') },
            // ])
            router.push('/signin');
        }
        if (authToken && isAuthGroup) {
            router.push('/')
        }

    }, [authToken, segments]);

    useEffect(() => {
        const getAuthToken = async () => {
            const authToken = await SecureStore.getItemAsync('authToken');

            if (authToken) {
                setAuthToken(authToken);
                // router.push('/')
            }
        };
        getAuthToken();
    }, []);


    const updateAuthToken = async (newAuthToken: string) => {
        await SecureStore.setItemAsync('authToken', newAuthToken);
        setAuthToken(newAuthToken);
    };

    const removeAuthToken = async () => {
        await SecureStore.deleteItemAsync('authToken');
        setAuthToken('null');
    };


    return <AuthContext.Provider value={{ authToken, updateAuthToken, removeAuthToken }}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;


export const useAuth = () => useContext(AuthContext)