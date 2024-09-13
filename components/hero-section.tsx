import type { NextPage } from "next";
import { useCallback } from "react";

export type HeroSectionType = {
  className?: string;
};

const HeroSection: NextPage<HeroSectionType> = ({ className = "" }) => {
  const onTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='aboutMeSection']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onTextClick1 = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='servicesSection']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onTextClick2 = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='astrologerConspectsSection']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onTextClick3 = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='astroYogaSection']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onTextClick5 = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='infoContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onBottomDivClick = () => {
    window.location.href = "https://wa.me/+79994455494"; // Replace with your desired URL
  };

  return (
    <section
      className={`self-stretch flex flex-col items-end justify-start pt-[25px] pb-[17px] pl-0 pr-[149px] box-border relative gap-[49px] max-w-full text-center text-mini text-black font-playfair-display mq750:gap-6 mq750:pt-5 mq750:pr-[37px] mq750:pb-5 mq750:box-border mq1225:pr-[74px] mq1225:box-border ${className}`}
    >
      <header className="mr-[-150px] w-[1441px] flex flex-row items-center justify-center py-0 px-5 box-border gap-[92px] max-w-[112%] shrink-0 z-[1] text-left text-mini text-black font-ibm-plex-sans mq750:gap-[23px] mq1050:w-[510px] mq1225:gap-[46px]">
        <div className="w-[931px] flex flex-row items-center justify-between gap-5 max-w-full mq1050:hidden">
          <a
            className="[text-decoration:none] relative text-[inherit] inline-block min-w-[66px] whitespace-nowrap cursor-pointer"
            onClick={onTextClick}
          >
            ОБО МНЕ
          </a>
          <a
            className="[text-decoration:none] relative text-[inherit] inline-block min-w-[117px] cursor-pointer"
            onClick={onTextClick1}
          >
            КОНСУЛЬТАЦИИ
          </a>
          <a
            className="[text-decoration:none] relative text-[inherit] cursor-pointer"
            onClick={onTextClick2}
          >
            КОНСПЕКТЫ/ОБУЧЕНИЕ
          </a>
          <a
            className="[text-decoration:none] relative text-[inherit] inline-block min-w-[111px] cursor-pointer"
            onClick={onTextClick3}
          >
            ЙОГА-РЕТРИТЫ
          </a>
          <a href="https://www.instagram.com/p/C6RWBDVsACw/?igsh=cWFyc3M1cXdzYnoy" className="[text-decoration:none] relative text-[inherit] inline-block min-w-[64px]">
            ОТЗЫВЫ
          </a>
          <a
            className="[text-decoration:none] relative text-[inherit] inline-block min-w-[80px] cursor-pointer"
            onClick={onTextClick5}
          >
            КОНТАКТЫ
          </a>
          <div className="rounded-31xl bg-beige-200 flex flex-row items-center justify-center py-[15px] px-2.5 whitespace-nowrap">
            <div className="relative">ЛИЧНЫЙ КАБИНЕТ</div>
          </div>
        </div>
        <div className="w-[98px] rounded-3xl border-gray border-[1px] border-solid box-border flex flex-row items-center justify-start py-0 pl-0 pr-1.5 gap-2 text-3xs-5 text-gray">
          <div className="w-9 rounded-[22.58px] bg-gray border-gray border-[0.9px] border-solid box-border flex flex-row items-center justify-center py-[11px] px-[9px] text-oldlace">
            <div className="relative inline-block min-w-[17px]">РУС</div>
          </div>
          <div className="relative inline-block min-w-[19px]">ENG</div>
          <div className="relative inline-block min-w-[19px]">中文</div>
        </div>
      </header>
      <div className="w-[1151px] flex flex-row items-end justify-center flex-wrap content-end py-0 pl-5 pr-0.5 box-border gap-x-[60px] gap-y-[58px] max-w-full z-[1] mq750:gap-[29px]">
        <div className="flex-1 flex flex-row items-end justify-between py-3 px-[191px] box-border bg-[url('/herophoto@3x.png')] bg-cover bg-no-repeat bg-[top] min-w-[335px] min-h-[569px] max-w-full gap-5 mq750:flex-wrap mq750:justify-center mq750:pl-[95px] mq750:pr-[95px] mq750:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
          <img
            className="h-[21.8px] w-[21.8px] relative"
            alt=""
            src="/telegram.svg"
          />
          <img
            className="h-[20.4px] w-[27.8px] relative"
            alt=""
            src="/youtube.svg"
          />
          <img
            className="h-[21px] w-[21px] cursor-pointer relative"
            alt=""
            src="/instagram.svg"
            // onClick={}
          />
        </div>
        <div className="w-[453px] flex flex-col items-end justify-start gap-1 max-w-full">
          <div className="self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-7">
            <img
              className="h-[236.5px] w-[262px] relative"
              loading="lazy"
              alt=""
              src="/vector.svg"
            />
          </div>
          <div className="self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[91px] font-ibm-plex-sans">
            <div className="shadow-[1px_1px_4px_#c8baa1] rounded-31xl [background:conic-gradient(from_212.53deg_at_50%_50%,_#f2d399_-134.63deg,_#f2deb6_32.93deg,_#fbe6be_156.79deg,_#f2d399_225.37deg,_#f2deb6_392.93deg)] flex flex-row items-start justify-start py-[11px] px-[18px]">
              <div className="h-[62px] w-[262px] relative rounded-31xl [background:conic-gradient(from_212.53deg_at_50%_50%,_#f2d399_-134.63deg,_#f2deb6_32.93deg,_#fbe6be_156.79deg,_#f2d399_225.37deg,_#f2deb6_392.93deg)] hidden" />
              <div onClick={onBottomDivClick} className="relative cursor-pointer uppercase z-[1]">
                <p className="m-0">{`Записаться на `}</p>
                <p className="m-0">бесплатную консультацию</p>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[7px] box-border max-w-full text-mid">
            <div className="flex-1 relative tracking-[0.1em] inline-block max-w-full">
              «Всё записано. Но когда Бог разрешает человеку что-то изменить в
              его судьбе, он приводит его к астрологу».
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-center py-0 pl-[21px] pr-5">
            <div className="w-[262px] flex flex-row items-start justify-start gap-[24.5px]">
              <div className="h-px flex-1 relative border-gray border-t-[1px] border-solid box-border" />
              <div className="h-px flex-1 relative border-gray border-t-[1px] border-solid box-border" />
              <div className="h-px flex-1 relative border-gray border-t-[1px] border-solid box-border" />
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-center py-0 pl-[21px] pr-5">
            <div className="w-[262px] relative tracking-[0.09em] inline-block shrink-0">
              Пауло Коэльо «Алхимик»
            </div>
          </div>
        </div>
      </div>
      <img
        className="w-[60px] h-[59.9px] fixed !m-[0] right-[40px] bottom-[46.2px] cursor-pointer overflow-hidden shrink-0 z-[2]"
        alt=""
        src="/whatsapp-1.svg"
        onClick={onBottomDivClick}
      />
      <div
        className="absolute bottom-0 left-0 w-full"
        style={{
          height: "20%",
          backgroundColor: "#D5DABD",
        }}
      />
    </section>
  );
};

export default HeroSection;
