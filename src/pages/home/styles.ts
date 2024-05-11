import styled from 'styled-components';

export const Global = styled.body`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 200px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProfileCard = styled.div`
  min-width: 54rem;
  padding: 2rem 2.5rem;
  background-color: ${({ theme }) => theme['base-profile']};
  border-radius: 10px;
  margin-top: -3.125rem;
  box-shadow: 0px 2px 28px 0px #00000033;
  display: flex;
  gap: 32px;
`;

export const Avatar = styled.img`
  max-width: 148px;
  max-height: 148px;
  border-radius: 8px;
`;

export const UserInfos = styled.div`
flex: 1;
`;

export const HeaderCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Username = styled.h1`
  margin-bottom: 8px;
`;
export const GitHubRedirect = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  border-bottom: 1px solid transparent;
  cursor: pointer;
  transition: border 0.3s;
  &:hover {
    border-bottom: 1px solid ${({theme}) => theme.blue};
  }
`;

export const GitHubRedirectText = styled.p`
  font-size: 0.75rem;
  font-weight: 700;
  color: ${({ theme }) => theme.blue};
`;
export const IconRedirect = styled.img`
  width: 12px;
  height: 12px;
`;
export const TextProfile = styled.p`
  font-weight: 400;
  line-height: 25px;
  color: ${({theme}) => theme["base-span"]};

`;

export const WrapperAdditionalInfos = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  margin-top: 24px;
`;

export const IconTextContainer = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  cursor: pointer;

  transition: filter 0.3s;

  &:hover {
   filter: brightness(1.5);
  }
`;

export const Icon = styled.img`
  width: 18px;
  height: 18px;
`;

export const WrapperText = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 4.375rem;
  margin-bottom: 0.75rem;
`;
export const TextPublication = styled.h1`
  line-height: 1.6;
  font-size: 1.125rem;
`;

export const TextHowLongTimePublication = styled.p`
  font-size: 0.875rem;
  color: ${({theme}) => theme['base-span']};
`;

export const SearchInput = styled.input`
  padding: 12px 16px;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme['base-border']};
  background-color: ${({ theme }) => theme['base-input']};
  color: ${({ theme }) => theme['base-text']};
  font-size: 16px;
  &::placeholder {
    color: ${({ theme }) => theme['base-label']};
    font-size: 16px;
    line-height: 1.6;
  }

  transition: border 0.3s;
  outline: none;
  &:hover {
    border: 1px solid ${({ theme }) => theme.blue};
  }
  &:focus {
    border: 1px solid ${({ theme }) => theme.blue};
  }
`;


export const WrapperPosts = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(416px, 1fr));
gap: 32px;
flex-wrap: wrap;
margin-top: 48px;
`