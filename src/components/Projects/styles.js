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
  flex-flow: row; /* 가로 방향으로 배치 */
  gap: 30px; /* 아이템 사이의 간격 */
  padding: 20px;
  margin: 0 30px;
}

  @media (max-width: 1100px) {
    display: flex;
    flex-flow: column;
    gap: 30px;

  }

// `;

export const SwiperWrapper = styled.div`
  flex: 7; /* 가용 공간의 7분의 1을 차지하도록 설정 */
  width: 70%; /* 부모 컨테이너의 너비를 100%로 설정 */
  position: relative;
`;

export const ListText = styled.div`
  flex: 3; /* 가용 공간의 3분의 1을 차지하도록 설정 */
  font-family: var(--content-font-family);
  display: flex;
  flex-direction: column; /* 세로 방향으로 배치 */
`;

export const Content = styled.p`
  line-height: 2;
  word-break: break-word;
  margin: 0;
`;
export const SubContent = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;

  div {
    min-width: 120px;
  }

  p {
    margin-top: 0;
  }
`;
