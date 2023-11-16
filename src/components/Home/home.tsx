import { StatusBar } from "expo-status-bar";
import { Text, View } from 'react-native';
import useLoadedFonts from "../../hooks/useLoadedFonts";

export default function Home() {
    const fonts = useLoadedFonts()

    return (
        <View className="flex-1 items-center justify-center bg-white">
            <View className="flex-1 bg-red-600 text-right">
                <Text>Demo</Text>
            </View>
            <Text className="font-interBold">font-BOLD</Text>
            <StatusBar style="auto" />
        </View>
    );
}