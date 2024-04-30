import * as S from './styles';

import githubIcon from '../../assets/images/type-github-brands.svg';
import buildingIcon from '../../assets/images/type-building-solid.svg';
import usersIcon from '../../assets/images/type-user-group-solid.svg';
import arowUpIcon from '../../assets/images/type-arrow-up-right-from-square-solid.svg';
import { PostCard } from '../../components/PostCard';
export function Home() {
  return (
    <S.Global>
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

        <S.WrapperText>
          <S.TextPublication>Publicações</S.TextPublication>
          <S.TextHowLongTimePublication>Há 6 dias</S.TextHowLongTimePublication>
        </S.WrapperText>
        <S.SearchInput type='text' placeholder='Buscar conteúdo'/>


        <S.WrapperPosts>
          <PostCard title='JavaScript data types and data structures' timePosted='Há 1 dia' description='Programming languages all have built-in data structures, but these often
        differ from one language to another. This article attempts to list the
        built-in data structures available in JavaScript and what properties
        they have. These can be used to build other data structures. Wherever
        possible, comparisons with other languages are drawn. Dynamic typing
        JavaScript is a loosely typed and dynamic language. Variables in
        JavaScript are not directly associated with any particular value type,
        and any variable can be assigned (and re-assigned) values of all types:
        let foo = 42; // foo is now a number foo'/>
          <PostCard title='JavaScript data types and data structures' timePosted='Há 1 dia' description='Programming languages all have built-in data structures, but these often
        differ from one language to another. This article attempts to list the
        built-in data structures available in JavaScript and what properties
        they have. These can be used to build other data structures. Wherever
        possible, comparisons with other languages are drawn. Dynamic typing
        JavaScript is a loosely typed and dynamic language. Variables in
        JavaScript are not directly associated with any particular value type,
        and any variable can be assigned (and re-assigned) values of all types:
        let foo = 42; // foo is now a number foo'/>
          <PostCard title='JavaScript data types and data structures' timePosted='Há 1 dia' description='Programming languages all have built-in data structures, but these often
        differ from one language to another. This article attempts to list the
        built-in data structures available in JavaScript and what properties
        they have. These can be used to build other data structures. Wherever
        possible, comparisons with other languages are drawn. Dynamic typing
        JavaScript is a loosely typed and dynamic language. Variables in
        JavaScript are not directly associated with any particular value type,
        and any variable can be assigned (and re-assigned) values of all types:
        let foo = 42; // foo is now a number foo'/>
          <PostCard title='JavaScript data types and data structures' timePosted='Há 1 dia' description='Programming languages all have built-in data structures, but these often
        differ from one language to another. This article attempts to list the
        built-in data structures available in JavaScript and what properties
        they have. These can be used to build other data structures. Wherever
        possible, comparisons with other languages are drawn. Dynamic typing
        JavaScript is a loosely typed and dynamic language. Variables in
        JavaScript are not directly associated with any particular value type,
        and any variable can be assigned (and re-assigned) values of all types:
        let foo = 42; // foo is now a number foo'/>
          <PostCard title='JavaScript data types and data structures' timePosted='Há 1 dia' description='Programming languages all have built-in data structures, but these often
        differ from one language to another. This article attempts to list the
        built-in data structures available in JavaScript and what properties
        they have. These can be used to build other data structures. Wherever
        possible, comparisons with other languages are drawn. Dynamic typing
        JavaScript is a loosely typed and dynamic language. Variables in
        JavaScript are not directly associated with any particular value type,
        and any variable can be assigned (and re-assigned) values of all types:
        let foo = 42; // foo is now a number foo'/>
          <PostCard title='JavaScript data types and data structures' timePosted='Há 1 dia' description='Programming languages all have built-in data structures, but these often
        differ from one language to another. This article attempts to list the
        built-in data structures available in JavaScript and what properties
        they have. These can be used to build other data structures. Wherever
        possible, comparisons with other languages are drawn. Dynamic typing
        JavaScript is a loosely typed and dynamic language. Variables in
        JavaScript are not directly associated with any particular value type,
        and any variable can be assigned (and re-assigned) values of all types:
        let foo = 42; // foo is now a number foo'/>
        </S.WrapperPosts>
      </S.Content>
    </S.Global>
  );
}
