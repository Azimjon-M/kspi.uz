import React, { useState } from "react";
import kspi_logo from "../../assets/icons/logo_kspi.png";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import { AiOutlineSearch, AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import {
    setLangUz,
    setLangRu,
    setLangEn,
} from "../../redux/moduls/language/action/";

import flag_1 from "../../assets/icons/flag-uz.png";
import flag_2 from "../../assets/icons/flag-ru.png";
import flag_3 from "../../assets/icons/flag-en.png";

function Navbar() {
    const dispatch = useDispatch();
    const isLang = useSelector((state) => state.reducerLang.isLang);

    const [isFocusedSearInp, setFocusedSearInp] = useState(false);
    const [isActiveMenu, setIsActiveMenu] = useState(false);
    // search
    const formik = useFormik({
        initialValues: {
            searchText: "",
        },
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
            formik.resetForm();
        },
    });
    const handleClickSearch = () => {
        if (isFocusedSearInp && formik.values.searchText) {
            formik.handleSubmit();
        } else {
            setFocusedSearInp(!isFocusedSearInp);
        }
    };
    const handleClickClose = () => {
        setFocusedSearInp(false);
    };
    // Change Language log
    const handleClickLang = (lang) => {
        switch (lang) {
            case "uz":
                dispatch(setLangUz());
                break;
            case "ru":
                dispatch(setLangRu());
                break;
            case "en":
                dispatch(setLangEn());
                break;
            default:
                break;
        }
    };

    return (
        <div
            className={` flex flex-col justify-between sticky top-0 left-0 bg-white shadow-2xl z-50 px-4 py-2 sm:px-4 md:px-8 md:py-4 xl:px-0 xl:py-0`}
        >
            <nav className="flex justify-between">
                {/* Doimo bor */}
                <Link to="/">
                    <div className={`${isLang === "ru" ? "sm:w-[250px] xl:w-[300px] 3xl:w-[400px]" : " sm:w-[180px] xl:w-[280px] 3xl:w-[320px]" } w-[150px] flex items-center gap-x-[10px] md:gap-x-[15px] xl:my-[15px] xl:ms-[40px]`}>
                        <img
                            className="w-[32px] sm:w-[36px] md:w-[45px] xl:w-[60px] 3xl:w-[70px] h-auto"
                            src={kspi_logo}
                            alt="icon"
                        />
                        <p className="hidden sm:inline-block text-[11px] leading-4 text-[#004269] font-bold sm:text-[13px] md:text-[15px] xl:leading-6 3xl:text-[22px] xl:text-[18px]">
                            <FormattedMessage id="navLogo" />
                        </p>
                    </div>
                </Link>
                {/* Header */}
                <div className="w-full flex items-end justify-center flex-col">
                    <div className="hidden xl:flex xl:justify-between bg-[#004269] text-white px-[20px] rounded-bl-lg ">
                        <ul className="flex gap-x-[20px] text-[14px] font-medium 3xl:gap-x-[30px] 3xl:text-[16px]">
                            <li className="py-[4px]">
                                <Link
                                    target="_blank"
                                    to="https://talaba.kspi.uz/dashboard/login"
                                >
                                    <FormattedMessage id="hedHemis-tizimi" />
                                </Link>
                            </li>
                            <li className="relative after:absolute after:top-[50%] after:translate-y-[-50%] after:right-[-12px] after:w-[7px] after:h-[7px] after:border-s-2 after:border-b-2 after:border-white after:rotate-[-45deg] cursor-pointer py-[4px] mr-3 3xl:after:w-[8px] 3xl:after:h-[8px] ">
                                <div className="dropdown dropdown-hover">
                                    <div
                                        tabIndex={0}
                                        role="button"
                                        className="text-inherit"
                                    >
                                        <FormattedMessage id="hedInstitut-jurnali" />
                                    </div>
                                    <ul
                                        tabIndex={0}
                                        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 text-[#004269] font-bold"
                                    >
                                        <li>
                                            <Link
                                                target="_blank"
                                                to="https://journal.kspi.uz/"
                                            >
                                                <FormattedMessage id="hedDropInstitut-jurnali_1" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                target="_blank"
                                                to="http://wsrjournal.com/index.php/wsrj"
                                            >
                                                <FormattedMessage id="hedDropInstitut-jurnali_2" />
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="py-[4px]">
                                <Link
                                    target="_blank"
                                    to="https://conferences.kspi.uz/"
                                >
                                    <FormattedMessage id="hedKonferensyalar" />
                                </Link>
                            </li>
                            <li className="py-[4px]">
                                <Link target="_blank" to="https://my.edu.uz/">
                                    <FormattedMessage id="hedIkkinchi-talim" />
                                </Link>
                            </li>
                            <li className="py-[4px]">
                                {/* O'zimizni Page */}
                                <Link to="">
                                    <FormattedMessage id="hedOchiq-malumotlar" />
                                </Link>
                            </li>
                        </ul>
                        <div className="flex items-center justify-center">
                            <form onSubmit={formik.handleSubmit}>
                                <label
                                    className="w-auto h-full flex items-center cursor-pointer"
                                    htmlFor="searchText"
                                >
                                    <input
                                        className={`${
                                            isFocusedSearInp
                                                ? "w-[200px] border-b-[3px] border-white ms-4"
                                                : "w-[0px] -z-50"
                                        } style-transition-01 h-full focus:outline-none bg-inherit px-2`}
                                        placeholder="text..."
                                        onChange={formik.handleChange}
                                        value={formik.values.searchText}
                                        type="text"
                                        id="searchText"
                                    />
                                    <AiOutlineSearch
                                        onClick={() => handleClickSearch()}
                                        className={`${
                                            isFocusedSearInp &&
                                            !formik.values.searchText.trim()
                                                ? "hidden"
                                                : "inline-block"
                                        } text-[25px]`}
                                    />
                                    <AiOutlineClose
                                        onClick={() => handleClickClose()}
                                        className={`${
                                            !isFocusedSearInp ||
                                            formik.values.searchText.trim()
                                                ? "hidden"
                                                : "inline-block"
                                        } text-[25px] text-white`}
                                    />
                                </label>
                            </form>
                        </div>
                    </div>
                    {/* /Header */}
                    {/* Navigations */}
                    <div className="hidden w-full h-full xl:flex xl:items-center xl:justify-end px-10">
                        <ul className="flex items-center gap-x-8 text-[#004269] font-semibold 2xl:text-[20px] 3xl:gap-x-12 3xl:text-[22px] ">
                            <li className="-mr-2">
                                <Link to="/yangiliklar">
                                    <FormattedMessage id="navYangiliklar" />
                                </Link>
                            </li>
                            <li className="relative after:absolute after:top-[50%] after:translate-y-[-50%] after:right-[-15px] after:w-[8px] after:h-[8px] after:border-s-2 after:border-b-2 after:border-[#004269] after:rotate-[-45deg] 3xl:after:w-[10px] 3xl:after:h-[10px]">
                                <div className="dropdown dropdown-hover">
                                    <div
                                        tabIndex={2}
                                        role="button"
                                        className="text-inherit"
                                    >
                                        <FormattedMessage id="navInstitut" />
                                    </div>
                                    <ul
                                        tabIndex={2}
                                        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                                    >
                                        <li>
                                            <Link to="">
                                                <FormattedMessage id="navDropInstitut_1" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="">
                                                <FormattedMessage id="navDropInstitut_2" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="">
                                                <FormattedMessage id="navDropInstitut_3" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="">
                                                <FormattedMessage id="navDropInstitut_4" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="">
                                                <FormattedMessage id="navDropInstitut_5" />
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="relative after:absolute after:top-[50%] after:translate-y-[-50%] after:right-[-15px] after:w-[8px] after:h-[8px] after:border-s-2 after:border-b-2 after:border-[#004269] after:rotate-[-45deg] 3xl:after:w-[10px] 3xl:after:h-[10px]">
                                <div className="dropdown dropdown-hover">
                                    <div
                                        tabIndex={3}
                                        role="button"
                                        className="text-inherit"
                                    >
                                        <FormattedMessage id="navFaoliyat" />
                                    </div>
                                    <ul
                                        tabIndex={3}
                                        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                                    >
                                        <li>
                                            <Link to="">
                                                <FormattedMessage id="navDropFaoliyat_1" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="">
                                                <FormattedMessage id="navDropFaoliyat_2" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="">
                                                <FormattedMessage id="navDropFaoliyat_3" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="">
                                                <FormattedMessage id="navDropFaoliyat_4" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="">
                                                <FormattedMessage id="navDropFaoliyat_5" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="">
                                                <FormattedMessage id="navDropFaoliyat_6" />
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="relative after:absolute after:top-[50%] after:translate-y-[-50%] after:right-[-15px] after:w-[8px] after:h-[8px] after:border-s-2 after:border-b-2 after:border-[#004269] after:rotate-[-45deg] 3xl:after:w-[10px] 3xl:after:h-[10px]">
                                <div className="dropdown dropdown-hover">
                                    <div
                                        tabIndex={4}
                                        role="button"
                                        className="text-inherit"
                                    >
                                        <FormattedMessage id="navTuzilma" />
                                    </div>
                                    <ul
                                        tabIndex={4}
                                        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                                    >
                                        <li>
                                            <Link to="">
                                                <FormattedMessage id="navDropTuzilma_1" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="">
                                                <FormattedMessage id="navDropTuzilma_2" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="">
                                                <FormattedMessage id="navDropTuzilma_3" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="">
                                                <FormattedMessage id="navDropTuzilma_4" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="">
                                                <FormattedMessage id="navDropTuzilma_5" />
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="relative after:absolute after:top-[50%] after:translate-y-[-50%] after:right-[-15px] after:w-[8px] after:h-[8px] after:border-s-2 after:border-b-2 after:border-[#004269] after:rotate-[-45deg] 3xl:after:w-[10px] 3xl:after:h-[10px]">
                                <div className="dropdown dropdown-hover">
                                    <div
                                        tabIndex={5}
                                        role="button"
                                        className="text-inherit"
                                    >
                                        <FormattedMessage id="navTalabalar" />
                                    </div>
                                    <ul
                                        tabIndex={5}
                                        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                                    >
                                        <li>
                                            <Link to="">
                                                <FormattedMessage id="navDropTalabalar_1" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="">
                                                <FormattedMessage id="navDropTalabalar_2" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="">
                                                <FormattedMessage id="navDropTalabalar_3" />
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="relative after:absolute after:top-[50%] after:translate-y-[-50%] after:right-[-15px] after:w-[8px] after:h-[8px] after:border-s-2 after:border-b-2 after:border-[#004269] after:rotate-[-45deg] 3xl:after:w-[10px] 3xl:after:h-[10px]">
                                <div className="dropdown dropdown-hover">
                                    <div
                                        tabIndex={6}
                                        role="button"
                                        className="text-inherit"
                                    >
                                        <FormattedMessage id="navAbiturient" />
                                    </div>
                                    <ul
                                        tabIndex={6}
                                        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                                    >
                                        <li>
                                            <Link to="">
                                                <FormattedMessage id="navDropAbiturient_1" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="">
                                            <FormattedMessage id="navDropAbiturient_2" />
                                                
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="">
                                            <FormattedMessage id="navDropAbiturient_3" />

                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="">
                                            <FormattedMessage id="navDropAbiturient_4" />

                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="">
                                            <FormattedMessage id="navDropAbiturient_5" />

                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="">
                                            <FormattedMessage id="navDropAbiturient_6" />

                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <div className="flex items-end gap-x-2 ms-8">
                                    <img
                                        onClick={() => handleClickLang("uz")}
                                        className={` ${
                                            isLang === "uz" &&
                                            "border-b-[3px] border-[#004269]"
                                        } w-[30px] cursor-pointer 3xl:w-[35px]`}
                                        src={flag_1}
                                        alt="flag uz"
                                    />
                                    <img
                                        onClick={() => handleClickLang("ru")}
                                        className={` ${
                                            isLang === "ru" &&
                                            "border-b-[3px] border-[#004269]"
                                        } w-[30px] cursor-pointer 3xl:w-[35px]`}
                                        src={flag_2}
                                        alt="flag ru"
                                    />
                                    <img
                                        onClick={() => handleClickLang("en")}
                                        className={` ${
                                            isLang === "en" &&
                                            "border-b-[3px] border-[#004269]"
                                        } w-[30px] cursor-pointer 3xl:w-[35px]`}
                                        src={flag_3}
                                        alt="flag en"
                                    />
                                </div>
                            </li>
                        </ul>
                    </div>
                    {/* /Navigations */}
                    {/* Menu */}
                    <button
                        onClick={() => setIsActiveMenu(!isActiveMenu)}
                        className="btn btn-sm btn-outline xl:hidden flex items-center gap-x-2 font-medium md:btn-md text-[#004269]"
                    >
                        {isActiveMenu ? <AiOutlineClose /> : <AiOutlineMenu />}
                        MENU
                    </button>
                    {/* /Menu */}
                </div>
            </nav>
            {/* Mobile Drop */}
            <div className={`${isActiveMenu ? "h-[calc(100vh-91px)] z-50 opacity-100 translate-x-0" : "h-0 -z-50 opacity-0 -translate-x-full"} style-transition-02 absolute top-[92px] left-0 w-full  bg-[#004269] text-white`}>
                hello
            </div>
            {/* /Mobile Drop */}
        </div>
    );
}

export default Navbar;
