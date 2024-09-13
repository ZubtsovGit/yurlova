import type { NextPage } from "next";

export type RetreatPricesType = {
  className?: string;
  priceDetails?: string;
  prop?: string;
  prop1?: string;
  prop2?: string;
};

const RetreatPrices: NextPage<RetreatPricesType> = ({
  className = "",
  priceDetails,
  prop,
  prop1,
  prop2,
}) => {
  return (
    <div
      className={`h-[514px] flex-1 flex flex-col items-start justify-center gap-3 min-w-[107px] text-center text-xl text-black font-ibm-plex-sans ${className}`}
    >
      <img
        className="self-stretch flex-1 relative rounded-xl max-w-full overflow-hidden max-h-full object-cover"
        loading="lazy"
        alt=""
        src={priceDetails}
      />
      <div className="self-stretch relative mq450:text-base">
        <p className="m-0">{prop}</p>
        <p className="m-0">{prop1}</p>
      </div>
      <div className="rounded-31xl bg-oldlace flex flex-row items-center justify-center py-2.5 px-[13px] text-mini">
        <div className="relative uppercase">
          <p className="m-0">программа ретрита</p>
          <p className="m-0">{prop2}</p>
        </div>
      </div>
    </div>
  );
};

export default RetreatPrices;
