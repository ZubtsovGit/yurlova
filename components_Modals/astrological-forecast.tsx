import type { NextPage } from "next";
import { useState, useMemo, type CSSProperties, useCallback } from "react";
import BusinessConsultation from "./business-consultation";
import PortalPopup from "./portal-popup";

export type AstrologicalForecastType = {
  className?: string;
  image?: string;
  prop?: string;
  prop1?: string;

  /** Style props */
  propAlignSelf?: CSSProperties["alignSelf"];
  propOverflow?: CSSProperties["overflow"];
  propWidth?: CSSProperties["width"];
};

const AstrologicalForecast: NextPage<AstrologicalForecastType> = ({
  className = "",
  image,
  propAlignSelf,
  propOverflow,
  propWidth,
  prop,
  prop1,
}) => {
  const [isAstrologicalForecastOpen, setAstrologicalForecastOpen] =
    useState(false);
  const imageIcon1Style: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      overflow: propOverflow,
      width: propWidth,
    };
  }, [propAlignSelf, propOverflow, propWidth]);

  const openAstrologicalForecast = useCallback(() => {
    setAstrologicalForecastOpen(true);
  }, []);

  const closeAstrologicalForecast = useCallback(() => {
    setAstrologicalForecastOpen(false);
  }, []);

  return (
    <>
      <div
        className={`h-[442px] w-[262px] rounded-xl bg-oldlace overflow-hidden shrink-0 flex flex-col items-center justify-start pt-0 px-0 pb-[26px] box-border gap-[26px] text-center text-xl text-black font-playfair-display ${className}`}
      >
        <img
          className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
          loading="lazy"
          alt=""
          src={image}
          style={imageIcon1Style}
        />
        <div className="self-stretch flex flex-col items-start justify-start py-0 px-3 gap-[13px]">
          <div className="self-stretch relative font-semibold mq450:text-base">
            {prop}
          </div>
          <div className="self-stretch relative font-ibm-plex-sans text-dimgray-100 mq450:text-base">
            {prop1}
          </div>
        </div>
        <button
          className="cursor-pointer [border:none] p-[15px] bg-beige-100 rounded-31xl flex flex-row items-center justify-center whitespace-nowrap hover:bg-tan"
          onClick={openAstrologicalForecast}
        >
          <div className="relative text-mini font-ibm-plex-sans text-black text-left inline-block min-w-[128px]">
            Узнать подробнее
          </div>
        </button>
      </div>
      {isAstrologicalForecastOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeAstrologicalForecast}
        >
          <BusinessConsultation onClose={closeAstrologicalForecast} />
        </PortalPopup>
      )}
    </>
  );
};

export default AstrologicalForecast;
