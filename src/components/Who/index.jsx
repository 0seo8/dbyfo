import { data } from './data';
import * as S from './styles';

const Who = () => {
  return (
    <S.StudioWrapper>
      <S.Content>
        DBYFO is a Seoul based design studio (established in 2021) and consists
        of 2 creative directors who can play in a role in design
        research/strategy & industrial design & UX/Service seamlessly.
      </S.Content>
      <S.Content>
        Each members have years experience in design field and has conducted
        wide range of problem solving design projects from creating new business
        categories to designing consumer products.
      </S.Content>

      <S.CardWrapper>
        {data.map((item) => (
          <S.Card key={item['name&job']}>
            <S.NameAndCareer>{item['name&job']}</S.NameAndCareer>
            <li>{item.career1}</li>
            <li>{item.career2}</li>
            <li>{item.BA && <>BA : {item.BA}</>}</li>
            <li>{item.MA && <>MA : {item.MA}</>}</li>
            <li>{item.ect && <>{item.ect}</>}</li>
          </S.Card>
        ))}
      </S.CardWrapper>
    </S.StudioWrapper>
  );
};

export default Who;
