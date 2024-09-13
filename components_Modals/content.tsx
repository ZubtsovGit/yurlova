import type { NextPage } from "next";

const Content: NextPage = ({ className = "" }) => {
  return (
    <div
      className={`w-full relative flex flex-row items-start justify-start gap-6 max-w-full text-left text-base text-black font-ibm-plex-sans mq450:flex-wrap ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[11.8px] min-w-[376px] max-w-full mq750:min-w-full">
        <div className="self-stretch relative text-dimgray-300">
          <p className="[margin-block-start:0] [margin-block-end:4px]">
            <span className="font-medium font-ibm-plex-sans">{`✓ `}</span>
            <span>
              Поражённые показатели в Натальной Карте и их корректировка;
            </span>
          </p>
          <p className="[margin-block-start:0] [margin-block-end:4px]">
            <span className="font-medium font-ibm-plex-sans">{`✓ `}</span>
            <span>
              Корректировка планет действиями, аскезами, проработками, режимом;
            </span>
          </p>
          <p className="m-0">
            <span className="font-medium font-ibm-plex-sans">✓</span>
            <span> Усиление планет камнями.</span>
          </p>
        </div>
        <div className="self-stretch relative text-dimgray-300">
          Натальная Карта не является фатальной, один и тот же человек с одной и
          той же натальной картой мог быть потерянным наркоманом и возвыситься
          до уровня монаха и праведника.
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
        alt=""
        src="/separator1@2x.png"
      />
    </div>
  );
};

export default Content;
