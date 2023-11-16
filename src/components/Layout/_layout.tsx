//   import { SplashScreen, Stack } from 'expo-router'
import { NativeWindStyleSheet } from 'nativewind'
import Home from '../Home/home'
import useLoadedFonts from '../../hooks/useLoadedFonts'

// For Web platform
NativeWindStyleSheet.setOutput({
    default: 'native',
})
export default function Layout() {

    const fontsLoaded = useLoadedFonts()

    if (!fontsLoaded) {
        //   return <SplashScreen />
        return null
    }

    // Render the children routes now that all the assets are loaded.
    // return <Stack />
    return <Home />
}