import type { NextPage } from "next";

const Container2: NextPage = ({ className = "" }) => {
  return (
    <div
      className={`w-full relative flex flex-col items-start justify-start gap-[26px] max-w-full text-left text-xl text-black font-playfair-display ${className}`}
    >
      <div className="relative font-semibold inline-block max-w-full mq1050:text-base">
        Астрологический прогноз на 1 год. Соляр
      </div>
      <div className="self-stretch flex flex-row items-start justify-start gap-6 max-w-full text-base font-ibm-plex-sans mq450:flex-wrap">
        <div className="flex-1 flex flex-col items-start justify-start gap-[13px] min-w-[376px] max-w-full mq750:min-w-full">
          <div className="self-stretch relative text-dimgray-300">
            <p className="[margin-block-start:0] [margin-block-end:13px]">
              <span className="font-medium font-ibm-plex-sans">✓</span>
              <span>
                {" "}
                Рекомендации, как прожить ближайшие двенадцать месяцев более
                активно, эффективно и счастливо;
              </span>
            </p>
            <p className="m-0">
              <span className="font-medium font-ibm-plex-sans">✓</span>
              <span>
                {" "}
                После прогноза у вас будет четкий план: куда идти и что делать,
                как эффективно воспользоваться своими ресурсами в этом году и
                избежать ненужных рисков.
              </span>
            </p>
          </div>
          <div className="relative">
            <span className="font-medium">{`Стоимость: `}</span>
            <span>10 000₽</span>
          </div>
          <div className="self-stretch relative">
            <span>
              <span className="font-medium">Формат:</span>
            </span>
            <span className="text-dimgray-300">
              <span>{` `}</span>
              <span>
                консультации проходят в видеоформате, при живом общении (Skype,
                Telegram, WhatsApp, Zoom и т.д. + astrobook (печатный конспект
                основных моментов) + видеоконсультации).
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
          src="/rectangle-553@2x.png"
        />
      </div>
    </div>
  );
};

export default Container2;
