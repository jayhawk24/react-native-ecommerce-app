import { StatusBar } from "expo-status-bar";
import { Text, View } from 'react-native';
import useLoadedFonts from "../../hooks/useLoadedFonts";

export default function Home() {
    const fonts = useLoadedFonts()

    return (
        <View className="flex-1 items-center justify-center">
            <Text className="font-interBold">LAZA</Text>
            <StatusBar style="auto" />
        </View>
    );
}