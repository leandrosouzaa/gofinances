import React, {useMemo} from 'react';

import {format} from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import {Container, Logo, TextDate} from './styles';
import logo from '../../assets/images/logos/logo.png';

const Header: React.FC = () => {
   const today = useMemo(() => {
      return format(new Date(), "dd 'de' MMMM", {locale: ptBR});
   }, []);

   return (
      <Container>
         <Logo source={logo} />
         <TextDate>{today}</TextDate>
      </Container>
   );
};

export default Header;
