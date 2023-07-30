import * as S from './styles';

const Dropdown = ({ children, isShown }) => {
  // 클릭 이벤트를 버블링 방지를 위한 함수
  const stopPropagation = (e) => {
    e.stopPropagation();
  };
  return (
    <>
      {isShown && (
        <S.DropdownContent onClick={stopPropagation}>
          {children}
        </S.DropdownContent>
      )}
    </>
  );
};

export default Dropdown;
