import type { NextPage } from "next";
import { useState, useMemo, type CSSProperties, useCallback } from "react";
import ExpressConsultation from "./express-consultation";
import PortalPopup from "./portal-popup";

export type ExpressConsultation1Type = {
  className?: string;
  image?: string;
  prop?: string;
  prop1?: string;
  prop2?: string;

  /** Style props */
  propAlignSelf?: CSSProperties["alignSelf"];
  propOverflow?: CSSProperties["overflow"];
  propWidth?: CSSProperties["width"];
};

const ExpressConsultation1: NextPage<ExpressConsultation1Type> = ({
  className = "",
  image,
  propAlignSelf,
  propOverflow,
  propWidth,
  prop,
  prop1,
  prop2,
}) => {
  const [isExpressConsultationOpen, setExpressConsultationOpen] =
    useState(false);
  const imageIconStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      overflow: propOverflow,
      width: propWidth,
    };
  }, [propAlignSelf, propOverflow, propWidth]);

  const openExpressConsultation = useCallback(() => {
    setExpressConsultationOpen(true);
  }, []);

  const closeExpressConsultation = useCallback(() => {
    setExpressConsultationOpen(false);
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
          style={imageIconStyle}
        />
        <div className="self-stretch flex flex-col items-start justify-start py-0 px-3 gap-[13px]">
          <div className="self-stretch relative font-semibold mq450:text-base">
            <p className="m-0">{prop}</p>
            <p className="m-0">{prop1}</p>
          </div>
          <div className="self-stretch relative font-ibm-plex-sans text-dimgray-100 mq450:text-base">
            {prop2}
          </div>
        </div>
        <button
          className="cursor-pointer [border:none] p-[15px] bg-beige-100 rounded-31xl flex flex-row items-center justify-center whitespace-nowrap hover:bg-tan"
          onClick={openExpressConsultation}
        >
          <div className="relative text-mini font-ibm-plex-sans text-black text-left inline-block min-w-[128px]">
            Узнать подробнее
          </div>
        </button>
      </div>
      {isExpressConsultationOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeExpressConsultation}
        >
          <ExpressConsultation onClose={closeExpressConsultation} />
        </PortalPopup>
      )}
    </>
  );
};

export default ExpressConsultation1;
