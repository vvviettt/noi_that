import { BrandBanner, CategoryBanner } from "./../../reducer/homeReducer";
export enum HomeActionType {
  HOME_PENDING = "HOME_PENDING",
  HOME_SUCCESS = "HOME_SUCCESS",
  HOME_FAIL = "HOME_FAIL",
}

interface HomePending {
  type: HomeActionType.HOME_PENDING;
}

interface HomeSuccess {
  type: HomeActionType.HOME_SUCCESS;
  payload: {
    brands: BrandBanner[];
    categories: CategoryBanner[];
  };
}

interface HomeFail {
  type: HomeActionType.HOME_FAIL;
  payload: string;
}

export type HomeAction = HomeSuccess | HomePending | HomeFail;
