import Product from '../Product/Product';

function Products(props) {
  const { menu } = props;

  return (
    <section className="menu__section">
      {menu.map((product) => {
        return <Product title={product.title} desc={product.desc} price={product.price} key={product.id} />;
      })}
    </section>
  );
}

export default Products;
