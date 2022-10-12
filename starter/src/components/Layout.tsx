import React, { Fragment } from 'react';

import Header from './Header'
import Footer from './Footer'

import { View, StyleSheet } from 'react-native';

type Props = {
    screenSetting: {
        flexDirection: 'column' | 'row'
    };
    children?: JSX.Element | JSX.Element[];
}

function Layout({ screenSetting = { flexDirection: 'row' }, children }: Props) {

    return (
        <View
            style={{
                flexDirection: screenSetting.flexDirection
            }}
        >
            <Header />
            <View>
                <Fragment>
                    {children}
                </Fragment>
            </View>
            <Footer />
        </View>
    )
}

export default Layout;