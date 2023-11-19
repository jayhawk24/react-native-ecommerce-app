import { View, Text } from 'react-native'
import React from 'react'
import { ButtonProps } from 'react-native'

interface props extends ButtonProps {
    className?: string
}

const Button = (props: props) => {
    return (
        <Button className={`rounded-lg font-inter-semibold ${props.className}`} {...props} />
    )
}

export default Button 