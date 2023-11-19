import { View, Text } from 'react-native'
import React from 'react'
import Head from '../../components/commons/Head/Head'
import TextSecondary from '../../components/commons/TextSecondary/TextSecondary'
import SecondaryButton from '../../components/commons/SecondaryButton/SecondaryButton'
import PrimaryButton from '../../components/commons/PrimaryButton/PrimaryButton'

const BannerScreen = () => {
    return (
        <View className='flex-1 bg-primary'>
            <View className='bg-white m-3 rounded-xl'>
                <Head className='text-center'>
                    Look Good, Feel Good
                </Head>
                <TextSecondary className='mx-6 my-2'>
                    Create your individual & unique style and look amazing everyday.
                </TextSecondary>
                <View>
                    <SecondaryButton title='Men' />
                    <PrimaryButton title='Women' />
                </View>
            </View>
            <Text>
                banner
            </Text>
        </View>
    )
}

export default BannerScreen