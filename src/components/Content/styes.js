import styled from 'styled-components';

export const ProjectListWrapper = styled.div`
  width: 100%;
`;

export const ListWrapper = styled.div`
  background-color: #fff;
  margin-bottom: 20px;
  display: flex;
  flex-flow: column;

  ${(props) =>
    props.isActive ||
    `
    &:hover {
      color: cyan;
    }
  `}
`;

export const ListTitle = styled.div`
  background-color: ${(props) => (props.isActive ? '#fff' : '#a9a9a9')};
  text-align: start;
  padding: 20px 30px;
  line-height: 25px;

  div:first-child {
    border-bottom: ${(props) => props.isActive || '2px solid'};
  }
  div {
    border-left: ${(props) => props.isActive || '2px solid'};
    padding: 10px;
    border-color: ${(props) => (props.isActive ? 'cyan' : 'inherit')};
  }

  h2 {
    margin: 0;
    font-size: 18px;
  }

  span {
    //padding: 10px;
  }
`;

export const ListContent = styled.div`
  font-family: 'Jeju Gothic', sans-serif;
  display: flex;
  padding: 0 30px 22px;
  gap: 20px;
  //justify-content: center;
  align-items: center;
  img {
    aspect-ratio: auto 4 / 3;
    max-width: 500px;
    max-height: 500px;
  }
`;

export const ListText = styled.div``;

export const Content = styled.div`
  font-size: small;
  min-width: 50vw;
  line-height: 1.5;
`;
export const SubContent = styled.div``;
