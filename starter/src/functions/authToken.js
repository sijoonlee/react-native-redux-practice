import AsyncStorage from '@react-native-async-storage/async-storage'

import fetchJSON from './fetchJSON'


let _authToken = null

async function loadAuthToken() {
    if (_authToken == null) {
        _authToken = await AsyncStorage.getItem('authToken')
    }
    return _authToken;
}

function saveAuthToken(authToken) {
    return AsyncStorage.setItem('authToken', authToken)
}

async function fetchAuthToken() {
    const { authToken } = await fetchJSON({ url: '', method: '', requestBody: {} })

    if (authToken == null) {
        throw new Error('authToken was fetched, but it was null/undefined')
    }

    await saveAuthToken(authToken);
    
}

export {
    loadAuthToken,
    fetchAuthToken
}
