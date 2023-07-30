import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 30px;
`;

export const ProjectListWrapper = styled.div`
  //width: 100%;
`;

export const ListWrapper = styled.div`
  background-color: var(--card-background-color);
  margin: ${(props) => (props.isActive ? '0 30px 20px' : '0 0 20px')};
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
      : 'var(--main-background-color)'};
  text-align: start;
  margin: ${(props) => (props.isActive ? '0 30px' : '0')};
  padding: ${(props) =>
    props.isActive ? '0' : '10px var(--base-padding-vertical)'};
  line-height: var(--studiocard-font-height);

  div {
    border-left: ${(props) => props.isActive || '2px solid'};
    padding: ${(props) => (props.isActive ? '20px 0' : '20px')};
    padding-bottom: ${(props) => props.isActive && '0'};
    border-color: ${(props) => (props.isActive ? 'cyan' : 'inherit')};
  }
  div:first-child {
    border-bottom: ${(props) => props.isActive || '2px solid'};
  }
  h2 {
    padding: 0;
    margin: 0;
    font-size: var(--main-base-size);
  }

  span {
    //padding: 10px;
  }
`;

export const InformationCotnetWrapper = styled.div`
  margin: 0 30px;
`;

export const ListContent = styled.div`
  font-family: 'Jeju Gothic', sans-serif;
  display: flex;
  padding: 0 30px;
  gap: 120px;
  align-items: center;
  img {
    aspect-ratio: auto 4 / 3;
    max-width: 600px;
    max-height: 600px;
  }

  @media (max-width: 1100px) {
    display: flex;
    flex-flow: column;
    gap: 50px;
    img {
      min-width: auto;
      max-height: 400px;
    }
  }
`;
