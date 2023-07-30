import * as S from './styles';
import { data } from './data';
import Projects from '../../components/Projects';

const Project = () => {
  return (
    <S.Container>
      {data.map((item, idx) => (
        <Projects item={item} idx={idx} key={idx} />
      ))}
    </S.Container>
  );
};

export default Project;
