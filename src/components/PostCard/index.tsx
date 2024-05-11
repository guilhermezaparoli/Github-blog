import { formatDistanceToNow } from 'date-fns';
import * as S from './styles';
import { ptBR } from 'date-fns/locale';
import { useNavigate } from 'react-router-dom';

interface PostCardProps {
  id: number;
  title: string;
  timePosted: Date;
  description: string;
}

export function PostCard({
  title,
  timePosted,
  description,
  id,
}: PostCardProps) {
  const publishedDateRelativeToNow = formatDistanceToNow(timePosted, {
    locale: ptBR,
    addSuffix: true,
  });
  const navigate = useNavigate();
  return (
    <S.Card onClick={() => navigate(`/posts/${id}`)}>
      <S.HeaderCard>
        <S.Title>{title}</S.Title>
        <S.TextHowLongTimePublication>
          {publishedDateRelativeToNow}
        </S.TextHowLongTimePublication>
      </S.HeaderCard>

      <S.TextDescriptionCard>{description}</S.TextDescriptionCard>
    </S.Card>
  );
}
