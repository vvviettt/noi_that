import {
  ProductAction,
  ProductActionType,
} from "../actions/actionTypes/productActionType";

export interface Product {
  id: string;
  name: string;
  imageUrl: string;
  brand: string;
  price: string;
  newPrice?: string;
}

interface State {
  products: Product[];
  isLoading: boolean;
  error: string | null;
}

const initialState: State = {
  products: [],
  isLoading: false,
  error: null,
};

export const productReducer = (
  state: State = initialState,
  action: ProductAction
): State => {
  switch (action.type) {
    case ProductActionType.GET_PRODUCT_BEST_SELLER_PENDING:
      return { ...state, isLoading: true };
    case ProductActionType.GET_PRODUCT_BEST_SELLER_SUCCESS:
      return { ...state, isLoading: false, products: [...action.payload] };
    case ProductActionType.GET_PRODUCT_BEST_SELLER_FAIL:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
};
