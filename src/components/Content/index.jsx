import * as S from './styes';
import { useState } from 'react';
import 'swiper/css';
import ImageSlider from '../../components/ImageSlider';
import { useSelector } from 'react-redux';

const data = [
  {
    title: 'Food Branding / 6 - 10 / FIET',
    year: 2023,
    content:
      'Loop Core는 FIET가 개발한 AI 기술 기반의 개인 맞춤형 운동 컨텐츠 Loop 서비스를 위한 측정기기입니다. 옷이나 운동 기기, 밴드에 부착하여 사용하며 내장된 센서가 사용자의 움직임을 측정하고 평가하여 올바른 운동 자세를 제안합니다. 일정 기간의 사용을 통해 누적된 고객 데이터는 운동 효과 관리를 위한 자료가 됩니다 옷에 부착될 경우는 내장된 EMS( electrical muscle stimulation ) 기능을 통하여 시간을 절약하고 운동 효과를 개선해줍니다. 기기는 2개가 한 쌍으로 충전 가능한 포터블케이스에 수납되며 다양한 기기와의 부착을 위해 매우 컴팩트한 사이즈로 디자인되었습니다. 한손에 들어오는 케이스는 여러번의 실험을 거치 작은 손에도 잘 쥐어지는 사이즈를 테스트 하였다. 다른 기기와의 연결은 자석을 이용한 일관된 구조를 적용해서 쉽게 연결할 수 있다. 운동 중에 제품을 강도를 조작해야 하거나 또는 기기의 상태를 확인해야 될 경우를 위해 쓰기 쉬운 커다란  + / - 버튼과 직관적인 라이팅 컬러를 적용하였으며 소재 또한 손에 닿는 부분은 부드러운 이중사출 기술을 적용하여 PU재질의 표면에 옷의 질감과 유사한 미세한 패텬을 적용하여 시각적인 통일감과 사용시 미끄러지는 불편함이 없도록 하였다.',
    sub: {
      project_assistants: null,
      designer: 'Euiseok Kim, SeungCheol Lee, Junku Jung',
      client: 'FIET',
      producer: null,
    },
    img: [
      'https://t1.daumcdn.net/cfile/tistory/24283C3858F778CA2E',
      'https://vungtaulocalguide.com/wp-content/uploads/2023/04/pomeranian-spitz-smiling-lying-house-260nw-2169338377.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpC3HMyo06I9XH90y6j9wjziBghapF2xueFh1iHrTGlnma0VqW61oRDmMr6XH1F5VM2UU&usqp=CAU',
    ],
  },
  {
    title: 'Food Branding / 6 - 10 / FIET',
    year: 2023,
    content:
      'Loop Core는 FIET가 개발한 AI 기술 기반의 개인 맞춤형 운동 컨텐츠 Loop 서비스를 위한 측정기기입니다. 옷이나 운동 기기, 밴드에 부착하여 사용하며 내장된 센서가 사용자의 움직임을 측정하고 평가하여 올바른 운동 자세를 제안합니다. 일정 기간의 사용을 통해 누적된 고객 데이터는 운동 효과 관리를 위한 자료가 됩니다 옷에 부착될 경우는 내장된 EMS( electrical muscle stimulation ) 기능을 통하여 시간을 절약하고 운동 효과를 개선해줍니다. 기기는 2개가 한 쌍으로 충전 가능한 포터블케이스에 수납되며 다양한 기기와의 부착을 위해 매우 컴팩트한 사이즈로 디자인되었습니다. 한손에 들어오는 케이스는 여러번의 실험을 거치 작은 손에도 잘 쥐어지는 사이즈를 테스트 하였다. 다른 기기와의 연결은 자석을 이용한 일관된 구조를 적용해서 쉽게 연결할 수 있다. 운동 중에 제품을 강도를 조작해야 하거나 또는 기기의 상태를 확인해야 될 경우를 위해 쓰기 쉬운 커다란  + / - 버튼과 직관적인 라이팅 컬러를 적용하였으며 소재 또한 손에 닿는 부분은 부드러운 이중사출 기술을 적용하여 PU재질의 표면에 옷의 질감과 유사한 미세한 패텬을 적용하여 시각적인 통일감과 사용시 미끄러지는 불편함이 없도록 하였다.',
    sub: {
      project_assistants: null,
      designer: 'Euiseok Kim, SeungCheol Lee, Junku Jung',
      client: 'FIET',
      producer: null,
    },
    img: [
      'https://t1.daumcdn.net/cfile/tistory/24283C3858F778CA2E',
      'https://vungtaulocalguide.com/wp-content/uploads/2023/04/pomeranian-spitz-smiling-lying-house-260nw-2169338377.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpC3HMyo06I9XH90y6j9wjziBghapF2xueFh1iHrTGlnma0VqW61oRDmMr6XH1F5VM2UU&usqp=CAU',
    ],
  },
  {
    title: 'Food Branding / 6 - 10 / FIET',
    year: 2023,
    content:
      'Loop Core는 FIET가 개발한 AI 기술 기반의 개인 맞춤형 운동 컨텐츠 Loop 서비스를 위한 측정기기입니다. 옷이나 운동 기기, 밴드에 부착하여 사용하며 내장된 센서가 사용자의 움직임을 측정하고 평가하여 올바른 운동 자세를 제안합니다. 일정 기간의 사용을 통해 누적된 고객 데이터는 운동 효과 관리를 위한 자료가 됩니다 옷에 부착될 경우는 내장된 EMS( electrical muscle stimulation ) 기능을 통하여 시간을 절약하고 운동 효과를 개선해줍니다. 기기는 2개가 한 쌍으로 충전 가능한 포터블케이스에 수납되며 다양한 기기와의 부착을 위해 매우 컴팩트한 사이즈로 디자인되었습니다. 한손에 들어오는 케이스는 여러번의 실험을 거치 작은 손에도 잘 쥐어지는 사이즈를 테스트 하였다. 다른 기기와의 연결은 자석을 이용한 일관된 구조를 적용해서 쉽게 연결할 수 있다. 운동 중에 제품을 강도를 조작해야 하거나 또는 기기의 상태를 확인해야 될 경우를 위해 쓰기 쉬운 커다란  + / - 버튼과 직관적인 라이팅 컬러를 적용하였으며 소재 또한 손에 닿는 부분은 부드러운 이중사출 기술을 적용하여 PU재질의 표면에 옷의 질감과 유사한 미세한 패텬을 적용하여 시각적인 통일감과 사용시 미끄러지는 불편함이 없도록 하였다.',
    sub: {
      project_assistants: null,
      designer: 'Euiseok Kim, SeungCheol Lee, Junku Jung',
      client: 'FIET',
      producer: null,
    },
    img: [
      'https://t1.daumcdn.net/cfile/tistory/24283C3858F778CA2E',
      'https://vungtaulocalguide.com/wp-content/uploads/2023/04/pomeranian-spitz-smiling-lying-house-260nw-2169338377.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpC3HMyo06I9XH90y6j9wjziBghapF2xueFh1iHrTGlnma0VqW61oRDmMr6XH1F5VM2UU&usqp=CAU',
    ],
  },
];
const Content = () => {
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
    <S.ProjectListWrapper>
      {data.map((item, idx) => (
        <S.ListWrapper key={idx} isActive={visibleIndexes.includes(idx) || ui}>
          <S.ListTitle
            onClick={() => handleToggleVisible(idx)}
            isActive={visibleIndexes.includes(idx) || ui}
          >
            <div>
              <h2>{item.title}</h2>
            </div>
            <div>
              <span>{item.year}</span>
            </div>
          </S.ListTitle>
          {(visibleIndexes.includes(idx) || ui) && (
            <S.ListContent>
              <S.ListText>
                <S.Content>{item.content}</S.Content>
                <S.SubContent>
                  {item.sub.designer && <p>Designer: {item.sub.designer}</p>}
                  {item.sub.client && <p>Client: {item.sub.client}</p>}
                </S.SubContent>
              </S.ListText>
              <div>
                <ImageSlider images={item.img} />
              </div>
            </S.ListContent>
          )}
        </S.ListWrapper>
      ))}
    </S.ProjectListWrapper>
  );
};

export default Content;
