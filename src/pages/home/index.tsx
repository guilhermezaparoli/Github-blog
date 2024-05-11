import * as S from './styles';
import githubIcon from '../../assets/images/type-github-brands.svg';
import usersIcon from '../../assets/images/type-user-group-solid.svg';
import arowUpIcon from '../../assets/images/type-arrow-up-right-from-square-solid.svg';
import { PostCard } from '../../components/PostCard';
import { useEffect, useState } from 'react';
import { fetchAndSearchIssues, fetchDataUser } from '../../api/api';
import debounce from 'lodash.debounce';
import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';
interface dataUserRequest {
  id: number;
  name: string;
  html_url: string;
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
  number: number;
}
interface dataPostsRequest {
  items: posts[];
  lastPublicationTime: string;

}

export function Home() {
  const [dataUser, setDataUser] = useState({} as dataUserRequest);
  const [dataPosts, setDataPosts] = useState({} as dataPostsRequest);
  const [loading, setLoading] = useState(false);
  const [loadingPosts, setLoadingPosts] = useState(false);

 


  async function fetchInitialData() {
    try {
      const response = await fetchDataUser({ userName: 'guilhermezaparoli' });
      setDataUser(response.data);
      setLoading(false);
      fetchIssues();
    } catch (e) {
      console.error(e);
    }
  }

  async function fetchIssues(searchText?: string) {
    setLoadingPosts(true);
    try {
      const response = await fetchAndSearchIssues(searchText);
      response.data.lastPublicationTime = formatDistanceToNow(response.data.items[0].created_at, {
        locale: ptBR,
        addSuffix: true,
      });
      (response.data.items[0].created_at, "response.data.items[0]")
      setDataPosts(response.data);
      setLoadingPosts(false);
    } catch (e) {
      console.error(e);
    }
  }
  (dataPosts);
  useEffect(() => {
    setLoading(true);
    fetchInitialData();
  }, []);

  return (
    <>
      {loading ? (
        <S.LoaderContainerGlobal>
          <S.Loader />
        </S.LoaderContainerGlobal>
      ) : (
        <S.Global>
          <S.Content>
            <S.ProfileCard>
              <S.Avatar src={dataUser.avatar_url} />
              <S.UserInfos>
                <S.HeaderCard>
                  <S.Username>{dataUser.name}</S.Username>
                  <S.GitHubRedirect
                    href="https://github.com/guilhermezaparoli/Github-blog/issues"
                    target="_blank"
                  >
                    <S.GitHubRedirectText>GITHUB</S.GitHubRedirectText>
                    <S.IconRedirect src={arowUpIcon} />
                  </S.GitHubRedirect>
                </S.HeaderCard>
                <S.TextProfile>{dataUser.bio}</S.TextProfile>
                <S.WrapperAdditionalInfos>
                  <S.IconTextContainer href={dataUser.html_url} target="_blank">
                    <S.Icon src={githubIcon} />
                    <S.TextProfile>{dataUser.login}</S.TextProfile>
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
              <S.TextHowLongTimePublication>
               {dataPosts.lastPublicationTime}
              </S.TextHowLongTimePublication>
            </S.WrapperText>
            <S.SearchInput
              onChange={debounce((e) => fetchIssues(e.target.value), 300)}
              type="text"
              placeholder="Buscar conteúdo"
            />

            {loadingPosts ? (
              <S.LoaderContainerPosts>
                <S.Loader />
              </S.LoaderContainerPosts>
            ) : (
              <S.WrapperPosts>
                {dataPosts?.items?.map((item, index) => (
                  <PostCard
                    id={dataPosts.items[index].number}
                    key={item.id}
                    title={item.title}
                    timePosted={item.created_at}
                    description={item.body}
                  />
                ))}
              </S.WrapperPosts>
            )}
          </S.Content>
        </S.Global>
      )}
    </>
  );
}
