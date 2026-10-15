import './Dish.css'



export default function Dish(props) {





  return (
    <div className='dish'>
      <p>{props.tittel}</p>
      <p>{props.pris}</p>
      <p>{props.ingredienser}</p>
      <p>{props.kategori}</p>
    </div>
  );
}