import './Products.scss'
import { useDispatch } from 'react-redux';

import { addProduct } from '../../actions/AddProduct';


function Products(props) {
    const { title, desc, price } = props;

    const dispatch = useDispatch();

    function handelClick() {
        const product = {
            name: title,
            price: price
        }
        dispatch(addProduct(product))
      }

    return(
        <article className='product'>
            <button className='product__button product__button-font'
            onClick={() => {handelClick()}}>+</button>
            <section className='product__details'>
                <h2> {title} </h2>
                <p> {desc} </p>
            </section>
            <h2> {price} </h2>
        </article>
    )
}

export default Products; 