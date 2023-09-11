import React, { useState } from "react"; 
import { View, Text, TextInput, Botton, StyleSheet} from "react-native";

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPasswork] = useState('');

    const mudarLogin = () => {
        console.log(`Login com email: ${email} e senha: ${password}`);
    };

    return(
        <View>
            <Text>Tela de Login</Text>
            <TextInput

            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    
    },
});