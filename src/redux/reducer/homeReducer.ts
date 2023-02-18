import {
  HomeAction,
  HomeActionType,
} from "./../actions/actionTypes/homeActionType";

export interface BrandBanner {
  imageUrl: string;
  query: string;
}

export interface CategoryBanner {
  imageUrl: string;
  query: string;
  name: string;
}
interface State {
  isLoading: boolean;
  error?: string;
  brandBanner: BrandBanner[];
  categoryBanner: CategoryBanner[];
}
const initialState: State = {
  isLoading: true,
  brandBanner: [],
  categoryBanner: [],
};

export const homeReducer = (
  state: State = initialState,
  action: HomeAction
): State => {
  switch (action.type) {
    case HomeActionType.HOME_PENDING:
      return { ...state, isLoading: true };
    case HomeActionType.HOME_SUCCESS:
      return {
        ...state,
        isLoading: false,
        brandBanner: action.payload.brands,
        categoryBanner: action.payload.categories,
      };
    case HomeActionType.HOME_FAIL:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
};
