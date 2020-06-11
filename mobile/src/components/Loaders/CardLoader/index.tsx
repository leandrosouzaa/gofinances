import React from 'react';

import {SkeletonItem} from 'react-native-skeleton-loader-pulse';

import {Container, Type, Value, Info, Last} from './styles';

const CardLoader: React.FC = () => {
   return (
      <Container>
         <Info>
            <Type>
               <SkeletonItem height={20} width={100} />
            </Type>
            <Value>
               <SkeletonItem height={40} marginRight={10} width={50} />
               <SkeletonItem height={40} width={120} />
            </Value>
            <Last>
               <SkeletonItem />
            </Last>
         </Info>
         <SkeletonItem height={35} width={35} />
      </Container>
   );
};

export default CardLoader;
