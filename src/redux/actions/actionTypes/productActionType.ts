import { Product } from "../../reducer/productReducer";
export enum ProductActionType {
  GET_PRODUCT_BEST_SELLER_PENDING = "GET_PRODUCT_BEST_SELLER_PENDING",
  GET_PRODUCT_BEST_SELLER_SUCCESS = "GET_PRODUCT_BEST_SELLER_SUCCESS",
  GET_PRODUCT_BEST_SELLER_FAIL = "GET_PRODUCT_BEST_SELLER_FAIL",
}

interface ProductBestSellerPending {
  type: ProductActionType.GET_PRODUCT_BEST_SELLER_PENDING;
}

interface ProductBestSellerSuccess {
  type: ProductActionType.GET_PRODUCT_BEST_SELLER_SUCCESS;
  payload: Product[];
}

interface ProductBestSellerFail {
  type: ProductActionType.GET_PRODUCT_BEST_SELLER_FAIL;
  payload: string;
}

export type ProductAction =
  | ProductBestSellerSuccess
  | ProductBestSellerPending
  | ProductBestSellerFail;
