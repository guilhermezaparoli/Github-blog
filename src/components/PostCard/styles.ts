import styled from 'styled-components';

export const Card = styled.div`
  padding: 32px;
  width: 416px;
  height: 260px;

  background-color: ${({theme}) => theme['base-post']};
  border-radius: 10px;
`;
export const HeaderCard = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 20px;
`;

export const TextHowLongTimePublication = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme['base-span']};
  white-space: nowrap;
`;

export const Title = styled.h1`
  font-size: 20px;
  color: ${({ theme }) => theme['base-title']};
`;


export const TextDescriptionCard = styled.p`
  color: ${({ theme }) => theme['base-text']};
 
  display: -webkit-box;
-webkit-line-clamp: 4;
-webkit-box-orient: vertical;
overflow: hidden;
text-overflow: ellipsis;
  /* white-space: nowrap; */

`;
