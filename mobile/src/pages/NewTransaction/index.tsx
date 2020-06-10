import React, {useRef, useCallback} from 'react';
import {TextInput} from 'react-native';

import {Form} from '@unform/mobile';
import {FormHandles} from '@unform/core';

import {Header, Input} from '../../components';

import {Container, Title} from './styles';

const NewTransaction: React.FC = () => {
   const formRef = useRef<FormHandles>(null);
   const valueInputRef = useRef<TextInput>(null);
   const categoryInputRef = useRef<TextInput>(null);

   const handleAddTransaction = useCallback(() => {}, []);

   return (
      <>
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
            </Form>
         </Container>
      </>
   );
};

export default NewTransaction;
