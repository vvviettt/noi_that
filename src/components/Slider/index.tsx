import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import sofaBanner from "../../assets/images/sofa.png";
import trudonBanner from "../../assets/images/trudon.jpeg";
import santLouisBanner from "../../assets/images/sant_louis.jpeg";
import { Autoplay } from "swiper";

const Slider: React.FC = () => {
  const images: SliderData[] = [
    {
      imageUrl: sofaBanner,
      title: "Sofa Banner",
      content: "Trudon Eaux de Parfum , a singular and daring collection",
    },
    {
      imageUrl: trudonBanner,
      title: "Under your skin",
      content: "Trudon Eaux de Parfum , a singular and daring collection",
    },
    {
      imageUrl: santLouisBanner,
      title: "Under your skin",
      content: "Trudon Eaux de Parfum , a singular and daring collection",
    },
  ];

  return (
    <Swiper
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      centeredSlides={true}
    >
      {images.map((image) => {
        return (
          <SwiperSlide key={image.imageUrl}>
            <div
              style={{ backgroundImage: `url(${image.imageUrl})` }}
              className={`w-full h-[40rem] bg-cover bg-center relative bg-no-repeat`}
            ></div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Slider;
