import styled from 'styled-components';

export const Content = styled.body`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProfileCard = styled.div`
  max-width: 54rem;
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

export const UserInfos = styled.div``;

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
`;

export const Icon = styled.img`
  width: 18px;
  height: 18px;
`;
