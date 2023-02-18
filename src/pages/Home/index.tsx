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
          <div className="flex">
            <div className="px-2.5 py-[3.125rem] flex flex-col items-center w-1/4">
              <div className="w-8 h-8">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                  <path d="M512 80c8.8 0 16 7.2 16 16v32H48V96c0-8.8 7.2-16 16-16H512zm16 144V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V224H528zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm56 304c-13.3 0-24 10.7-24 24s10.7 24 24 24h48c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm128 0c-13.3 0-24 10.7-24 24s10.7 24 24 24H360c13.3 0 24-10.7 24-24s-10.7-24-24-24H248z" />
                </svg>
              </div>
              <p className="text-center uppercase text-[0.625rem] font-semibold mt-5 tracking-[0.125rem]">
                EASY PAYMENT AND
                <br />
                SECURITY
              </p>
            </div>
            <div className="px-2.5 py-[3.125rem] flex flex-col items-center w-1/4">
              <div className="w-8 h-8">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                  <path d="M112 0C85.5 0 64 21.5 64 48V96H16c-8.8 0-16 7.2-16 16s7.2 16 16 16H64 272c8.8 0 16 7.2 16 16s-7.2 16-16 16H64 48c-8.8 0-16 7.2-16 16s7.2 16 16 16H64 240c8.8 0 16 7.2 16 16s-7.2 16-16 16H64 16c-8.8 0-16 7.2-16 16s7.2 16 16 16H64 208c8.8 0 16 7.2 16 16s-7.2 16-16 16H64V416c0 53 43 96 96 96s96-43 96-96H384c0 53 43 96 96 96s96-43 96-96h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V288 256 237.3c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7H416V48c0-26.5-21.5-48-48-48H112zM544 237.3V256H416V160h50.7L544 237.3zM160 368a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm272 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0z" />
                </svg>
              </div>
              <p className="text-center uppercase text-[0.625rem] font-semibold mt-5 tracking-[0.125rem]">
                GGUARANTEE DELIVERY
                <br />
                NATIONWIDE
              </p>
            </div>
            <div className="px-2.5 py-[3.125rem] flex flex-col items-center w-1/4">
              <div className="w-8 h-8">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
                </svg>
              </div>
              <p className="text-center uppercase text-[0.625rem] font-semibold mt-5 tracking-[0.125rem]">
                HOTLINE 0914938844
                <br /> (10:00 - 19:00)
              </p>
            </div>
            <div className="px-2.5 py-[3.125rem] flex flex-col items-center w-1/4">
              <div className="w-8 h-8">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M240 0c4.6 0 9.2 1 13.4 2.9L441.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.7 363.2c-16.7 8-36.1 8-52.8 0C41.3 420.7 .5 239.2 0 140c-.1-26.2 16.3-47.9 38.3-57.2L226.7 2.9C230.8 1 235.4 0 240 0zm0 66.8V444.8C378 378 415.1 230.1 416 141.4L240 66.8l0 0z" />
                </svg>
              </div>
              <p className="text-center uppercase text-[0.625rem] font-semibold mt-5 tracking-[0.125rem]">
                PRODUCT COMMITMENT
                <br /> GENUINE
              </p>
            </div>
          </div>
          <Footer />
        </div>
      )}
    </>
  );
};

export default Home;
