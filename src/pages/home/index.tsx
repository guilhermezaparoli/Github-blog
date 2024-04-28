import * as S from './styles';
export function Home() {
  return (
    <S.Content>
      <S.ProfileCard>
        <S.Avatar src='https://avatars.githubusercontent.com/u/112036882?v=4'/>
        <S.UserInfos>
          <S.Username>
            Guilherme Zaparoli Gomes
          </S.Username>
          <S.UserDescription>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.
          </S.UserDescription>
        </S.UserInfos>
      </S.ProfileCard>
    </S.Content>
  );
}
