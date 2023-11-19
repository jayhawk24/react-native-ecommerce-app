import { View, Text } from 'react-native'
import React from 'react'
import { TextProps } from 'react-native'

interface props extends TextProps {
    className?: string
}

const Head = (props: props) => {
    return (
        <Text {...props} className={`font-inter-bold text-2xl ${props.className}`}>
            {props.children}
        </Text>
    )
}

export default Head