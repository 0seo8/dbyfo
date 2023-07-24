import * as S from './styles';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { data } from './data';
const Index = () => {
  const [visibleIndexes, setVisibleIndexes] = useState([]);
  const ui = useSelector((state) => state.ui.value);
  const handleToggleVisible = (index) => {
    setVisibleIndexes((prevVisibleIndexes) =>
      prevVisibleIndexes.includes(index)
        ? prevVisibleIndexes.filter((idx) => idx !== index)
        : [...prevVisibleIndexes, index],
    );
  };

  return (
    <S.Container>
      <S.ProjectListWrapper>
        {data.map((item, idx) => (
          <S.ListWrapper
            key={idx}
            isActive={visibleIndexes.includes(idx) || ui}
          >
            <S.ListTitle
              onClick={() => handleToggleVisible(idx)}
              isActive={visibleIndexes.includes(idx) || ui}
            >
              <div>
                <h2>{item.title}</h2>
              </div>
              <div>
                <span>{item.desc}</span>
              </div>
            </S.ListTitle>
            {(visibleIndexes.includes(idx) || ui) && (
              <S.ListContent></S.ListContent>
            )}
          </S.ListWrapper>
        ))}
      </S.ProjectListWrapper>
    </S.Container>
  );
};

export default Index;
