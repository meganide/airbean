import './Product.scss'
import { useDispatch } from 'react-redux';


import { addProduct } from '../../actions/cartActions';


function Product(props) {
    const { product } = props;
    const dispatch = useDispatch();

    function handleClick() {
        const productClicked = {
            name: product.title,
            price: product.price,
            id: product.id,
            quantity: 1
        }
        dispatch(addProduct(productClicked))
      }

    return(
        <article className='product'>
            <button className='product__button product__button--font'
            onClick={() => {handleClick()}}>+</button>
            <section className='product__details'>
                <h2> {product.title} </h2>
                <p> {product.desc} </p>
            </section>
            <h2> {product.price} </h2>
        </article>
    )
}

export default Product; 