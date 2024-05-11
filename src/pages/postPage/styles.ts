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
  width: 54rem;
  padding: 2rem;
  background-color: ${({ theme }) => theme['base-profile']};
  border-radius: 10px;
  box-shadow: 0px 2px 28px 0px #00000033;
  display: flex;
  flex-direction: column;
  margin-top: -50px;
`;
export const HeaderCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const TitlePost = styled.h1`
  margin-bottom: 8px;
`;

export const WrapperTextIcon = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  border-bottom: 1px solid transparent;
  cursor: pointer;
  transition: border 0.3s;
  &:hover {
    border-bottom: 1px solid ${({ theme }) => theme.blue};
  }
`;

export const TextLink = styled.p`
  font-size: 0.75rem;
  font-weight: 700;
  color: ${({ theme }) => theme.blue};
`;
export const SmallIcon = styled.img`
  width: 12px;
  height: 12px;
`;

export const WrapperAdditionalInfos = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

export const IconTextContainer = styled.a`
  display: flex;
  gap: 4px;
  align-items: center;
  cursor: pointer;
  transition: filter 0.3s;

  &:hover {
    filter: brightness(1.5);
  }
`;

export const BigIcon = styled.img`
  width: 18px;
  height: 18px;
`;
export const TextInfoIcons = styled.p`
  font-weight: 400;
  line-height: 25px;
  color: ${({ theme }) => theme['base-span']};
`;

export const WrapperText = styled.section`
  padding: 40px 32px;
  max-width: 54rem;
`;

export const SimpleText = styled.p`
  color: ${({ theme }) => theme['base-text']};
`;
