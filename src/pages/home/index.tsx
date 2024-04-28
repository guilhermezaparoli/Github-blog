import * as S from './styles';

import githubIcon from '../../assets/images/type-github-brands.svg';
import buildingIcon from '../../assets/images/type-building-solid.svg';
import usersIcon from '../../assets/images/type-user-group-solid.svg';
import arowUpIcon from '../../assets/images/type-arrow-up-right-from-square-solid.svg';
export function Home() {
  return (
    <S.Content>
      <S.ProfileCard>
        <S.Avatar src="https://avatars.githubusercontent.com/u/112036882?v=4" />
        <S.UserInfos>
          <S.HeaderCard>
            <S.Username>Guilherme Zaparoli Gomes</S.Username>
            <S.GitHubRedirect>
              <S.GitHubRedirectText>GITHUB</S.GitHubRedirectText>
              <S.IconRedirect src={arowUpIcon} />
            </S.GitHubRedirect>
          </S.HeaderCard>
          <S.TextProfile>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </S.TextProfile>
          <S.WrapperAdditionalInfos>
            <S.IconTextContainer>
              <S.Icon src={githubIcon} />
              <S.TextProfile>guilhermezapas</S.TextProfile>
            </S.IconTextContainer>
            <S.IconTextContainer>
              <S.Icon src={buildingIcon} />
              <S.TextProfile>Rocketseat</S.TextProfile>
            </S.IconTextContainer>
            <S.IconTextContainer>
              <S.Icon src={usersIcon} />
              <S.TextProfile>32 seguidores</S.TextProfile>
            </S.IconTextContainer>
          </S.WrapperAdditionalInfos>
        </S.UserInfos>
      </S.ProfileCard>
    </S.Content>
  );
}
