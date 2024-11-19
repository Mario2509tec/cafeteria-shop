import logo from './images/LOGO.png';

import { ProductCard } from '../../components';
import { products } from '../../utils/products';

import css from '.AboutUsPage.module.css';

const AboutUsPage = () => {
    return (
        <div>
            <h1>Acerca de Nosotros</h1>
            <p>¡Bienvenidos a Le Pain & Maïs! Nos alegra que estés aquí para descubrir el auténtico sabor del pan de elote. En Le Pain & Maïs, cada pedido se prepara con cariño y dedicación, utilizando ingredientes seleccionados y un cuidado artesanal que respeta lo natural y auténtico. Queremos que cada mordida te conecte con la tradición y te permita disfrutar de un pan delicioso y de calidad. ¿Listo para probar un bocado de historia y amor por lo artesanal?</p>
            <img src={logo} alt="logo" />

            <div className={css.ProductList}>
            {products.map((product) => {
                return <ProductCard key={product.id} product={product} className={css.
                    ProductList_card}/>
            })}
            </div>
        </div>

    );
}

export default AboutUsPage;