//   import { SplashScreen, Stack } from 'expo-router'
import { NativeWindStyleSheet } from 'nativewind'
import Home from '../Home/home'
import useLoadedFonts from '../../hooks/useLoadedFonts'
import Splash from '../../screens/Splash/SplashScreen'

// For Web platform
NativeWindStyleSheet.setOutput({
    default: 'native',
})
export default function Layout() {

    const fontsLoaded = useLoadedFonts()

    if (!fontsLoaded) {
        return <Splash />
    }

    // Render the children routes now that all the assets are loaded.
    // return <Stack />
    return <Home />
}