import { useStore } from '@nanostores/solid';
import { state } from '../store/store';

const ProductList = () => {
  const s = useStore(state);
  return (
    <ul
      role='list'
      class='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'
    >
      <li>Product 1</li>
      <li>Product 2</li>
      <li>Product 3</li>
      <li>Product 4</li>
      <li>Product 5</li>
    </ul>
  );
};

export default ProductList;
