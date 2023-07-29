import * as S from './styles';
import { data } from './data';
import ImageSlider from '../../components/ImageSlider';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Project = () => {
  const [visibleIndexes, setVisibleIndexes] = useState([]);
  const ui = useSelector((state) => state.ui.value);
  const keyword = useSelector((state) => state.ui.searchKeyward);

  const handleToggleVisible = (index) => {
    setVisibleIndexes((prevVisibleIndexes) =>
      prevVisibleIndexes.includes(index)
        ? prevVisibleIndexes.filter((idx) => idx !== index)
        : [...prevVisibleIndexes, index],
    );
  };

  useEffect(() => {
    if (ui) {
      setVisibleIndexes([...Array(data.length).keys()]);
    } else {
      setVisibleIndexes([]);
    }
  }, [ui]);

  useEffect(() => {
    // 검색어가 변경되면 리스트를 모두 닫음
    setVisibleIndexes([]);
  }, [keyword]);

  useEffect(() => {
    setVisibleIndexes([]);
  }, []);

  useEffect(() => {
    // 검색어가 변경될 때마다 데이터를 순회하여 검색된 아이템들의 인덱스를 찾아냄
    if (keyword === '') return;
    const filteredIndexes = data.reduce((acc, item, idx) => {
      const { title, content } = item;
      if (
        title.toLowerCase().includes(keyword.toLowerCase()) ||
        content.toLowerCase().includes(keyword.toLowerCase())
      ) {
        acc.push(idx);
      }
      return acc;
    }, []);
    setVisibleIndexes(filteredIndexes);
  }, [keyword]);
  return (
    <S.Container>
      {data.map((item, idx) => (
        <S.ListWrapper key={idx} isActive={visibleIndexes.includes(idx)}>
          <S.ListTitle
            onClick={() => handleToggleVisible(idx)}
            isActive={visibleIndexes.includes(idx)}
          >
            <div>
              <h2>{item.title}</h2>
            </div>
            <div>
              <span>{item.year}</span>
            </div>
          </S.ListTitle>
          {visibleIndexes.includes(idx) && (
            <S.ListContent>
              <S.ListText>
                <S.Content>{item.content}</S.Content>
                <S.SubContent>
                  {item.sub.designer && <p>Designer: {item.sub.designer}</p>}
                  {item.sub.client && <p>Client: {item.sub.client}</p>}
                </S.SubContent>
              </S.ListText>
              <S.SwiperWrapper>
                <ImageSlider images={item.img} />
              </S.SwiperWrapper>
            </S.ListContent>
          )}
        </S.ListWrapper>
      ))}
    </S.Container>
  );
};

export default Project;
