import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type BlockRowType = {
  className?: string;
  i?: string;
  prop?: string;
  prop1?: string;

  /** Style props */
  propFlexWrap?: CSSProperties["flexWrap"];
  propFlexWrap1?: CSSProperties["flexWrap"];
  propMinWidth?: CSSProperties["minWidth"];
  propRowGap?: CSSProperties["rowGap"];
};

const BlockRow: NextPage<BlockRowType> = ({
  className = "",
  propFlexWrap,
  propFlexWrap1,
  propMinWidth,
  propRowGap,
  i,
  prop,
  prop1,
}) => {
  const blockRowStyle: CSSProperties = useMemo(() => {
    return {
      flexWrap: propFlexWrap,
    };
  }, [propFlexWrap]);

  const blockInfoStyle: CSSProperties = useMemo(() => {
    return {
      flexWrap: propFlexWrap1,
      minWidth: propMinWidth,
      rowGap: propRowGap,
    };
  }, [propFlexWrap1, propMinWidth, propRowGap]);

  return (
    <div
      className={`self-stretch flex flex-row items-center justify-center flex-wrap content-center gap-x-6 gap-y-[22px] max-w-full text-left text-base text-black ${className}`}
      style={blockRowStyle}
    >
      <img
        className="h-[30px] w-[71px] relative object-cover"
        loading="lazy"
        alt=""
        src="/image-15@2x.png"
      />
      <div
        className="flex-1 rounded-6xl border-gray border-[1px] border-solid box-border flex flex-row items-center justify-between flex-wrap content-center py-[11px] px-[26px] min-w-[355px] max-w-full gap-[-2px]"
        style={blockInfoStyle}
      >
        <div className="w-[443px] relative inline-block max-w-full">
          <p className="[margin-block-start:0] [margin-block-end:4px]">
            <span className="font-medium font-ibm-plex-sans">
              <span className="uppercase">{i}</span>
            </span>
            <span className="font-medium font-ibm-plex-sans">{` `}</span>
            <span className="font-ibm-plex-sans">{prop}</span>
          </p>
          <p className="m-0">
            <span className="font-ibm-plex-sans">{prop1}</span>
          </p>
        </div>
        <button className="cursor-pointer [border:none] py-[15px] px-[45px] bg-beige-100 rounded-31xl flex flex-row items-center justify-center hover:bg-tan">
          <div className="relative text-mini font-medium font-ibm-plex-sans text-black text-left inline-block min-w-[59px]">
            КУПИТЬ
          </div>
        </button>
      </div>
    </div>
  );
};

export default BlockRow;
