import {
    useFonts,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold
} from '@expo-google-fonts/inter'

export default function useLoadedFonts() {
    const [fontsLoaded] = useFonts({
      Inter_300Light,
      Inter_400Regular,
      Inter_500Medium,
      Inter_700Bold,
    });
    return fontsLoaded;
  }