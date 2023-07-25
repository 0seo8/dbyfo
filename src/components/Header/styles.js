import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.div`
  background-color: var(--main-background-color);
  color: ${(props) => (props.color ? '#fff' : '#000')};
  position: relative;
  line-height: 18px;
  width: 100%;
  min-width: 1000px;
  min-height: 30px;
  z-index: 1000;
  text-align: start;
  a {
    text-decoration: none;
    color: ${(props) => (props.color ? '#fff' : '#000')};
  }
`;
export const HeaderContainer = styled.div`
  background-color: var(--main-background-color);
  left: 0;
  right: 0;
  padding: 24px;
  top: 0;
  position: fixed;
  display: flex;
  flex-flow: column;
`;

export const Link = styled(NavLink)`
  color: ${(props) => (props.color ? '#fff' : '#000')};

  :active {
    color: var(--main-acitvity-color);
  }
`;

export const LogoLink = styled.h1`
  padding: 15px 0;
`;

export const MenuWrapper = styled.div`
  display: flex;
`;

export const MenuBar = styled.ul`
  width: 700px;
  display: flex;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 25px;
  flex-grow: 3;
`;

export const MenuSideBar = styled.div`
  display: flex;
  flex-grow: 1;
`;

export const ControllBtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  align-items: center;
  width: 100%;
  cursor: pointer;
`;

export const SearchWrapper = styled.form`
  padding-left: 10px;
`;
