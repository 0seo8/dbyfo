import React, { useEffect } from 'react';
import * as S from './styles';
import ImageSlider from '../ImageSlider';
import { useDispatch, useSelector } from 'react-redux';
import { selectDataSlice, selectUiSlice } from '../../store';
import { setVisibleIndexes, handleToggleVisible } from '../../store/uiSlice';

const Index = ({ item, idx }) => {
  const { value, searchKeyward, visibleIndexes } = useSelector(selectUiSlice);
  const { projects } = useSelector(selectDataSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    if (value) {
      dispatch(setVisibleIndexes([...Array(projects.length).keys()]));
    } else {
      dispatch(setVisibleIndexes([]));
    }
  }, [projects]);

  useEffect(() => {
    dispatch(setVisibleIndexes([]));
  }, [searchKeyward]);

  useEffect(() => {
    dispatch(setVisibleIndexes([]));
  }, []);

  useEffect(() => {
    if (searchKeyward === '') return;
    const filteredIndexes = projects.reduce((acc, item, idx) => {
      const { title, sub_title, content, year } = item;

      // content 배열의 각 요소를 문자열로 합침
      const contentString = content.join(' ');

      // title, content, year를 검색어와 비교
      if (
        title.toLowerCase().includes(searchKeyward.toLowerCase()) ||
        sub_title.toLowerCase().includes(searchKeyward.toLowerCase()) ||
        contentString.toLowerCase().includes(searchKeyward.toLowerCase()) ||
        year.includes(searchKeyward) // year가 문자열이므로 includes로 비교
      ) {
        acc.push(idx);
      }
      return acc;
    }, []);
    dispatch(setVisibleIndexes(filteredIndexes));
  }, [searchKeyward]);
  return (
    <>
      {' '}
      <S.ListWrapper key={idx} isActive={visibleIndexes.includes(idx)}>
        <S.ListTitle
          onClick={() => dispatch(handleToggleVisible(idx))}
          isActive={visibleIndexes.includes(idx)}
        >
          <S.Title>
            <h2>
              {item.title} / {item.sub_title}
            </h2>
          </S.Title>
          <S.Year>
            <span>{item.year}</span>
          </S.Year>
        </S.ListTitle>
        {visibleIndexes.includes(idx) && (
          <S.ListContent>
            <S.ListText>
              {item.content.map((item) => (
                <>
                  <S.Content>{item}</S.Content>
                </>
              ))}
              <S.SubContent>
                <div>
                  <p>Designer</p>
                  {item.sub.designer.map((item, idx) => (
                    <p key={idx}>{item}</p>
                  ))}
                </div>
                <div>
                  {item.sub.client && <p>Client</p>}
                  {item.sub.client?.map((item, idx) => (
                    <p key={idx}>{item}</p>
                  ))}
                  {item.sub.Manufacturer && <p>Manufacturer</p>}
                  {item.sub.Manufacturer?.map((item, idx) => (
                    <p key={idx}>{item}</p>
                  ))}
                </div>
              </S.SubContent>
            </S.ListText>
            <S.SwiperWrapper>
              <ImageSlider images={item.img} />
            </S.SwiperWrapper>
          </S.ListContent>
        )}
      </S.ListWrapper>
    </>
  );
};

export default Index;
