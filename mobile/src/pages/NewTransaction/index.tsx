/* eslint-disable react-native/no-inline-styles */
import React, {useRef, useCallback, useState} from 'react';

import * as Yup from 'yup';
import {
   TextInput,
   KeyboardAvoidingView,
   ScrollView,
   Platform,
   Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {Form} from '@unform/mobile';
import {FormHandles} from '@unform/core';
import {useNavigation} from '@react-navigation/native';

import api from '../../services/api';
import getValidationErros from '../../utils/getValidationErros';
import {Header, Input, Button} from '../../components';

import {
   Container,
   Title,
   SelectView,
   SelectItem,
   SelectItemText,
   SelectItemButton,
} from './styles';

interface TransactionFormData {
   title: string;
   value: number;
   category: string;
}

const NewTransaction: React.FC = () => {
   const formRef = useRef<FormHandles>(null);
   const valueInputRef = useRef<TextInput>(null);
   const categoryInputRef = useRef<TextInput>(null);

   const [isSelected, setIsSelected] = useState<boolean>(true);
   const [type, setType] = useState<'outcome' | 'income'>('income');

   const navigation = useNavigation();

   const handleSelectType = (bool: boolean) => {
      if (bool === isSelected) {
         return;
      }
      setIsSelected(!isSelected);
   };

   const handleAddTransaction = useCallback(
      async (data: TransactionFormData): Promise<void> => {
         try {
            formRef.current?.setErrors({});

            const form = {...data, type};

            console.log(form);

            const schema = Yup.object().shape({
               title: Yup.string().required('Informe um título'),
               value: Yup.number().required('Informe um valor'),
               category: Yup.string().required('Informe uma categoria'),
            });

            await schema.validate(data, {
               abortEarly: false,
            });

            await api.post('transactions', {...data, type});
            Alert.alert('Feito!', 'Você cadastrou uma nova transação');
            navigation.navigate('Dashboard');
         } catch (err) {
            if (err instanceof Yup.ValidationError) {
               const errors = getValidationErros(err);

               formRef.current?.setErrors(errors);
               return;
            }

            Alert.alert(
               'Oppsss',
               'Alguma coisa deu errado, tente novamente mais tarde.',
            );
            navigation.navigate('Dashboard');
         }
      },
      [navigation, type],
   );

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
               <Form ref={formRef} onSubmit={handleAddTransaction}>
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
                           onPress={() => {
                              handleSelectType(true);
                              setType('income');
                           }}>
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
                           onPress={() => {
                              handleSelectType(false);
                              setType('outcome');
                           }}>
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

                  <Button
                     title="Cadastrar"
                     onPress={() => {
                        formRef.current?.submitForm();
                     }}
                  />
               </Form>
            </Container>
         </ScrollView>
      </KeyboardAvoidingView>
   );
};

export default NewTransaction;
