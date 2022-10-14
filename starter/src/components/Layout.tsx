import React, { Fragment } from 'react';
import classNames from 'classnames';

import Header from './Header'
import Footer from './Footer'

import { View, StyleSheet } from 'react-native';
import { styled } from 'nativewind'

type Props = {
    screenSetting?: {
        layout?: {
            className?: string
            style?: string
        },
        content?: {
            className?: string
            style?: string
        }
        header?: {
            className?: string
            style?: string
        },
        footer?: {
            className?: string
            style?: string
        }
        
    };
    children?: JSX.Element | JSX.Element[];
}


function Layout({ screenSetting, children }: Props) {

    return (
        <View
            className={classNames(screenSetting?.layout?.className, screenSetting?.layout?.style)}
        >
            <Header
                className={classNames(screenSetting?.layout?.className, screenSetting?.layout?.style)}
            />
            <View
                className={classNames(screenSetting?.content?.className, screenSetting?.content?.style)}
            >
                {children}
            </View>
            <Footer
                className={classNames(screenSetting?.layout?.className, screenSetting?.layout?.style)}
            />
        </View>
    )
}

const StyledLayout = styled(Layout, "flex-1 items-center justify-center bg-white")

export default StyledLayout;