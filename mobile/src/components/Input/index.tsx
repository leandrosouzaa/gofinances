import React, {
   useEffect,
   useRef,
   useImperativeHandle,
   forwardRef,
   useState,
   useCallback,
} from 'react';

import {TextInputProps} from 'react-native';
import {useField} from '@unform/core';

import {Container, TextInput, Icon, Error} from './styles';

interface InputProps extends TextInputProps {
   name: string;
   icon: string;
}

interface InputValueReference {
   value: string;
}

interface InputRef {
   focus(): void;
}

const Input: React.RefForwardingComponent<InputRef, InputProps> = (
   {name, icon, ...rest},
   ref,
) => {
   const inputElementRef = useRef<any>(null);

   const [isFocused, setIsFocused] = useState(false);
   const [isFilled, setIsFilled] = useState(false);

   const {registerField, defaultValue = '', fieldName, error} = useField(name);
   const inputValueRef = useRef<InputValueReference>({value: defaultValue});

   useImperativeHandle(ref, () => ({
      focus() {
         inputElementRef.current.focus();
      },
   }));

   const handleInputFocus = useCallback(() => {
      setIsFocused(true);
   }, []);

   const handleInputBlur = useCallback(() => {
      setIsFocused(false);

      setIsFilled(!!inputValueRef.current.value);
   }, []);

   useEffect(() => {
      registerField<string>({
         name: fieldName,
         ref: inputValueRef.current,
         path: 'value',
         setValue(asda: any, value) {
            inputValueRef.current.value = value;
            inputElementRef.current.setNativeProps({text: value});
         },
         clearValue() {
            inputValueRef.current.value = '';
            inputElementRef.current.clear();
         },
      });
   }, [fieldName, registerField]);

   return (
      <Container isErrored={!!error} isFocused={isFocused}>
         {icon && (
            <Icon
               name={icon}
               size={18}
               color={isFocused || isFilled ? '#5636D3' : '#969CB3'}
            />
         )}
         <TextInput
            ref={inputElementRef}
            keyboardAppearance="dark"
            placeholderTextColor="#969CB3"
            defaultValue={defaultValue}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            onChangeText={(value) => {
               inputValueRef.current.value = value;
            }}
            {...rest}
         />

         {error && (
            <Error>
               <Icon
                  style={{marginRight: 0}}
                  name="alert-circle"
                  color="#E83F5B"
                  size={18}
               />
            </Error>
         )}
      </Container>
   );
};

export default forwardRef(Input);
