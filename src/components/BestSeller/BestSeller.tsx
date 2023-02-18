import { useEffect } from "react";
import { Link } from "react-router-dom";
import { getBestSellerProduct } from "../../redux/actions/actionCreator/productAction";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import ProductItemLoading from "../Product/ProductItemLoading";
import ProductItem from "../Product/ProductItem";

const BestSeller: React.FC = () => {
  const dispatch = useDispatch<any>();
  useEffect(() => {
    dispatch(getBestSellerProduct());
  }, []);
  const { product } = useSelector((state: RootState) => state);

  return (
    <div className=" flex justify-center bg-third">
      <div className="max-w-[71.25rem] w-full px-8 pt-[6.25rem] flex flex-col items-center">
        <h2 className="text-[3rem] uppercase font-semibold">
          Best seller product
        </h2>
        <Link
          className="uppercase text-[0.75rem] font-semibold hover:underline"
          to="/product/best-seller"
        >
          See all
        </Link>
        <div className="flex w-full flex-wrap">
          {product.isLoading || product.products.length === 0
            ? [1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4].map((item, index) => (
                <ProductItemLoading key={index} />
              ))
            : product.products.map((item, index) => (
                <div className="w-1/4">
                  <ProductItem {...item} key={index} />
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default BestSeller;
