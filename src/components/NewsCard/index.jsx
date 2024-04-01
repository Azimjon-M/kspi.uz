import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Breadcrumb from "../Breadcrumb";
import APIYangilik from "../../services/yangilik";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useSelector } from "react-redux";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./styles.css";
// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

const NewsCard = () => {
  const Lang = useSelector(state => state.reducerLang.isLang)
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { id } = useParams();
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadNews = async () => {
      try {
        const res = await APIYangilik.getById(id);
        setNews(res.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching news data:", error);
        setLoading(false);
      }
    };
    loadNews();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="md:px-5 xl:px-10 md:min-h-[calc(100vh-565px)] lg:min-h-[calc(100vh-400px)]">
      <div className="border-b-2 border-[#004269] block w-full">
        <Breadcrumb
          steps={[
            { text: "Bosh sahifa", link: "/" },
            { text: "Yangiliklar", link: "/yangiliklar" },
            { text: "Yangilik" },
          ]}
        />
      </div>

      <div className="p-10 xl:px-0 max-w-7xl mx-auto">
        <div className="col-span-3">
          {/* TITLE */}
          <h2 className="text-xl text-[#004269] xl:text-3xl 2xl:text-4xl font-bold text-center mb-5">
            {news && news[`title_${Lang}`]}
          </h2>

          {/* IMAGES */}
          <img className="mb-5" src={news?.rasm_1} alt="news" />
          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2"
          >
            <SwiperSlide>
              <img src={news?.rasm_1} alt="news" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={news?.rasm_2} alt="news" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={news?.rasm_3} alt="news" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={news?.rasm_4} alt="news" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={news?.rasm_5} alt="news" />
            </SwiperSlide>
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={news?.rasm_1} alt="news" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={news?.rasm_2} alt="news" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={news?.rasm_3} alt="news" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={news?.rasm_4} alt="news" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={news?.rasm_5} alt="news" />
            </SwiperSlide>
          </Swiper>

          {/* SUBTITLE */}
          <h2
            className={`${
              news && news.subtitle_uz ? "" : "hidden"
            } text-lg text-[#004269] xl:text-2xl 2xl:text-3xl font-bold text-center mb-5`}
          >
            {news && news[`subtitle_${Lang}`]}
          </h2>

          {/* PARAGRAPH */}
          <div className="d-inline-block">
            <p className="d-inline-block text-3xl border-2 border-[#004269] px-5 py-3 float-left mr-3">
              {news && news[`body_0_${Lang}`] && news[`body_0_${Lang}`].slice(0, 1)}
            </p>
            <span className="text-md lg:text-lg xl:text-xl">
              {news && news[`body_0_${Lang}`] && news[`body_0_${Lang}`].slice(1)}
            </span>
          </div>
          <div className="text-md lg:text-lg xl:text-xl">
            <p>
              <span className={`${news && news[`body_1_${Lang}`] ? "ml-5" : "hidden"}`}>
                {news && news[`body_1_${Lang}`] && news[`body_1_${Lang}`].slice(0, 1)}
              </span>
              {news && news[`body_1_${Lang}`] && news[`body_1_${Lang}`].slice(1)}
            </p>
          </div>
          <div className="text-md lg:text-lg xl:text-xl">
            <p>
              <span className={`${news && news[`body_2_${Lang}`] ? "ml-5" : "hidden"}`}>
                {news && news[`body_2_${Lang}`] && news[`body_2_${Lang}`].slice(0, 1)}
              </span>
              {news && news[`body_2_${Lang}`] && news[`body_2_${Lang}`].slice(1)}
            </p>
          </div>
          <div className="text-md lg:text-lg xl:text-xl">
            <p>
              <span className={`${news && news[`body_3_${Lang}`] ? "ml-5" : "hidden"}`}>
                {news && news[`body_3_${Lang}`] && news[`body_3_${Lang}`].slice(0, 1)}
              </span>
              {news && news[`body_3_${Lang}`] && news[`body_3_${Lang}`].slice(1)}
            </p>
          </div>
          <div className="text-md lg:text-lg xl:text-xl">
            <p>
              <span className={`${news && news[`body_4_${Lang}`] ? "ml-5" : "hidden"}`}>
                {news && news[`body_4_${Lang}`] && news[`body_4_${Lang}`].slice(0, 1)}
              </span>
              {news && news[`body_4_${Lang}`] && news[`body_4_${Lang}`].slice(1)}
            </p>
          </div>
          <div className="text-md lg:text-lg xl:text-xl">
            <p>
              <span className={`${news && news[`body_5_${Lang}`] ? "ml-5" : "hidden"}`}>

                {news && news[`body_5_${Lang}`] && news[`body_5_${Lang}`].slice(0, 1)}
              </span>
              {news && news[`body_5_${Lang}`] && news[`body_5_${Lang}`].slice(1)}
            </p>
          </div>
          <div className="text-md lg:text-lg xl:text-xl">
            <p>
              <span className={`${news && news[`body_6_${Lang}`] ? "ml-5" : "hidden"}`}>
                {news && news[`body_6_${Lang}`] && news[`body_6_${Lang}`].slice(0, 1)}
              </span>
              {news && news[`body_6_${Lang}`] && news[`body_6_${Lang}`].slice(1)}
            </p>
          </div>
          <div className="text-md lg:text-lg xl:text-xl">
            <p>
              <span className={`${news && news[`body_7_${Lang}`] ? "ml-5" : "hidden"}`}>
                {news && news[`body_7_${Lang}`] && news[`body_7_${Lang}`].slice(0, 1)}
              </span>
              {news && news[`body_7_${Lang}`] && news[`body_7_${Lang}`].slice(1)}
            </p>
          </div>
          <div className="text-md lg:text-lg xl:text-xl">
            <p>
              <span className={`${news && news[`body_8_${Lang}`] ? "ml-5" : "hidden"}`}>
                {news && news[`body_8_${Lang}`] && news[`body_8_${Lang}`].slice(0, 1)}
              </span>
              {news && news[`body_8_${Lang}`] && news[`body_8_${Lang}`].slice(1)}
            </p>
          </div>
          <div className="text-md lg:text-lg xl:text-xl">
            <p>
              <span className={`${news && news[`body_9_${Lang}`] ? "ml-5" : "hidden"}`}>
                {news && news[`body_9_${Lang}`] && news[`body_9_${Lang}`].slice(0, 1)}
              </span>
              {news && news[`body_9_${Lang}`] && news[`body_9_${Lang}`].slice(1)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;





