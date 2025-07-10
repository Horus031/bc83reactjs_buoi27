import DetailModal from "./detailModal";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/shoesStoreReducer";

export default function Shoes(props) {
    const dispatch = useDispatch();
  const { product } = props;
  return (
    <div>
      <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <img src={product.image} alt="" />

        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {product.name}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {product.price}$
        </p>
        <div className="flex space-x-4">
          <DetailModal product={product} />
          <button
          onClick={() => dispatch(addToCart(product))}
            type="button"
            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
