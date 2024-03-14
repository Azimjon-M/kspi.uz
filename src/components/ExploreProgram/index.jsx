import React from "react";
import { Link } from "react-router-dom";
import dasturUchun from "../../assets/images/dasturUchun.jpg";
import dasturUchun1 from "../../assets/images/dasturUchun1.jpg";
import abiturient from "../../assets/images/abiturient.jpg";
import bakalavr from "../../assets/images/bakalavr.jpg";

const ExploreProgram = () => {
  const data = [
    {
      id: 0,
      title: "Yo'nalishingni tanla.!",
      content: "Lorem ipsum dhuycbcc  ewdbncnwiudcbnsi niwdc iuxdbhisnx",
      img: dasturUchun,
      link: "/fakultetlar",
    },
    {
      id: 1,
      title: "QDPIda transfer",
      content: "Ichki transferlar uchun online ariza topshirish",
      img: dasturUchun1,
      link: "https://transfer.edu.uz/uz",
    },
    {
      id: 2,
      title: "Bakalavr bitiruvchilari",
      content: "Lorem ipsum dhuycbcc  ewdbncnwiudcbnsi niwdc iuxdbhisnx",
      img: bakalavr,
      link: "/abiturient-magistratura",
    },
    {
      id: 3,
      title: "Abiturientlar",
      content: "Lorem ipsum dhuycbcc  ewdbncnwiudcbnsi niwdc iuxdbhisnx",
      img: abiturient,
      link: "/abiturient-bakalavriat",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto my-5 md:my-16">
      <h2 className="text-center text-4xl text-[#004269] mb-10 font-semibold">
        Bizning dasturlarimiz 
      </h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        {data.map((item) => (
          <div
            className="card max-w-80 h-[450px] object-cover bg-base-100 shadow-md hover:shadow-xl hover:-translate-y-1 mx-auto transition-transform ease-in-out duration-300"
            key={item.id}
          >
            <figure className="relative">
              <img
                className="h-[320px] object-cover object-center"
                src={item.img}
                alt="Shoes"
              />
              <div className="absolute bottom-0 w-full h-1 bg-[#004269]"></div>
            </figure>
            <div className="card-body p-5">
              <h2 className="card-title text-[#004269]">{item.title}</h2>
              <p className="line-clamp-2">{item.content}</p>
              <div className="card-actions justify-start">
                <Link
                  to={item.link}
                  className="border-[#004269] px-6 py-2 rounded-2xl text-white bg-[#004269]"
                >
                  Batafsil
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreProgram;
