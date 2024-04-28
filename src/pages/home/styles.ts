import styled from "styled-components";


export const Content = styled.body`
display: flex;
align-items: center;
justify-content: center;

`

export const ProfileCard = styled.div`
max-width: 54rem;
padding: 2rem 2.5rem;
background-color: ${({theme}) => theme["base-profile"]};
border-radius: 10px;
margin-top: -3.125rem;
box-shadow: 0px 2px 28px 0px #00000033;
display: flex;
gap: 32px;
`

export const Avatar = styled.img`
max-width: 148px;
max-height: 148px;
border-radius: 8px;
`

export const UserInfos = styled.div`

`

export const Username = styled.h1``

export const UserDescription = styled.p``