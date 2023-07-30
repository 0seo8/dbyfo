import styled from 'styled-components';

export const ListWrapper = styled.div`
  margin-bottom: var(--base-margin);
  display: flex;
  flex-flow: column;

  ${(props) =>
    props.isActive ||
    `
    &:hover {
      color: var(--main-acitvity-color);
    }
  `}
`;

export const ListTitle = styled.div`
  background-color: ${(props) =>
    props.isActive
      ? 'var(--card-background-color)'
      : 'var( --main-background-color)'};
  text-align: start;
  margin: ${(props) => (props.isActive ? '0 30px' : '0')};
  padding: ${(props) =>
    props.isActive ? '0' : '10px var(--base-padding-vertical)'};
  line-height: 1;

  div {
    border-left: ${(props) => props.isActive || '2px solid'};
    padding: 20px;
    padding-bottom: ${(props) => props.isActive && '0'};
    border-color: ${(props) => (props.isActive ? 'cyan' : 'inherit')};
  }
  div:first-child {
    border-bottom: ${(props) => props.isActive || '2px solid'};
  }
  h2 {
    margin: 0;
    font-size: 18px;
  }

  span {
  }
`;

export const Title = styled.div``;

export const Year = styled.div``;

export const ListContent = styled.div`
  background-color: #fff;
  font-family: 'Jeju Gothic', sans-serif;
  display: flex;
  padding: 20px;
  gap: 30px;
  margin: 0 30px;
}

  @media (max-width: 1100px) {
    display: flex;
    flex-flow: column;
    gap: 30px;

  }

// `;

export const SwiperWrapper = styled.div`
  aspect-ratio: auto 16 / 9;
  min-width: 771px;
  flex-grow: 7;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const ListText = styled.div`
  flex-grow: 3;
`;

export const Content = styled.p`
  line-height: 2;
  word-break: break-word;
  margin: 0;
`;
export const SubContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  div {
    min-width: 120px;
  }
  p {
    margin-top: 0;
  }
`;
