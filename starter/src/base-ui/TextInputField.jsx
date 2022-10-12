import React, { useState } from 'react';
import { TextInput, StyleSheet } from 'react-native';

function TextInputField({id, className, name, initialValue, placeholder, placeholderTextColor, onChange, onFocus, onBlur, ...otherProps}) {
    
    const [ value, setValue ] = useState(initialValue ?? '')

    function handleChange(value) {
        setValue(value)
        onChange?.(value)
    }

    function handleFocus(event) {
        onFocus?.(event?.target?.value)
    }

    function handleBlur() {
        onBlur?.() // on Blur, value will be undefined
    }

    return (
        <TextInput
            id={id}
            style={styles.input}
            className={className}
            name={name}

            value={value}
            placeholder={placeholder}
            placeholderTextColor={placeholderTextColor}

            autoComplete={false}
            //autoCapitalize={}

            onChangeText={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}

            {...otherProps}
        />
    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        width: 100
    }
})

export default TextInputField
