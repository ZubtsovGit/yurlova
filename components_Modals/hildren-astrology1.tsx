import type { NextPage } from "next";
import Content from "./content";

export type HildrenAstrologyType = {
  className?: string;
  onClose?: () => void;
};

const HildrenAstrology: NextPage<HildrenAstrologyType> = ({
  className = "",
  onClose,
}) => {
  return (
    <div
      className={`w-[1151px] relative rounded-31xl bg-oldlace overflow-y-auto flex flex-col items-start justify-start py-0 px-[86px] box-border leading-[normal] tracking-[normal] max-w-full max-h-full overflow-auto mq750:pl-[43px] mq750:pr-[43px] mq750:box-border mq1050:pl-5 mq1050:pr-5 mq1050:box-border ${className}`}
    >
      <section className="self-stretch flex flex-row items-end justify-start flex-wrap content-end py-10 pl-0 pr-[35px] box-border gap-[26px] min-h-[596px] max-w-full shrink-0 text-left text-xl text-black font-playfair-display mq750:pt-[26px] mq750:pb-[26px] mq750:box-border">
        <div className="w-[944px] flex flex-col items-start justify-start gap-[26px] max-w-full">
          <div className="relative font-semibold mq1050:text-base">
            Коррекционная астрология
          </div>
          <Content />
        </div>
        <button className="cursor-pointer [border:none] py-[15px] px-[42px] bg-beige-100 rounded-31xl overflow-hidden flex flex-row items-center justify-center hover:bg-tan">
          <div className="relative text-mini font-medium font-ibm-plex-sans text-black text-left inline-block min-w-[75px]">
            ЗАКАЗАТЬ
          </div>
        </button>
        <div className="rounded-31xl [background:conic-gradient(from_212.53deg_at_50%_50%,_#f2d399_-134.63deg,_#f2deb6_32.93deg,_#fbe6be_156.79deg,_#f2d399_225.37deg,_#f2deb6_392.93deg)] overflow-hidden flex flex-row items-center justify-center py-[15px] px-4 whitespace-nowrap text-mini font-ibm-plex-sans">
          <div className="relative uppercase font-medium">
            Подарить сертификат
          </div>
        </div>
      </section>
    </div>
  );
};

export default HildrenAstrology;
