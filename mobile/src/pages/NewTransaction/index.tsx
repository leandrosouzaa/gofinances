import React, {useRef, useCallback, useState} from 'react';

import Icon from 'react-native-vector-icons/Feather';
import {
   TextInput,
   KeyboardAvoidingView,
   ScrollView,
   Platform,
} from 'react-native';
import {Form} from '@unform/mobile';
import {FormHandles} from '@unform/core';

import {Header, Input, Button} from '../../components';

import {
   Container,
   Title,
   SelectView,
   SelectItem,
   SelectItemText,
   SelectItemButton,
} from './styles';

const NewTransaction: React.FC = () => {
   const formRef = useRef<FormHandles>(null);
   const valueInputRef = useRef<TextInput>(null);
   const categoryInputRef = useRef<TextInput>(null);
   const [isSelected, setIsSelected] = useState<boolean>(true);
   const [type, setType] = useState<'outcome' | 'income'>('income');

   const handleAddTransaction = useCallback(() => {}, []);

   const handleSelectType = (bool: boolean, value: 'outcome' | 'income') => {
      if (bool === isSelected) {
         return;
      }
      setType(value);
      setIsSelected(!isSelected);
   };

   return (
      <KeyboardAvoidingView
         style={{flex: 1}}
         enabled
         behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
         <ScrollView
            keyboardShouldPersistTaps="handled"
            contentContainerStyle={{flex: 1}}>
            <Header />
            <Container>
               <Form
                  ref={formRef}
                  onSubmit={() => {
                     handleAddTransaction;
                  }}>
                  <Title>Cadastro</Title>

                  <Input
                     name="title"
                     autoCorrect={false}
                     autoCapitalize="none"
                     keyboardType="default"
                     icon="align-center"
                     placeholder="Título da Transação"
                     returnKeyType="next"
                     onSubmitEditing={() => {
                        valueInputRef.current?.focus();
                     }}
                  />

                  <Input
                     ref={valueInputRef}
                     name="value"
                     autoCorrect={false}
                     autoCapitalize="none"
                     keyboardType="number-pad"
                     icon="dollar-sign"
                     placeholder="Preço"
                     returnKeyType="next"
                     onSubmitEditing={() => {
                        categoryInputRef.current?.focus();
                     }}
                  />

                  <SelectView>
                     <SelectItem value={type} isSelected={isSelected}>
                        <SelectItemButton
                           onPress={() => handleSelectType(true, 'income')}>
                           <Icon
                              name="arrow-up-circle"
                              size={20}
                              color="#12A454"
                           />
                           <SelectItemText>Entrada</SelectItemText>
                        </SelectItemButton>
                     </SelectItem>

                     <SelectItem value={type} isSelected={!isSelected}>
                        <SelectItemButton
                           onPress={() => handleSelectType(false, 'outcome')}>
                           <Icon
                              name="arrow-down-circle"
                              size={20}
                              color="#E83F5B"
                           />
                           <SelectItemText>Saída</SelectItemText>
                        </SelectItemButton>
                     </SelectItem>
                  </SelectView>

                  <Input
                     ref={categoryInputRef}
                     name="category"
                     autoCorrect={false}
                     autoCapitalize="words"
                     keyboardType="default"
                     icon="paperclip"
                     placeholder="Categoria"
                     returnKeyType="next"
                     onSubmitEditing={() => {
                        formRef.current?.submitForm();
                     }}
                  />

                  <Button text="Cadastrar" />
               </Form>
            </Container>
         </ScrollView>
      </KeyboardAvoidingView>
   );
};

export default NewTransaction;
