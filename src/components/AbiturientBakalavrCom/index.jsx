import React from "react";
import { MdOutlineSubject } from "react-icons/md";
import { RiNumbersFill } from "react-icons/ri";
import { MdOutlineCreditScore } from "react-icons/md";
import { GrCatalog } from "react-icons/gr";
import bachlorImg from "../../assets/images/bachelor.jpg";
import { Link } from "react-router-dom";

function AbiturientBakalavrCom() {
  return (
    <div className="md:min-h-[calc(100vh-565px)] lg:min-h-[calc(100vh-400px)]">
      <div className="max-h-vh">
        <div className="w-full absolute top-[15%] sm:top-[18%] md:top-[25%] lg:top-[25%] xl:top-[40%]">
          <div
            className="text-center text-3xl sm:text-5xl md:text-7xl font-bold text-gray-100 text-shadow"
            style={{ textShadow: "0 0 20px rgba(0,0,0, 1)" }}
          >
            Bakalavr ta'limi
          </div>
          <p
            className="text-gray-100 text-2xl text-center hidden md:block md:px-12 lg:px-32 xl:px-44 mt-5 leading-10 text-shadaw"
            style={{ textShadow: "0 0 30px rgba(0,0,0, 1)" }}
          >
            QDPI turli xil qarashlar, tajribalar va istiqbollarga hissa
            qo'shadigan iqtidorli, yuqori natijalarga erishgan talabalarni qabul
            qiladi. Biz sizni ushbu faol akademik hamjamiyatga qanday qo'shilish
            haqida ko'proq ma'lumot olishga taklif qilamiz.
          </p>
        </div>
        <img src={bachlorImg} className="w-full h-full" alt="" />
      </div>
      <div className="max-w-7xl mx-5 xl:mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-5 -mt-8 sm:-mt-10 lg:-mt-28 mb-16">
        <Link
          // to="/dtsvaMalaka"
          to="#"
          className="shadow-xl flex justify-center items-center md:h-60 py-5 rounded-lg bg-slate-200 group hover:bg-[#2A4D64] hover:scale-105 ease-in-out duration-300"
        >
          <div>
            <MdOutlineCreditScore className="text-7xl md:text-8xl mx-auto group-hover:text-slate-200" />
            <p className="text-xl text-center font-bold group-hover:text-slate-200 mt-2">
              O'tish ballari
            </p>
          </div>
        </Link>
        <Link
          // to="/oquvRejalari"
          to="#"
          className="shadow-xl flex justify-center items-center md:h-60 py-5 rounded-lg bg-slate-200 group hover:bg-[#2A4D64] hover:scale-105 ease-in-out duration-300"
        >
          <div>
            <MdOutlineSubject className="text-7xl md:text-8xl mx-auto group-hover:text-slate-200" />
            <p className="text-xl text-center font-bold group-hover:text-slate-200 mt-2">
              Fanlar majmuasi
            </p>
          </div>
        </Link>
        <Link
          // to="/fanDasturlari"
          to="#"
          className="shadow-xl flex justify-center items-center md:h-60 py-5 rounded-lg bg-slate-200 group hover:bg-[#2A4D64] hover:scale-105 ease-in-out duration-300"
        >
          <div>
            <RiNumbersFill className="text-7xl md:text-8xl mx-auto group-hover:text-slate-200" />
            <p className="text-xl text-center font-bold group-hover:text-slate-200 mt-2">
              Qabul kvotasi
            </p>
          </div>
        </Link>
        <Link
          // to="/fanKatalogi"
          to="#"
          className="shadow-xl flex justify-center items-center md:h-60 py-5 rounded-lg bg-slate-200 group hover:bg-[#2A4D64] hover:scale-105 ease-in-out duration-300"
        >
          <div>
            <GrCatalog className="text-7xl md:text-8xl mx-auto group-hover:text-slate-200" />
            <p className="text-xl text-center font-bold group-hover:text-slate-200 mt-2">
              Xorijiy fuqaro
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default AbiturientBakalavrCom;
