import { Text, View } from "react-native";
import Layout from "./src/components/Layout/_layout";

import React from 'react'

type Props = {}

const App = (props: Props) => {
  return (
    <View className="flex-1 items-center justify-center bg-cyan-400">
      <Text className="font-interBold">Test</Text>
      <Layout />
    </View>
  )
}

export default App 