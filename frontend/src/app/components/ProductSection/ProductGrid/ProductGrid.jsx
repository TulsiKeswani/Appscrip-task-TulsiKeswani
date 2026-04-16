import styles from './ProductGrid.module.css'
import ProductCard from '../ProductCard/ProductCard';

export default function ProductGrid({data,isSidebarOpen}) {
  return (
    <div   className={`${styles.productContainer} ${
        isSidebarOpen ? styles.three : styles.four
      }`}>
        {
          data.map((product) => (<ProductCard imgSrc={product.image} title={product.title}/>))
        }
    </div>
  )
}
