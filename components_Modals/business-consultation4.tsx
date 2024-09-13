import type { NextPage } from "next";

export type BusinessConsultationType = {
  className?: string;
  onClose?: () => void;
};

const BusinessConsultation: NextPage<BusinessConsultationType> = ({
  className = "",
  onClose,
}) => {
  return (
    <div
      className={`w-[1151px] relative rounded-31xl bg-oldlace overflow-y-auto flex flex-col items-start justify-start py-0 px-[86px] box-border leading-[normal] tracking-[normal] max-w-full max-h-full overflow-auto mq750:pl-[43px] mq750:pr-[43px] mq750:box-border mq1050:pl-5 mq1050:pr-5 mq1050:box-border ${className}`}
    >
      <section className="self-stretch flex flex-row items-end justify-start flex-wrap content-end py-10 pl-0 pr-[35px] box-border gap-[26px] min-h-[620px] max-w-full shrink-0 text-left text-mini text-black font-ibm-plex-sans mq750:pt-[26px] mq750:pb-[26px] mq750:box-border">
        <div className="w-[944px] flex flex-col items-start justify-start gap-[26px] max-w-full text-xl font-playfair-display">
          <div className="relative font-semibold mq1050:text-base">
            Подбор важной даты
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-6 max-w-full text-base font-ibm-plex-sans mq450:flex-wrap">
            <div className="flex-1 flex flex-col items-start justify-start gap-2.5 min-w-[376px] max-w-full mq750:min-w-full">
              <div className="self-stretch relative text-dimgray-300">
                <p className="[margin-block-start:0] [margin-block-end:4px]">
                  Выявление благоприятной даты:
                </p>
                <p className="[margin-block-start:0] [margin-block-end:4px]">
                  <span className="font-medium font-ibm-plex-sans">✓</span>
                  <span> Бракосочетание;</span>
                </p>
                <p className="[margin-block-start:0] [margin-block-end:4px]">
                  <span className="font-medium font-ibm-plex-sans">{`✓ `}</span>
                  <span>Открытие бизнеса;</span>
                </p>
                <p className="[margin-block-start:0] [margin-block-end:4px]">
                  <span className="font-medium font-ibm-plex-sans">✓</span>
                  <span> Сделка с недвижимостью;</span>
                </p>
                <p className="[margin-block-start:0] [margin-block-end:4px]">
                  <span className="font-medium font-ibm-plex-sans">{`✓ `}</span>
                  <span>Медицинская операция;</span>
                </p>
                <p className="[margin-block-start:0] [margin-block-end:4px]">
                  <span className="font-medium font-ibm-plex-sans">{`✓ `}</span>
                  <span>Иммиграция;</span>
                </p>
                <p className="m-0">
                  <span className="font-medium font-ibm-plex-sans">{`✓ `}</span>
                  <span>Покупка автомобиля.</span>
                </p>
              </div>
              <div className="relative">
                <span className="font-medium">{`Стоимость: `}</span>
                <span>5 000₽</span>
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
              src="/rectangle-556@2x.png"
            />
          </div>
        </div>
        <div className="rounded-31xl bg-beige-100 overflow-hidden flex flex-row items-center justify-center py-[15px] px-[42px]">
          <div className="relative font-medium inline-block min-w-[75px]">
            ЗАКАЗАТЬ
          </div>
        </div>
        <div className="rounded-31xl [background:conic-gradient(from_212.53deg_at_50%_50%,_#f2d399_-134.63deg,_#f2deb6_32.93deg,_#fbe6be_156.79deg,_#f2d399_225.37deg,_#f2deb6_392.93deg)] overflow-hidden flex flex-row items-center justify-center py-[15px] px-4 whitespace-nowrap">
          <div className="relative uppercase font-medium">
            Подарить сертификат
          </div>
        </div>
      </section>
    </div>
  );
};

export default BusinessConsultation;