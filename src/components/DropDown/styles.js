import styled from 'styled-components';

export const DropdownContent = styled.div`
  font-family: var(--tab-font-family);
  font-size: var(--tab-font-size);
  font-weight: 500;
  background-color: var(--main-background-color);
  position: absolute;
  ul {
    padding: 10px;
    list-style: none;
  }
  li {
    list-style: none;
    cursor: pointer;
    padding: 8px;
    margin: 0;
    a:hover {
      color: var(--main-acitvity-color);
    }
  }
`;
export const DropdownContainer = styled.div`
  position: absolute;
`;
