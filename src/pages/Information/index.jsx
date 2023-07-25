import * as S from './styles';
import React, { useState } from 'react';
import { data } from './data';
import Who from '../../components/Who';
import What from '../../components/What';
import Awards from '../../components/Awards';
import Contact from '../../components/Contact';
const Index = () => {
  const [visibleIndexes, setVisibleIndexes] = useState([]);
  const handleToggleVisible = (index) => {
    setVisibleIndexes((prevVisibleIndexes) =>
      prevVisibleIndexes.includes(index)
        ? prevVisibleIndexes.filter((idx) => idx !== index)
        : [...prevVisibleIndexes, index],
    );
  };
  const renderComponent = (path) => {
    switch (path) {
      case 'Who':
        return <Who />;
      case 'What':
        return <What />;
      case 'Awards':
        return <Awards />;
      case 'Contact':
        return <Contact />;
      default:
        return null;
    }
  };

  return (
    <S.Container>
      <S.ProjectListWrapper>
        {data.map((item, idx) => (
          <S.ListWrapper key={idx} isActive={visibleIndexes.includes(idx)}>
            <S.ListTitle
              onClick={() => handleToggleVisible(idx)}
              isActive={visibleIndexes.includes(idx)}
            >
              <div>
                <h2>{item.title}</h2>
              </div>
              {visibleIndexes.includes(idx) || (
                <div>
                  <span>{item.desc}</span>
                </div>
              )}
            </S.ListTitle>
            {visibleIndexes.includes(idx) && (
              <S.InformationCotnetWrapper>
                {renderComponent(item.path)}
              </S.InformationCotnetWrapper>
            )}
          </S.ListWrapper>
        ))}
      </S.ProjectListWrapper>
    </S.Container>
  );
};

export default Index;
