import React from 'react';

import {SkeletonItem} from 'react-native-skeleton-loader-pulse';

import {Container, Type, Value, Info, Last} from './styles';

const CardLoader: React.FC = () => {
   return (
      <Container>
         <Info>
            <Type>
               <SkeletonItem borderRadius={5} height={20} width={100} />
            </Type>
            <Value>
               <SkeletonItem
                  borderRadius={5}
                  height={40}
                  marginRight={10}
                  width={50}
               />
               <SkeletonItem borderRadius={5} height={40} width={120} />
            </Value>
            <Last>
               <SkeletonItem borderRadius={5} />
            </Last>
         </Info>
         <SkeletonItem borderRadius={5} height={35} width={35} />
      </Container>
   );
};

export default CardLoader;
