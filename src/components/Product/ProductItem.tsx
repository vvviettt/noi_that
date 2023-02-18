import { Link } from "react-router-dom";
import { Product } from "../../redux/reducer/productReducer";

const ProductItem: React.FC<Product> = ({
  id,
  imageUrl,
  name,
  price,
  newPrice,
  brand,
}) => {
  return (
    <Link to={`/product/${id}`}>
      <div className="pt-[3.125rem] px-2.5 flex flex-col items-center">
        <div className="w-full aspect-square">
          <img src={imageUrl}></img>
        </div>
        <p className="text-[0.75rem] italic mt-2.5">{brand}</p>
        <p className="text-center text-[0.75rem] uppercase font-bold mt-2">
          {name}
        </p>
        <div>
          <p className="font-normal text-[0.75rem] text-center line-through">
            {newPrice} <span>{newPrice ? "VNĐ" : ""}</span>
          </p>
          <p className="font-normal text-[0.75rem] text-center">{price} VNĐ</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
