import * as S from './styles';
import githubIcon from '../../assets/images/type-github-brands.svg';
import buildingIcon from '../../assets/images/type-building-solid.svg';
import usersIcon from '../../assets/images/type-user-group-solid.svg';
import arowUpIcon from '../../assets/images/type-arrow-up-right-from-square-solid.svg';
import { PostCard } from '../../components/PostCard';
import { useEffect, useState } from 'react';
import { fetchAndSearchIssues, fetchDataUser } from '../../api/api';
import debounce from 'lodash.debounce';
interface dataUserRequest {
  id: number;
  name: string;
  avatar_url: string;
  followers: number;
  login: string;
  bio: string;
}

interface posts {
  id: number;
  title: string;
  body: string;
  created_at: Date;
}
interface dataPostsRequest {
  items: posts[];
}

export function Home() {
  const [dataUser, setDataUser] = useState({} as dataUserRequest);
  const [dataPosts, setDataPosts] = useState({} as dataPostsRequest);

  async function fetchInitialData() {
    debounce(() => console.log('teste'), 1100);
    const response = await fetchDataUser({ userName: 'guilhermezaparoli' });
    setDataUser(response.data);
    fetchIssues();
  }

  async function fetchIssues(searchText?: string) {
    console.log('chegou');

    const response = await fetchAndSearchIssues(searchText);
    setDataPosts(response.data);
  }

  useEffect(() => {
    fetchInitialData();
  }, []);

  return (
    <S.Global>
      <S.Content>
        <S.ProfileCard>
          <S.Avatar src={dataUser.avatar_url} />
          <S.UserInfos>
            <S.HeaderCard>
              <S.Username>{dataUser.name}</S.Username>
              <S.GitHubRedirect>
                <S.GitHubRedirectText>GITHUB</S.GitHubRedirectText>
                <S.IconRedirect src={arowUpIcon} />
              </S.GitHubRedirect>
            </S.HeaderCard>
            <S.TextProfile>{dataUser.bio}</S.TextProfile>
            <S.WrapperAdditionalInfos>
              <S.IconTextContainer>
                <S.Icon src={githubIcon} />
                <S.TextProfile>{dataUser.login}</S.TextProfile>
              </S.IconTextContainer>
              <S.IconTextContainer>
                <S.Icon src={buildingIcon} />
                <S.TextProfile>Rocketseat</S.TextProfile>
              </S.IconTextContainer>
              <S.IconTextContainer>
                <S.Icon src={usersIcon} />
                <S.TextProfile>{dataUser.followers}</S.TextProfile>
              </S.IconTextContainer>
            </S.WrapperAdditionalInfos>
          </S.UserInfos>
        </S.ProfileCard>

        <S.WrapperText>
          <S.TextPublication>Publicações</S.TextPublication>
          <S.TextHowLongTimePublication>Há 6 dias</S.TextHowLongTimePublication>
        </S.WrapperText>
        <S.SearchInput
          onChange={debounce((e) => fetchIssues(e.target.value), 300)}
          type="text"
          placeholder="Buscar conteúdo"
        />

        <S.WrapperPosts>
          {dataPosts?.items?.map((item, index) => (
            <PostCard
              id={index + 1}
              key={item.id}
              title={item.title}
              timePosted={item.created_at}
              description={item.body}
            />
          ))}
        </S.WrapperPosts>
      </S.Content>
    </S.Global>
  );
}
