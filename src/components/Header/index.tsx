import { Outlet } from 'react-router-dom';
import * as S from './styles';
import effectsLeft from '../../assets/images/effect-left.svg';
import effectsRight from '../../assets/images/effect-right.svg';
import logo from '../../assets/images/logo.svg';
export function Header() {
  return (
    <>
      <S.Header>
        <img src={effectsLeft} />
        <img src={logo} />
        <img src={effectsRight} />
      </S.Header>
      <Outlet />
    </>
  );
}
