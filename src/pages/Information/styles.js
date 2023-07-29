import styled from 'styled-components';

export const Container = styled.div``;

export const ProjectListWrapper = styled.div`
  width: 100%;
`;

export const ListWrapper = styled.div`
  background-color: var(--studiocard-background-color);
  margin-bottom: var(--studiocard-card-padding);
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
      ? 'var(--studiocard-background-color)'
      : 'var(--main-background-color)'};
  text-align: start;
  padding: 10px var(--base-padding-vertical);
  line-height: var(--studiocard-font-height);
  color: ${(props) =>
    props.isActive ? 'var(--base-font-color)' : 'var(--white-font-color)'};

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
    padding: 0;
    font-size: var(--main-base-size);
  }

  span {
    //padding: 10px;
  }
`;

export const InformationCotnetWrapper = styled.div`
  padding: 0 var(--base-padding-vertical) 30px;
`;

export const ListContent = styled.div`
  font-family: 'Jeju Gothic', sans-serif;
  display: flex;
  padding: 0 30px 30px;
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
