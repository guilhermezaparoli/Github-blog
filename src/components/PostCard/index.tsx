import * as S from './styles';


interface PostCardProps {
    title: string;
    timePosted: string;
    description: string;
}

export function PostCard({title, timePosted,  description}: PostCardProps) {
  return (
    <S.Card>
      <S.HeaderCard>
        <S.Title>{title}</S.Title>
        <S.TextHowLongTimePublication>{timePosted}</S.TextHowLongTimePublication>
      </S.HeaderCard>
     
      <S.TextDescriptionCard>
       {description}
      </S.TextDescriptionCard>

    </S.Card>
  );
}
