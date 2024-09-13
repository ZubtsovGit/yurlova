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
      <section className="self-stretch flex flex-row items-end justify-start flex-wrap content-end py-10 px-0 box-border gap-[26px] min-h-[1260px] max-w-full shrink-0 text-left text-mini text-black font-ibm-plex-sans mq750:pt-5 mq750:pb-5 mq750:box-border mq450:pt-[26px] mq450:pb-[26px] mq450:box-border">
        <div className="w-[979px] flex flex-col items-start justify-start gap-[26px] max-w-full text-xl font-playfair-display">
          <div className="relative font-semibold inline-block max-w-full mq1050:text-base">
            Ректификация. Точное время рождения
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-6 max-w-full text-base font-ibm-plex-sans mq450:flex-wrap">
            <div className="flex-1 flex flex-col items-start justify-start gap-[10.8px] min-w-[398px] max-w-full mq750:min-w-full">
              <div className="w-[578px] relative text-dimgray-300 inline-block max-w-full">
                <p className="[margin-block-start:0] [margin-block-end:13px]">{`Прогнозы и предсказательные техники бессмысленны, если они составлены на неверное время, поэтому очень важно установить ваше время рождения до секунды! `}</p>
                <p className="[margin-block-start:0] [margin-block-end:13px]">
                  Наше время при рождении всегда округляют например, до 9:55 или
                  10:00. И всегда бывает человеческий фактор: забыл, перепутал,
                  не перевел время и так далее.
                </p>
                <p className="m-0">Я найду ваше время рождения до секунды!</p>
              </div>
              <div className="w-[578px] h-[521px] relative inline-block max-w-full">
                <p className="[margin-block-start:0] [margin-block-end:4px]">
                  <span className="font-medium">
                    <span>
                      Для ректификации нужно предоставить 5-15 событий из вашей
                      жизни:
                    </span>
                  </span>
                </p>
                <p className="[margin-block-start:0] [margin-block-end:4px] text-dimgray-300">
                  <span>
                    <span className="font-medium">✓</span>
                    <span className="font-ibm-plex-sans">
                      {" "}
                      Регистрация брака;
                    </span>
                  </span>
                </p>
                <p className="[margin-block-start:0] [margin-block-end:4px]">
                  <span>
                    <span className="font-medium font-ibm-plex-sans">✓</span>
                    <span> Рождение детей;</span>
                  </span>
                </p>
                <p className="[margin-block-start:0] [margin-block-end:4px]">
                  <span>
                    <span className="font-medium font-ibm-plex-sans">✓</span>
                    <span> Развод;</span>
                  </span>
                </p>
                <p className="[margin-block-start:0] [margin-block-end:4px]">
                  <span>
                    <span className="font-medium font-ibm-plex-sans">✓</span>
                    <span> Выкидыши, аборты</span>
                  </span>
                </p>
                <p className="[margin-block-start:0] [margin-block-end:4px]">
                  <span>
                    <span className="font-medium font-ibm-plex-sans">✓</span>
                    <span>
                      {" "}
                      Смерти бабушек, дедушек, родителей, братьев, сестёр;
                    </span>
                  </span>
                </p>
                <p className="[margin-block-start:0] [margin-block-end:4px]">
                  <span>
                    <span className="font-medium font-ibm-plex-sans">✓</span>
                    <span> Травмы, операции, больницы;</span>
                  </span>
                </p>
                <p className="[margin-block-start:0] [margin-block-end:4px]">
                  <span>
                    <span className="font-medium font-ibm-plex-sans">✓</span>
                    <span> Переезды, иммиграции;</span>
                  </span>
                </p>
                <p className="[margin-block-start:0] [margin-block-end:4px]">
                  <span>
                    <span className="font-medium font-ibm-plex-sans">{`✓ `}</span>
                    <span>Покупка недвижимости;</span>
                  </span>
                </p>
                <p className="[margin-block-start:0] [margin-block-end:4px]">
                  <span>
                    <span className="font-medium font-ibm-plex-sans">{`✓ `}</span>
                    <span>Тюремные заключения;</span>
                  </span>
                </p>
                <p className="[margin-block-start:0] [margin-block-end:4px]">
                  <span>
                    <span className="font-medium font-ibm-plex-sans">{`✓ `}</span>
                    <span>Открытие ИП;</span>
                  </span>
                </p>
                <p className="[margin-block-start:0] [margin-block-end:4px]">
                  <span>
                    <span className="font-medium font-ibm-plex-sans">{`✓ `}</span>
                    <span>Рождение племянников;</span>
                  </span>
                </p>
                <p className="[margin-block-start:0] [margin-block-end:4px]">
                  <span>
                    <span className="font-medium font-ibm-plex-sans">{`✓ `}</span>
                    <span>Инсульты;</span>
                  </span>
                </p>
                <p className="[margin-block-start:0] [margin-block-end:4px]">
                  <span>
                    <span className="font-medium font-ibm-plex-sans">{`✓ `}</span>
                    <span>Аварии;</span>
                  </span>
                </p>
                <p className="[margin-block-start:0] [margin-block-end:4px]">
                  <span>
                    <span className="font-medium font-ibm-plex-sans">{`✓ `}</span>
                    <span>Рождение братьев, сестёр;</span>
                  </span>
                </p>
                <p className="[margin-block-start:0] [margin-block-end:4px]">
                  <span>
                    <span className="font-medium font-ibm-plex-sans">{`✓ `}</span>
                    <span>Смерти домашних животных;</span>
                  </span>
                </p>
                <p className="[margin-block-start:0] [margin-block-end:4px]">
                  <span>
                    <span className="font-medium font-ibm-plex-sans">{`✓ `}</span>
                    <span>Потеря работы, увольнение, закрытие бизнеса;</span>
                  </span>
                </p>
                <p className="[margin-block-start:0] [margin-block-end:4px]">
                  <span>
                    <span className="font-medium font-ibm-plex-sans">{`✓ `}</span>
                    <span>Проигрыши больших сумм денег;</span>
                  </span>
                </p>
                <p className="[margin-block-start:0] [margin-block-end:4px]">
                  <span>
                    <span className="font-medium font-ibm-plex-sans">{`✓ `}</span>
                    <span>Продажа недвижимости;</span>
                  </span>
                </p>
                <p className="[margin-block-start:0] [margin-block-end:4px]">
                  <span>
                    <span className="font-medium font-ibm-plex-sans">{`✓ `}</span>
                    <span>Развод родителей;</span>
                  </span>
                </p>
                <p className="m-0">
                  <span>
                    <span className="font-medium font-ibm-plex-sans">{`✓ `}</span>
                    <span>
                      Время когда отец ушёл из семьи и перестал жить в семье.
                    </span>
                  </span>
                </p>
              </div>
              <div className="self-stretch relative">
                <p className="[margin-block-start:0] [margin-block-end:4px] font-medium">{`Стоимость: `}</p>
                <p className="[margin-block-start:0] [margin-block-end:4px]">
                  • При наличии бирки рождения из роддома (+/- 15 минут) – 3
                  000₽
                </p>
                <p className="[margin-block-start:0] [margin-block-end:4px]">
                  • Нет бирки, время в пределах 2 часов – 6000₽
                </p>
                <p className="[margin-block-start:0] [margin-block-end:4px]">
                  • Нет бирки, время в пределах 4 часов – 8000₽
                </p>
                <p className="[margin-block-start:0] [margin-block-end:4px]">
                  • Вы точно знаете, что это утро/день/вечер – 15 000₽
                </p>
                <p className="m-0">
                  • Нет времени рождения, есть только дата – 30 000₽ (работа
                  занимает 2 недели)
                </p>
              </div>
              <div className="w-[578px] h-[42px] relative inline-block max-w-full">
                <span>
                  <span className="font-medium">Формат:</span>
                </span>
                <span className="text-dimgray-300">
                  <span>{` `}</span>
                  <span>
                    предоставляются все формулы и расчёты событий, определяется
                    точное время до секунды вашего рождения, первого вздоха.
                  </span>
                </span>
              </div>
              <div className="w-[578px] h-[117px] relative inline-block max-w-full">
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
              src="/separator3@2x.png"
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
