import { Container, OpacityBlack } from './styles';

export default function SelectCard(props) {
  const setSelectedFormat = () => {
    if (Object.keys(props.format).includes('docId')) {
      props.setSelectedFormat(props.format.docId);
    } else {
      props.setSelectedFormat(props.format.id);
    }
  };

  return (
    //TODO link url 변경 필요
    <Container isSelected={props.isSelected} onClick={setSelectedFormat} length={props.length}>
      <OpacityBlack />
      <div className="card-content">
        <div className="card-title">{props.format.title}</div>
      </div>
    </Container>
  );
}
