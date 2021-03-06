import styled from 'styled-components/native';

interface CardProps {
   backgroundColor: string;
}

interface ThemeProps {
   colorTheme: string;
}

export const Container = styled.View<CardProps>`
   width: 300px;
   flex-direction: row;
   border-radius: 5px;
   justify-content: space-around;
   padding: 18px 0 42px 0;
   margin-right: 16px;
   background-color: ${(props) => props.backgroundColor};
`;

export const Info = styled.View``;

export const Type = styled.Text<ThemeProps>`
   color: ${(props) => (props.colorTheme === '#fff' ? '#363F5F' : '#fff')};
   font-family: 'Poppins-Regular';
   font-size: 14px;
   line-height: 21px;
`;

export const Value = styled.Text<ThemeProps>`
   font-size: 30px;
   color: ${(props) => (props.colorTheme === '#fff' ? '#363F5F' : '#fff')};
   font-family: 'Poppins-Regular';
   line-height: 45px;
   margin-top: 45px;
`;

export const Last = styled.Text<ThemeProps>`
   font-family: 'Poppins-Regular';
   font-size: 12px;
   line-height: 18px;
   color: ${(props) => (props.colorTheme === '#fff' ? '#363F5F' : '#fff')};
`;
