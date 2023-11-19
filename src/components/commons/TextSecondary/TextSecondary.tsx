import { View, Text } from 'react-native'
import React from 'react'
import { TextProps } from 'react-native'

interface props extends TextProps {
    className?: string
}

const TextSecondary = (props: props) => {
    return (
        <Text {...props} className={`font-inter-body text-grey ${props.className}`}>
            {props.children}
        </Text>
    )
}

export default TextSecondary 