import * as S from './styles';
import Projects from '../../components/Projects';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectDataSlice } from '../../store';
import { fetchDatas } from '../../store/dataSlice';

const Project = () => {
  const { projects } = useSelector(selectDataSlice);
  const dispatch = useDispatch();
  useEffect(() => {
    if (projects.length === 0) {
      dispatch(fetchDatas());
    }
  }, []);

  return (
    <S.Container>
      {projects?.map((item, idx) => (
        <Projects item={item} idx={idx} key={idx} />
      ))}
    </S.Container>
  );
};

export default Project;
