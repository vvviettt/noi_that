import { useLayoutEffect } from "react";
import BestSeller from "../../components/BestSeller/BestSeller";
import Header from "../../components/Header";
import Slider from "../../components/Slider";
import { useDispatch } from "react-redux";
import { getHomeState } from "../../redux/actions/actionCreator/homeAction";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Policy from "../../components/Policy/Policy";

const Home: React.FC = () => {
  const dispatch = useDispatch<any>();
  useLayoutEffect(() => {
    console.log("Home");
    dispatch(getHomeState());
  }, []);
  const { isLoading, brandBanner, categoryBanner } = useSelector(
    (state: RootState) => state.home
  );
  return (
    <>
      {isLoading ? (
        <p></p>
      ) : (
        <div className="bg-third">
          <Header />
          <Slider />
          <BestSeller />
          <div className="pt-[3.125rem] border-b-[1px] border-border"></div>
          <div className="flex justify-center pt-[3.125rem]">
            <div className="max-w-[71.25rem] w-full flex">
              {brandBanner.map((item) => {
                return (
                  <Link key={item.imageUrl} to={`/brand?q=${item.query}`}>
                    <img src={item.imageUrl} alt="" />
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="flex flex-wrap pt-[3.125rem]">
            {categoryBanner.map((item) => {
              return (
                <div
                  key={item.imageUrl}
                  className="w-1/4 group overflow-hidden relative"
                >
                  <Link to={`/category?q=${item.query}`}>
                    <img
                      style={{ transition: " all .6s ease-in-out" }}
                      className={"group-hover:scale-110 transition-transform"}
                      src={item.imageUrl}
                      alt=""
                    />
                  </Link>
                  <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-40 group-hover:hidden"></div>
                  <div className="absolute bottom-0 right-0 left-0 flex flex-col items-center pb-8">
                    <p className="text-[1.875rem] text-white uppercase font-bold text-center w-full">
                      {item.name}
                    </p>
                    <Link
                      className="text-[0.75rem] uppercase font-medium text-center w-full group-hover:underline text-white "
                      to={`/category?q=${item.query}`}
                    >
                      see all
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
          <Policy />
        </div>
      )}
    </>
  );
};

export default Home;
