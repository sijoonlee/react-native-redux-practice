import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'

import TextInputField from '../base-ui/TextInputField';
import { profileActions, selectProfile } from '../store/profileSlice'


function SignIn({}) {
    const profile = useSelector(selectProfile);
    const loadStatus = useSelector((state) => state.profile.loadStatus)
    const dispatch = useDispatch();

    useEffect(() => {
        console.log("DEBUG", loadStatus)
    }, [loadStatus])
    
    return (
        <View>
            { loadStatus === 'hasLoaded'
                ? (<TextInputField
                    initialValue={profile.firstName}
                    onChange={(value) => { dispatch(profileActions.setFirstName(value)); console.log(profile.firstName)}}
                    />
                )
                : <Text>Loading ... </Text>
            }
            
            
        </View>        
    )
}

export default SignIn;