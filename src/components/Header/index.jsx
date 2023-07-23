import * as S from './styles';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <S.Header>
      <S.HeaderContainer>
        <S.LogoLink>DBYFO</S.LogoLink>
        <S.MenuWrapper>
          <S.MenuBar>
            <NavLink
              to="/project"
              style={({ isActive }) => ({ color: isActive ? 'cyan' : 'black' })}
            >
              PROJECTS
            </NavLink>
            <NavLink
              to="/information"
              style={({ isActive }) => ({ color: isActive ? 'cyan' : 'black' })}
            >
              STUDIO INFO.
            </NavLink>
            <a
              href="https://usubgi.cafe24.com/"
              target="_blank"
              rel="noreferrer"
            >
              BIKABUKA
            </a>
          </S.MenuBar>
          <S.MenuSideBar>
            <S.ControllBtnWrapper>
              <div>+</div>
              <div>/</div>
              <div>-</div>
            </S.ControllBtnWrapper>
            <S.SearchWrapper>
              <input placeholder="Search" />
            </S.SearchWrapper>
          </S.MenuSideBar>
        </S.MenuWrapper>
      </S.HeaderContainer>
    </S.Header>
  );
};

export default Header;
