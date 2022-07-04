import './ItemList.css';
import Item from '../Item/Item';



function ItemList(props){

return (
    
    <section className="row row-cols-1 row-cols-md-3 g-4">
        {props.Items.map((item) => (
          <Item
            img={item.img}
            name={item.name}
            price={item.price}
            detail={item.detail}
          />
          ))}
    </section>
  );
}

export default ItemList;