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
      className={`w-[1151px] h-[571px] relative rounded-31xl bg-oldlace overflow-y-auto flex flex-col items-start justify-start py-0 px-[86px] box-border leading-[normal] tracking-[normal] max-w-full max-h-full overflow-auto mq750:pl-[43px] mq750:pr-[43px] mq750:box-border mq1050:pl-5 mq1050:pr-5 mq1050:box-border mq450:h-auto ${className}`}
    >
      <section className="self-stretch flex flex-row items-end justify-start flex-wrap content-end py-10 pl-0 pr-[35px] box-border gap-[26px] min-h-[698px] max-w-full shrink-0 text-left text-mini text-black font-ibm-plex-sans mq750:pt-[26px] mq750:pb-[26px] mq750:box-border">
        <div className="w-[944px] flex flex-col items-start justify-start gap-[26px] max-w-full text-xl font-playfair-display">
          <div className="relative font-semibold inline-block max-w-full mq1050:text-base">
            Гороскоп переезда и иммиграции. Релокация
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-6 max-w-full text-base font-ibm-plex-sans mq450:flex-wrap">
            <div className="flex-1 flex flex-col items-start justify-start gap-[11px] min-w-[376px] max-w-full mq750:min-w-full">
              <div className="self-stretch relative text-dimgray-300">
                <p className="[margin-block-start:0] [margin-block-end:13px]">{`Куда лучше переехать жить? `}</p>
                <p className="[margin-block-start:0] [margin-block-end:13px]">{`Вы никогда не задумывались, почему иногда приехав на новое место, Вы ощущаете прилив сил, бодрость, эйфорию? Вам кажется, что все здесь идет по-другому, и Вы хотите как можно дольше остаться именно здесь, в этом городе, в этой точке мира, возможно даже навсегда. `}</p>
                <p className="[margin-block-start:0] [margin-block-end:13px]">
                  Но бывает и наоборот, приехав на новое место, Вы ощущаете
                  тревогу, привычная работа не клеится, начинают обостряться
                  хронические заболевания, наступают депрессии, преследуют
                  неудачи.
                </p>
                <p className="m-0">
                  При переезде на другое место жительства меняется Гороскоп
                  человека, а значит и его судьба.
                </p>
              </div>
              <div className="relative">
                <span className="font-medium">{`Стоимость: `}</span>
                <span>8 000₽</span>
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
              src="/rectangle-557@2x.png"
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

export default BusinessConsultation;
