import React from 'react'
import { ButtonProps } from 'react-native'
import Button from '../Button/Button'

interface props extends ButtonProps {
    className?: string
}

const SecondaryButton = (props: props) => {
    return (
        <Button className='' {...props} />
    )
}

export default SecondaryButton 