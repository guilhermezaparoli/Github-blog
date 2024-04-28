import styled from 'styled-components';

export const Header = styled.header`
  background-color: ${({ theme }) => theme['base-header']};

  padding: 1.875rem 0;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;


