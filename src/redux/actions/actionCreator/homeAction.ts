import { HomeAction, HomeActionType } from "./../actionTypes/homeActionType";
import { RootState } from "../../store";
import { Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import arcahorn from "../../../assets/images/arcahorn-logo.jpg";
import baccarat from "../../../assets/images/baccarat-logo.jpeg";
import fur from "../../../assets/images/fur-logo.jpg";
import lauren from "../../../assets/images/lauren-logo.jpg";
import riviere from "../../../assets/images/riviere-logo.jpg";
import trudon from "../../../assets/images/trudon-logo.jpeg";

export const getHomeState =
  (): ThunkAction<void, RootState, unknown, HomeAction> =>
  async (dispatch: Dispatch<HomeAction>) => {
    dispatch({ type: HomeActionType.HOME_PENDING });
    try {
      dispatch({
        type: HomeActionType.HOME_SUCCESS,
        payload: {
          brands: [
            { imageUrl: arcahorn, query: "arcahorn" },
            { imageUrl: baccarat, query: "baccarat" },
            { imageUrl: fur, query: "fur" },
            { imageUrl: lauren, query: "lauren" },
            { imageUrl: riviere, query: "riviere" },
            { imageUrl: trudon, query: "trudon" },
          ],
          categories: [
            {
              query: "scented-candles",
              name: "scented candles",
              imageUrl:
                "https://onlinestore.thaicong.com/wp-content/uploads/2022/07/nen-01.jpg",
            },
            {
              query: "nen-thom",
              name: "flower vase",
              imageUrl:
                "https://onlinestore.thaicong.com/wp-content/uploads/2022/07/Untitled-1-01.jpg",
            },
            {
              query: "nen-thom",
              name: "picture frames",
              imageUrl:
                "https://onlinestore.thaicong.com/wp-content/uploads/2020/04/Category-3.jpg",
            },
            {
              query: "nen-thom",
              name: "crystal",
              imageUrl:
                "https://onlinestore.thaicong.com/wp-content/uploads/2022/07/Untitled-1.jpg",
            },
            {
              query: "nen-thom",
              name: "bathroom utensil",
              imageUrl:
                "https://onlinestore.thaicong.com/wp-content/uploads/2022/07/do-nha-tam-01.jpg",
            },
            {
              query: "nen-thom",
              name: "decorations",
              imageUrl:
                "https://onlinestore.thaicong.com/wp-content/uploads/2022/07/do-trang-tri-01.jpg",
            },
            {
              query: "nen-thom",
              name: "Luxury Tray",
              imageUrl:
                "https://onlinestore.thaicong.com/wp-content/uploads/2022/07/Untitled-1-01-2.jpg",
            },
            {
              query: "nen-thom",
              name: "room lights",
              imageUrl:
                "https://onlinestore.thaicong.com/wp-content/uploads/2022/07/Untitled-1-01-1.jpg",
            },
          ],
        },
      });
    } catch (error) {
      dispatch({
        type: HomeActionType.HOME_FAIL,
        payload: "lỗi",
      });
    }
  };
