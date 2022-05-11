import { Container, OpacityBlack } from './styles';

export default function SelectCard(props) {
  const setSelectedFormat = () => {
    props.setSelectedFormat(props.format.id);
  };

  return (
    //TODO link url 변경 필요
    <Container isSelected={props.isSelected} onClick={setSelectedFormat}>
      <OpacityBlack />
      <div className="card-content">
        <div className="card-head">{props.format.head}</div>
        <div className="card-title">{props.format.title}</div>
      </div>
    </Container>
  );
}
