import * as S from './styles';
import { NavLink, useLocation } from 'react-router-dom';
import { onRollup, onRollDown, setSearchValue } from '../../store/uiSlice';
import { useDispatch } from 'react-redux';
import LOGO from '../../assets/logo.png';

const Header = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const handleSearch = (e) => {
    e.preventDefault();
    const searchValue = e.target.search.value.trim();
    dispatch(setSearchValue(searchValue));
  };

  return (
    <S.Header color={pathname !== '/information'}>
      <S.HeaderContainer>
        <S.LogoLink>
          <img src={LOGO} alt="logo" width="80px" />
        </S.LogoLink>
        <S.MenuWrapper>
          <S.MenuBar>
            <NavLink
              to="/"
              style={({ isActive }) => ({
                color: isActive ? 'var(--main-acitvity-color)' : 'inherit',
              })}
            >
              PROJECTS
            </NavLink>
            <NavLink
              to="/information"
              style={({ isActive }) => ({
                color: isActive ? 'var(--main-acitvity-color)' : 'inherit',
              })}
            >
              STUDIO INFO.
            </NavLink>
            <a
              href="https://www.bikabuka.net/"
              target="_blank"
              rel="noreferrer"
            >
              BIKABUKA
            </a>
          </S.MenuBar>
          <S.MenuSideBar>
            <S.ControllBtnWrapper>
              <div onClick={() => dispatch(onRollup())}>+</div>
              {'    '}
              <div> / </div>
              {'    '}
              <div onClick={() => dispatch(onRollDown())}>-</div>
            </S.ControllBtnWrapper>
            <S.SearchWrapper onSubmit={handleSearch}>
              <input name="search" placeholder="Search" />
            </S.SearchWrapper>
          </S.MenuSideBar>
        </S.MenuWrapper>
      </S.HeaderContainer>
    </S.Header>
  );
};

export default Header;
