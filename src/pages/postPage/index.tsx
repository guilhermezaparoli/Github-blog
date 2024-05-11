import * as S from './styles';
import arrowUpIcon from '../../assets/images/type-arrow-up-right-from-square-solid.svg';
import arrowLeftIcon from '../../assets/images/type-chevron-left-solid.svg';
import gitHubIcon from '../../assets/images/type-github-brands.svg';
import calendarIcon from '../../assets/images/type-calendar-day-solid.svg';
import commentIcon from '../../assets/images/type-comment-solid.svg';
import { useEffect, useState } from 'react';
import { fetchIssuePost } from '../../api/api';
import { useParams } from 'react-router-dom';
import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';

interface dataPostPageContent {
  title: string;
  body: string;
  created_at: string;
  comments: number;
  user: {
    login: string;
    html_url: string;
  };
  html_url: string;
}

export function PostPage() {
  const [dataPostPage, setDataPostPage] = useState({} as dataPostPageContent);
  const { postId } = useParams();

  async function fetchPostData() {
    const response = await fetchIssuePost(postId);
    response.created_at = formatDistanceToNow(response.created_at, {
      locale: ptBR,
      addSuffix: true,
    });
    console.log(response);
    setDataPostPage(response);
  }

  useEffect(() => {
    fetchPostData();
  }, []);
  return (
    <S.Global>
      <S.Content>
        <S.ProfileCard>
          <S.HeaderCard>
            <S.WrapperTextIcon href="/">
              <S.SmallIcon src={arrowLeftIcon} />
              <S.TextLink>VOLTAR</S.TextLink>
            </S.WrapperTextIcon>
            <S.WrapperTextIcon href={dataPostPage.html_url} target='_blank'>
              <S.TextLink>VER NO GITHUB</S.TextLink>
              <S.SmallIcon src={arrowUpIcon} />
            </S.WrapperTextIcon>
          </S.HeaderCard>
          <S.TitlePost>{dataPostPage.title}</S.TitlePost>
          <S.WrapperAdditionalInfos>
            <S.IconTextContainer href={dataPostPage?.user.html_url} target='_blank'>
              <S.BigIcon src={gitHubIcon} />
              <S.TextInfoIcons>{dataPostPage?.user?.login}</S.TextInfoIcons>
            </S.IconTextContainer>
            <S.IconTextContainer>
              <S.BigIcon src={calendarIcon} />
              <S.TextInfoIcons>{dataPostPage.created_at}</S.TextInfoIcons>
            </S.IconTextContainer>
            <S.IconTextContainer href={dataPostPage.html_url} target='_blank'>
              <S.BigIcon src={commentIcon} />
              <S.TextInfoIcons >
                {dataPostPage.comments} 
                {dataPostPage.comments > 1 ? ' Comentários' : ' Comentário'}
              </S.TextInfoIcons>
            </S.IconTextContainer>
          </S.WrapperAdditionalInfos>
        </S.ProfileCard>

        <S.WrapperText>
          <S.SimpleText>{dataPostPage.body}</S.SimpleText>
        </S.WrapperText>
      </S.Content>
    </S.Global>
  );
}
