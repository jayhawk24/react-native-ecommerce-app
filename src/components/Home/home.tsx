import { StatusBar } from "expo-status-bar";
import { Text, View } from 'react-native';
import useLoadedFonts from "../../hooks/useLoadedFonts";
import BannerScreen from "../../screens/Banner/BannerScreen";

export default function Home() {
    const fonts = useLoadedFonts()

    return (
        <BannerScreen />
    );
}