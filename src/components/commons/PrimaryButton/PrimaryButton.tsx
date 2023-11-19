import React from 'react'
import { ButtonProps } from 'react-native'
import Button from '../Button/Button'

interface props extends ButtonProps {
    className?: string
}

const PrimaryButton = (props: props) => {
    return (
        <Button className='bg-primary' {...props} />
    )
}

export default PrimaryButton 