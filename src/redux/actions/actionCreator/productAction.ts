import { RootState } from "../../store";
import { Dispatch } from "redux";
import {
  ProductAction,
  ProductActionType,
} from "../actionTypes/productActionType";
import { ThunkAction } from "redux-thunk";

export const getBestSellerProduct =
  (): ThunkAction<void, RootState, unknown, ProductAction> =>
  async (dispatch: Dispatch, getState) => {
    if (getState().product.products.length === 0) {
      dispatch({ type: ProductActionType.GET_PRODUCT_BEST_SELLER_PENDING });
      try {
        setTimeout(() => {
          dispatch({
            type: ProductActionType.GET_PRODUCT_BEST_SELLER_SUCCESS,
            payload: [
              {
                id: "msafbv384w3r2d",
                brand: "Sant Louis",
                name: "BỘ QUÀ TẶNG 2 NẾN MINI HOLIDAY 2022 GABRIEL – GLORIA",
                price: "30,000,000",
                imageUrl:
                  "https://onlinestore.thaicong.com/wp-content/uploads/cache/2022/11/600x600/xs-christmas-2-1.jpg",
              },
              {
                id: "msafbv384wbc",
                brand: "Sant Louis",
                name: "BỘ QUÀ TẶNG 2 NẾN MINI HOLIDAY 2022 GABRIEL – GLORIA",
                price: "30,000,000",
                imageUrl:
                  "https://onlinestore.thaicong.com/wp-content/uploads/cache/2022/11/600x600/xs-christmas-2-1.jpg",
              },
              {
                id: "msafbv384sdcasbc",
                brand: "Sant Louis",
                name: "Nến thơm holiday",
                price: "30,000,000",
                imageUrl:
                  "https://onlinestore.thaicong.com/wp-content/uploads/cache/2022/11/600x600/xs-christmas-2-1.jpg",
              },
              {
                id: "msafbv3csdc84wbc",
                brand: "Sant Louis",
                name: "BỘ QUÀ TẶNG 2 NẾN MINI HOLIDAY 2022 GABRIEL – GLORIA",
                price: "30,000,000",
                imageUrl:
                  "https://onlinestore.thaicong.com/wp-content/uploads/cache/2022/11/600x600/xs-christmas-2-1.jpg",
              },
              {
                id: "msafbv3csdc84wbc",
                brand: "Sant Louis",
                name: "BỘ QUÀ TẶNG 2 NẾN MINI HOLIDAY 2022 GABRIEL – GLORIA",
                price: "30,000,000",
                imageUrl:
                  "https://onlinestore.thaicong.com/wp-content/uploads/cache/2022/11/600x600/xs-christmas-2-1.jpg",
              },
              {
                id: "msafbv3csdc84wbc",
                brand: "Sant Louis",
                name: "BỘ QUÀ TẶNG 2 NẾN MINI HOLIDAY 2022 GABRIEL – GLORIA",
                price: "30,000,000",
                imageUrl:
                  "https://onlinestore.thaicong.com/wp-content/uploads/cache/2022/11/600x600/xs-christmas-2-1.jpg",
              },
              {
                id: "msafbv3csdc84wbc",
                brand: "Sant Louis",
                name: "BỘ QUÀ TẶNG 2 NẾN MINI HOLIDAY 2022 GABRIEL – GLORIA",
                price: "30,000,000",
                imageUrl:
                  "https://onlinestore.thaicong.com/wp-content/uploads/cache/2022/11/600x600/xs-christmas-2-1.jpg",
              },
              {
                id: "msafbv3csdc84wbc",
                brand: "Sant Louis",
                name: "BỘ QUÀ TẶNG 2 NẾN MINI HOLIDAY 2022 GABRIEL – GLORIA",
                price: "30,000,000",
                imageUrl:
                  "https://onlinestore.thaicong.com/wp-content/uploads/cache/2022/11/600x600/xs-christmas-2-1.jpg",
              },
              {
                id: "msafbv384w3r2d",
                brand: "Sant Louis",
                name: "BỘ QUÀ TẶNG 2 NẾN MINI HOLIDAY 2022 GABRIEL – GLORIA",
                price: "30,000,000",
                imageUrl:
                  "https://onlinestore.thaicong.com/wp-content/uploads/cache/2022/11/600x600/xs-christmas-2-1.jpg",
              },
              {
                id: "msafbv384wbc",
                brand: "Sant Louis",
                name: "BỘ QUÀ TẶNG 2 NẾN MINI HOLIDAY 2022 GABRIEL – GLORIA",
                price: "30,000,000",
                imageUrl:
                  "https://onlinestore.thaicong.com/wp-content/uploads/cache/2022/11/600x600/xs-christmas-2-1.jpg",
              },
              {
                id: "msafbv384sdcasbc",
                brand: "Sant Louis",
                name: "Nến thơm holiday",
                price: "30,000,000",
                imageUrl:
                  "https://onlinestore.thaicong.com/wp-content/uploads/cache/2022/11/600x600/xs-christmas-2-1.jpg",
              },
              {
                id: "msafbv3csdc84wbc",
                brand: "Sant Louis",
                name: "BỘ QUÀ TẶNG 2 NẾN MINI HOLIDAY 2022 GABRIEL – GLORIA",
                price: "30,000,000",
                imageUrl:
                  "https://onlinestore.thaicong.com/wp-content/uploads/cache/2022/11/600x600/xs-christmas-2-1.jpg",
              },
            ],
          });
        }, 2000);
      } catch (error) {
        dispatch({
          type: ProductActionType.GET_PRODUCT_BEST_SELLER_FAIL,
          payload: "lỗi",
        });
      }
    }
  };
