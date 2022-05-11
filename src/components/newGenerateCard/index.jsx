import { Container, OpacityBlack } from './styles';
export default function NewGenerateSelectCard(props) {
  const linkToGenerate = () => {
    window.location.href = '/generate';
  };
  return (
    //TODO link url 변경 필요
    <Container isSelected={props.isSelected} onClick={linkToGenerate}>
      <OpacityBlack />
      <div className="card-content">
        <div className="card-head"></div>
        <div className="card-title">새로운 양식</div>
      </div>
    </Container>
  );
}
