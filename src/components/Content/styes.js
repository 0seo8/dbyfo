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
      color: var(--main-acitvity-color);
    }
  `}
`;

export const ListTitle = styled.div`
  background-color: ${(props) => (props.isActive ? '#fff' : '#a9a9a9')};
  text-align: start;
  padding: 20px var(--base-padding-vertical);
  line-height: 25px;

  div:first-child {
    border-bottom: ${(props) => props.isActive || '2px solid'};
  }
  div {
    border-left: ${(props) => props.isActive || '2px solid'};
    padding: ${(props) => (props.isActive ? '10px 0' : '10px')};
    border-color: ${(props) => (props.isActive ? 'cyan' : 'inherit')};
  }

  h2 {
    margin: 0;
    font-size: 18px;
  }

  span {
  }
`;

export const ListContent = styled.div`
  font-family: 'Jeju Gothic', sans-serif;
  display: flex;
  padding: 0 var(--base-padding-vertical) 30px;
  gap: 120px;
  align-items: center; 
}

  @media (max-width: 1100px) {
    display: flex;
    flex-flow: column;
    gap: 50px;

  }

  //@media (max-width: 650px) {
  //  display: flex;
  //  flex-flow: column;
  //  gap: 50px;
  //  img {
  //    min-width: 400px;
  //  }
  //}
// `;

export const SwiperWrapper = styled.div`
  aspect-ratio: auto 4 / 3;
  min-width: 600px;
  max-height: 600px;
  flex-grow: 1;
  //
  //@media (max-width: 1100px) {
  //  min-width: auto;
  //  max-height: 400px;
  //}
`;

export const ListText = styled.div``;

export const Content = styled.div`
  font-size: small;
  line-height: 2;
  word-break: keep-all;
`;
export const SubContent = styled.div`
  display: flex;
  gap: 30px;
  margin-top: 40px;
  font-size: 12px;
`;
