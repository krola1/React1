import Dish from "./dish";
import './Menu.css'

export default function Menu(props) {
  console.log(props);
  return (
    <>
      <h1 className="title">Menu</h1>
      {props.meny.map((rett) => (
        <Dish key={rett.id}{...rett} />
      ))}
    </>
  );
}
