import * as S from './styles';
import { data } from './data';

const What = () => {
  return (
    <S.ContainerWrapper>
      <S.Content>
        DBYFO design is to provide end-to-end design service for clients.
      </S.Content>
      <S.Section>
        {data.map((item, idx) => {
          const title = Object.keys(item)[0];
          const description = Object.values(item)[0];
          return (
            <ul key={idx}>
              <strong>{title}</strong>
              <span>{description}</span>
            </ul>
          );
        })}
      </S.Section>
    </S.ContainerWrapper>
  );
};

export default What;
