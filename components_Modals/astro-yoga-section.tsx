import type { NextPage } from "next";
import RetreatPrices from "./retreat-prices";

export type AstroYogaSectionType = {
  className?: string;
};

const AstroYogaSection: NextPage<AstroYogaSectionType> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch bg-beige-100 flex flex-col items-start justify-start py-10 px-40 box-border gap-[26px] max-w-full text-left text-23xl text-dimgray-100 font-playfair-display mq750:pl-20 mq750:pr-20 mq750:box-border mq1050:pt-5 mq1050:pb-5 mq1050:box-border mq450:pl-5 mq450:pr-5 mq450:box-border mq1225:pt-[26px] mq1225:pb-[26px] mq1225:box-border ${className}`}
      data-scroll-to="astroYogaSection"
    >
      <h1 className="m-0 relative text-inherit tracking-[0.05em] font-normal font-[inherit] mq750:text-15xl mq450:text-6xl">
        Йога-ретриты
      </h1>
      <div className="self-stretch flex flex-col items-start justify-start gap-[26px] max-w-full text-base text-black font-ibm-plex-sans">
        <div className="self-stretch flex flex-row items-center justify-start max-w-full text-xl font-playfair-display">
          <div className="flex-1 relative inline-block max-w-full mq450:text-base">{`Индивидуальный ретрит-тур `}</div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-start max-w-full text-dimgray-300">
          <div className="flex-1 relative inline-block max-w-full">
            Если вы хотите остановится и перезагрузиться, улучшить своё душевное
            и духовное состояние, найти ответы, уйти в проработки, просто
            отдохнуть, сделать глубокий самоанализ под руководством мастеров с
            использованием духовных практик - присоединяйтесь к НАМ.
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-center flex-wrap content-center py-0 px-[85px] gap-x-[73px] gap-y-[71px] text-center text-xl mq750:gap-[18px] mq750:pl-[21px] mq750:pr-[21px] mq750:box-border mq1225:gap-[35px] mq1225:pl-[42px] mq1225:pr-[42px] mq1225:box-border">
          <RetreatPrices
            priceDetails="/1-1@2x.png"
            prop="170 000 ₽"
            prop1="(всё включено)"
            prop2="«перезагрузка на шри-ланке»"
          />
          <RetreatPrices
            priceDetails="/2-1@2x.png"
            prop="70 000 ₽"
            prop1="+ авиабилет и виза"
            prop2="«индия»"
          />
          <RetreatPrices
            priceDetails="/3-1@2x.png"
            prop="70 000 ₽"
            prop1="+ авиабилет и виза"
            prop2="«абхазия»"
          />
        </div>
        <div className="self-stretch flex flex-row items-center justify-start max-w-full">
          <div className="flex-1 relative inline-block max-w-full">
            <span className="whitespace-pre-wrap">
              <span className="font-medium">Главная цель:</span>
            </span>
            <span className="text-dimgray-300">
              <span className="whitespace-pre-wrap">{` `}</span>
              <span>
                {" "}
                очистить сознание, физическое тело, посредством глубокого
                самоанализа, что приводит к духовному ментальному и физическому
                восстановлению.
              </span>
            </span>
          </div>
        </div>
        <div className="w-[661px] flex flex-row items-center justify-start max-w-full text-dimgray-300">
          <div className="h-[441px] flex-1 relative inline-block max-w-full">
            <p className="[margin-block-start:0] [margin-block-end:14px]">
              <span className="font-medium font-ibm-plex-sans">{`✓ `}</span>
              <span>Место cилы (вдали от социума);</span>
            </p>
            <p className="[margin-block-start:0] [margin-block-end:14px]">
              <span className="font-medium font-ibm-plex-sans">{`✓ `}</span>
              <span>Йога;</span>
            </p>
            <p className="[margin-block-start:0] [margin-block-end:14px]">
              <span className="font-medium font-ibm-plex-sans">{`✓ `}</span>
              <span>Медитации;</span>
            </p>
            <p className="[margin-block-start:0] [margin-block-end:14px]">
              <span className="font-medium font-ibm-plex-sans">{`✓ `}</span>
              <span>Нейрографика;</span>
            </p>
            <p className="[margin-block-start:0] [margin-block-end:14px]">
              <span className="font-medium font-ibm-plex-sans">{`✓ `}</span>
              <span>Западная астрология;</span>
            </p>
            <p className="[margin-block-start:0] [margin-block-end:14px]">
              <span className="font-medium font-ibm-plex-sans">✓</span>
              <span> Вегетарианское питание;</span>
            </p>
            <p className="[margin-block-start:0] [margin-block-end:14px]">
              ✓ Удаленное место;
            </p>
            <p className="[margin-block-start:0] [margin-block-end:14px]">
              ✓ Здоровый образ жизни;
            </p>
            <p className="[margin-block-start:0] [margin-block-end:14px]">
              ✓ Практики;
            </p>
            <p className="[margin-block-start:0] [margin-block-end:14px]">
              ✓ Путешествие по острову;
            </p>
            <p className="[margin-block-start:0] [margin-block-end:14px]">
              ✓ Посещение храмов и заповедников;
            </p>
            <p className="[margin-block-start:0] [margin-block-end:14px]">
              ✓ Цигун;
            </p>
            <p className="m-0">
              ✓ Каждый выбирает свою цель и свой тип ретрита (духовный,
              творческий, биохакинг).
            </p>
          </div>
        </div>
        <div className="flex flex-row items-center justify-start">
          <div className="relative uppercase">
            заезд в удобные для вас даты!!!
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-between py-[58.5px] px-0 box-border relative gap-5 max-w-full">
          <img
            className="h-[25px] w-[25px] object-contain min-h-[25px]"
            alt=""
            src="/arrowleft@2x.png"
          />
          <div className="w-[1030px] !m-[0] absolute top-[0px] left-[45px] overflow-x-auto shrink-0 flex flex-row items-center justify-start gap-6 max-w-full">
            <img
              className="self-stretch w-[100.5px] relative rounded-5xs-5 max-h-full shrink-0 object-cover min-h-[142px]"
              loading="lazy"
              alt=""
              src="/1-2@2x.png"
            />
            <img
              className="self-stretch w-[100.5px] relative rounded-5xs-5 max-h-full shrink-0 object-cover min-h-[142px]"
              loading="lazy"
              alt=""
              src="/2-2@2x.png"
            />
            <img
              className="self-stretch w-[100.5px] relative rounded-5xs-5 max-h-full shrink-0 object-cover min-h-[142px]"
              loading="lazy"
              alt=""
              src="/3-2@2x.png"
            />
            <img
              className="self-stretch w-[100.5px] relative rounded-5xs-5 max-h-full shrink-0 object-cover min-h-[142px]"
              loading="lazy"
              alt=""
              src="/4-1@2x.png"
            />
            <img
              className="self-stretch w-[100.5px] relative rounded-5xs-5 max-h-full shrink-0 object-cover min-h-[142px]"
              loading="lazy"
              alt=""
              src="/5-1@2x.png"
            />
            <img
              className="self-stretch w-[100.5px] relative rounded-5xs-5 max-h-full shrink-0 object-cover min-h-[142px]"
              loading="lazy"
              alt=""
              src="/6-1@2x.png"
            />
            <img
              className="self-stretch w-[100.5px] relative rounded-5xs-5 max-h-full shrink-0 object-cover min-h-[142px]"
              loading="lazy"
              alt=""
              src="/7-1@2x.png"
            />
            <img
              className="self-stretch w-[100.5px] relative rounded-5xs-5 max-h-full shrink-0 object-cover min-h-[142px]"
              loading="lazy"
              alt=""
              src="/8@2x.png"
            />
            <img
              className="self-stretch w-[100.5px] relative rounded-5xs-5 max-h-full shrink-0 object-cover min-h-[142px]"
              alt=""
              src="/image-collection@2x.png"
            />
            <img
              className="self-stretch w-[100.5px] relative rounded-5xs-5 max-h-full shrink-0 object-cover min-h-[142px]"
              loading="lazy"
              alt=""
              src="/10@2x.png"
            />
            <img
              className="self-stretch w-[100.5px] relative rounded-5xs-5 max-h-full shrink-0 object-cover min-h-[142px]"
              alt=""
              src="/image-collection1@2x.png"
            />
            <img
              className="self-stretch w-[100.5px] relative rounded-5xs-5 max-h-full shrink-0 object-cover min-h-[142px]"
              alt=""
              src="/image-collection2@2x.png"
            />
            <img
              className="self-stretch w-[100.5px] relative rounded-5xs-5 max-h-full shrink-0 object-cover min-h-[142px]"
              alt=""
              src="/image-collection3@2x.png"
            />
            <img
              className="self-stretch w-[100.5px] relative rounded-5xs-5 max-h-full shrink-0 object-cover min-h-[142px]"
              alt=""
              src="/image-collection4@2x.png"
            />
            <img
              className="self-stretch w-[100.5px] relative rounded-5xs-5 max-h-full shrink-0 object-cover min-h-[142px]"
              alt=""
              src="/image-collection5@2x.png"
            />
            <img
              className="self-stretch w-[100.5px] relative rounded-5xs-5 max-h-full shrink-0 object-cover min-h-[142px]"
              alt=""
              src="/image-collection6@2x.png"
            />
            <img
              className="self-stretch w-[100.5px] relative rounded-5xs-5 max-h-full shrink-0 object-cover min-h-[142px]"
              alt=""
              src="/image-collection7@2x.png"
            />
            <img
              className="self-stretch w-[100.5px] relative rounded-5xs-5 max-h-full shrink-0 object-cover min-h-[142px]"
              alt=""
              src="/image-collection8@2x.png"
            />
            <img
              className="self-stretch w-[100.5px] relative rounded-5xs-5 max-h-full shrink-0 object-cover min-h-[142px]"
              alt=""
              src="/image-collection9@2x.png"
            />
            <img
              className="self-stretch w-[100.5px] relative rounded-5xs-5 max-h-full shrink-0 object-cover min-h-[142px]"
              alt=""
              src="/image-collection10@2x.png"
            />
            <img
              className="self-stretch w-[100.5px] relative rounded-5xs-5 max-h-full shrink-0 object-cover min-h-[142px]"
              alt=""
              src="/image-collection11@2x.png"
            />
            <img
              className="self-stretch w-[100.5px] relative rounded-5xs-5 max-h-full shrink-0 object-cover min-h-[142px]"
              alt=""
              src="/image-collection12@2x.png"
            />
            <img
              className="self-stretch w-[100.5px] relative rounded-5xs-5 max-h-full shrink-0 object-cover min-h-[142px]"
              alt=""
              src="/image-collection13@2x.png"
            />
            <img
              className="self-stretch w-[100.5px] relative rounded-5xs-5 max-h-full shrink-0 object-cover min-h-[142px]"
              alt=""
              src="/image-collection14@2x.png"
            />
            <img
              className="self-stretch w-[100.5px] relative rounded-5xs-5 max-h-full shrink-0 object-cover min-h-[142px]"
              alt=""
              src="/image-collection15@2x.png"
            />
            <img
              className="self-stretch w-[100.5px] relative rounded-5xs-5 max-h-full shrink-0 object-cover min-h-[142px]"
              alt=""
              src="/image-collection16@2x.png"
            />
          </div>
          <div className="flex flex-row items-center justify-center w-[25px] h-[25px]">
            <img
              className="h-[25px] w-[25px] relative rounded-12xs-3 object-contain"
              alt=""
              src="/polygon-1.svg"
            />
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-between py-px px-0 box-border min-h-[62px]">
          <button className="cursor-pointer [border:none] py-5 px-[35px] bg-[transparent] shadow-[1px_1px_4px_#c8baa1] rounded-31xl [background:conic-gradient(from_212.53deg_at_50%_50%,_#f2d399_-134.63deg,_#f2deb6_32.93deg,_#fbe6be_156.79deg,_#f2d399_225.37deg,_#f2deb6_392.93deg)] overflow-hidden flex flex-row items-center justify-center whitespace-nowrap">
            <div className="relative text-mini uppercase font-medium font-ibm-plex-sans text-black text-center">
              узнать подробнее
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AstroYogaSection;
