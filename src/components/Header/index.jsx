import * as S from './styles';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { onRollup, onRollDown, setSearchValue } from '../../store/uiSlice';
import { useDispatch } from 'react-redux';
import LOGO from '../../assets/logo.png';
import { BiMinus } from 'react-icons/bi';
import { AiOutlinePlus } from 'react-icons/ai';
import Dropdown from '../DropDown';
import { useState } from 'react';
import { fetchDatas, filterProjects } from '../../store/dataSlice';

const Header = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [isShown, setIsShown] = useState(false);
  const handleMouseEnter = () => {
    setIsShown(true);
  };

  const handleMouseLeave = () => {
    setIsShown(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const searchValue = e.target.search.value.trim();
    dispatch(setSearchValue(searchValue));
  };

  const onfilterData = (tag) => {
    dispatch(filterProjects(tag));
  };

  return (
    <S.Header color={pathname !== '/information'}>
      <S.HeaderContainer>
        <S.LogoLink onClick={() => navigate('/')}>
          <img src={LOGO} alt="logo" width="80px" />
        </S.LogoLink>
        <S.MenuWrapper>
          <S.MenuBar>
            <S.DropdownContainer
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <NavLink
                to="/"
                style={({ isActive }) => ({
                  color: isActive ? 'var(--main-acitvity-color)' : 'inherit',
                })}
              >
                PROJECTS
              </NavLink>
              <Dropdown isShown={isShown}>
                <ul>
                  <li onClick={() => dispatch(fetchDatas())}>All</li>
                  <li onClick={() => onfilterData('product')}>Product</li>
                  <li onClick={() => onfilterData('service')}>Service</li>
                  <li onClick={() => onfilterData('package')}>Package</li>
                </ul>
              </Dropdown>
            </S.DropdownContainer>
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
          {pathname === '/' && (
            <S.MenuSideBar>
              <S.ControllBtnWrapper>
                <S.Btn onClick={() => dispatch(onRollup())}>
                  <AiOutlinePlus />
                </S.Btn>
                {'    '}
                <span> / </span>
                {'    '}
                <S.Btn onClick={() => dispatch(onRollDown())}>
                  <BiMinus />
                </S.Btn>
              </S.ControllBtnWrapper>
              <S.SearchWrapper onSubmit={handleSearch}>
                <input name="search" placeholder="Search" />
              </S.SearchWrapper>
            </S.MenuSideBar>
          )}
        </S.MenuWrapper>
      </S.HeaderContainer>
    </S.Header>
  );
};

export default Header;
