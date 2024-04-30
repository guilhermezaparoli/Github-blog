import * as S from './styles';
import arrowUpIcon from '../../assets/images/type-arrow-up-right-from-square-solid.svg';
import arrowLeftIcon from '../../assets/images/type-chevron-left-solid.svg';
import gitHubIcon from '../../assets/images/type-github-brands.svg';
import calendarIcon from '../../assets/images/type-calendar-day-solid.svg';
import commentIcon from '../../assets/images/type-comment-solid.svg';

export function PostPage() {
  return (
    <S.Global>
      <S.Content>
        <S.ProfileCard>
          <S.HeaderCard>
            <S.WrapperTextIcon href='/'>
              <S.SmallIcon src={arrowLeftIcon} />
              <S.TextLink>VOLTAR</S.TextLink>
            </S.WrapperTextIcon>
            <S.WrapperTextIcon>
              <S.TextLink>VER NO GITHUB</S.TextLink>
              <S.SmallIcon src={arrowUpIcon} />
            </S.WrapperTextIcon>
          </S.HeaderCard>
          <S.TitlePost>JavaScript data types and data structures</S.TitlePost>
        <S.WrapperAdditionalInfos>
            <S.IconTextContainer>
                <S.BigIcon src={gitHubIcon} />
                <S.TextInfoIcons>
                    guilhermezapas
                </S.TextInfoIcons>
            </S.IconTextContainer>
            <S.IconTextContainer>
                <S.BigIcon src={calendarIcon} />
                <S.TextInfoIcons>
                    Há 1 dia
                </S.TextInfoIcons>
            </S.IconTextContainer>
            <S.IconTextContainer>
                <S.BigIcon src={commentIcon} />
                <S.TextInfoIcons>
                    5 comentários
                </S.TextInfoIcons>
            </S.IconTextContainer>
        </S.WrapperAdditionalInfos>
        </S.ProfileCard>

      </S.Content>
    </S.Global>
  );
}
