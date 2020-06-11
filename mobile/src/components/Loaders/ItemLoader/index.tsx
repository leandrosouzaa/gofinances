import React from 'react';

import {SkeletonItem} from 'react-native-skeleton-loader-pulse';

import {Container, Title, Value, Details, DetailText} from './styles';

const ItemLoader: React.FC = () => {
   return (
      <Container>
         <Title>
            <SkeletonItem height={16} width={100} borderRadius={5} />
         </Title>
         <Value>
            <SkeletonItem
               height={32}
               borderRadius={5}
               marginRight={10}
               width={40}
            />
            <SkeletonItem height={32} borderRadius={5} width={80} />
         </Value>
         <Details>
            <DetailText>
               <SkeletonItem height={14} borderRadius={5} width={100} />
            </DetailText>
            <DetailText>
               <SkeletonItem height={14} borderRadius={5} width={100} />
            </DetailText>
         </Details>
      </Container>
   );
};

export default ItemLoader;
