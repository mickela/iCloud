import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { WebView } from 'react-native-webview';

export default function App() {
    const WV = () => <WebView source={{ uri: 'https://icloud.com' }} renderLoading={() => <ActivityIndicator size={'large'} color={'#000'} />} />;

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar style="auto" />
            <WV />
        </SafeAreaView>
    );
}