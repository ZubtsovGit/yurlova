import type { NextPage } from "next";

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
      className={`w-[1151px] h-[571px] relative rounded-31xl bg-oldlace overflow-y-auto flex flex-col items-start justify-start py-0 px-[86px] box-border leading-[normal] tracking-[normal] max-w-full max-h-full overflow-auto mq750:pl-[43px] mq750:pr-[43px] mq750:box-border mq1050:pl-5 mq1050:pr-5 mq1050:box-border mq450:h-auto ${className}`}
    >
      <section className="self-stretch flex flex-row items-end justify-start flex-wrap content-end py-10 pl-0 pr-[35px] box-border gap-[26px] min-h-[717px] max-w-full shrink-0 text-left text-mini text-black font-ibm-plex-sans mq750:pt-[26px] mq750:pb-[26px] mq750:box-border">
        <div className="w-[944px] flex flex-col items-start justify-start gap-[26px] max-w-full text-xl font-playfair-display">
          <div className="relative font-semibold inline-block max-w-full mq1050:text-base">
            Геммоастрология. Волшебная сила камней
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-6 max-w-full text-base font-ibm-plex-sans mq450:flex-wrap">
            <div className="flex-1 flex flex-col items-start justify-start gap-[13px] min-w-[376px] max-w-full mq750:min-w-full">
              <div className="self-stretch relative text-dimgray-300">
                Забудьте о подборе камней по знаку зодиака: один и тот же камень
                может одному человеку помочь, а другому навредить. Поэтому камни
                подбираются исходя из особенностей натальной карты.
              </div>
              <div className="self-stretch relative text-dimgray-300">
                <p className="[margin-block-start:0] [margin-block-end:13px]">
                  <span className="font-medium font-ibm-plex-sans">✓</span>
                  <span> Минимизировать риски для жизни и здоровья;</span>
                </p>
                <p className="[margin-block-start:0] [margin-block-end:13px]">
                  <span className="font-medium font-ibm-plex-sans">{`✓ `}</span>
                  <span>
                    Раскрыть потенциал в деньгах, карьере, бизнесе, работе и
                    самореализации;
                  </span>
                </p>
                <p className="[margin-block-start:0] [margin-block-end:13px]">
                  <span className="font-medium font-ibm-plex-sans">{`✓ `}</span>
                  <span>Забеременеть и родить;</span>
                </p>
                <p className="[margin-block-start:0] [margin-block-end:13px]">
                  <span className="font-medium font-ibm-plex-sans">{`✓ `}</span>
                  <span>
                    Гармонизировать отношения с партнером, ребенком, другом;
                  </span>
                </p>
                <p className="[margin-block-start:0] [margin-block-end:13px]">
                  <span className="font-medium font-ibm-plex-sans">{`✓ `}</span>
                  <span>{`Переехать в другой город; `}</span>
                </p>
                <p className="m-0">
                  <span className="font-medium font-ibm-plex-sans">{`✓ `}</span>
                  <span>Гармонизировать жизнь человека в целом.</span>
                </p>
              </div>
              <div className="relative">
                <p className="[margin-block-start:0] [margin-block-end:4px]">
                  <span className="font-medium font-ibm-plex-sans">{`Стоимость: `}</span>
                  <span>10 000₽</span>
                </p>
                <p className="m-0">Активация одного камня: 500₽</p>
              </div>
              <div className="self-stretch relative">
                <span>
                  <span className="font-medium">Формат:</span>
                </span>
                <span className="text-dimgray-300">
                  <span>{` `}</span>
                  <span>
                    консультации проходят в видеоформате, при живом общении
                    (Skype, Telegram, WhatsApp, Zoom и т.д. + astrobook
                    (печатный конспект основных моментов) + видеоконсультации).
                  </span>
                </span>
              </div>
              <div className="self-stretch h-[117px] relative inline-block">
                <p className="[margin-block-start:0] [margin-block-end:4px]">
                  <span className="font-medium">
                    <span>{`Для консультации необходимы данные: `}</span>
                  </span>
                </p>
                <p className="[margin-block-start:0] [margin-block-end:4px] text-dimgray-300">
                  <span>
                    <span className="font-medium">✓</span>
                    <span className="font-ibm-plex-sans">
                      {" "}
                      Год, месяц и дата рождения;
                    </span>
                  </span>
                </p>
                <p className="[margin-block-start:0] [margin-block-end:4px]">
                  <span>
                    <span className="font-medium font-ibm-plex-sans">✓</span>
                    <span> Город;</span>
                  </span>
                </p>
                <p className="m-0">
                  <span>
                    <span className="font-medium font-ibm-plex-sans">✓</span>
                    <span>
                      {" "}
                      Время рождения по бирке или со слов мамы (если нет точного
                      времени рождения, делаем ректификацию).
                    </span>
                  </span>
                </p>
              </div>
            </div>
            <img
              className="w-[342px] relative rounded-xl max-h-full object-cover max-w-full mq450:flex-1"
              loading="lazy"
              alt=""
              src="/rectangle-555@2x.png"
            />
          </div>
        </div>
        <div className="h-[50px] w-[159px] rounded-31xl bg-beige-100 overflow-hidden shrink-0 flex flex-row items-center justify-center py-[15px] px-[42px] box-border">
          <div className="self-stretch flex-1 relative font-medium">
            ЗАКАЗАТЬ
          </div>
        </div>
        <div className="h-[50px] w-[215px] rounded-31xl [background:conic-gradient(from_212.53deg_at_50%_50%,_#f2d399_-134.63deg,_#f2deb6_32.93deg,_#fbe6be_156.79deg,_#f2d399_225.37deg,_#f2deb6_392.93deg)] overflow-hidden shrink-0 flex flex-row items-center justify-center py-[15px] px-4 box-border whitespace-nowrap">
          <div className="self-stretch flex-1 relative uppercase font-medium">
            Подарить сертификат
          </div>
        </div>
      </section>
    </div>
  );
};

export default HildrenAstrology;
