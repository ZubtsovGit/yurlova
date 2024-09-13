import type { NextPage } from "next";
import BlockRow from "./block-row";
import BlockRow1 from "./block-row1";
import BlockRow2 from "./block-row2";
import BlockRow3 from "./block-row3";

export type AstrologerConspectsSectionType = {
  className?: string;
};

const AstrologerConspectsSection: NextPage<AstrologerConspectsSectionType> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch bg-oldlace flex flex-row items-end justify-start py-0 pl-40 pr-0 box-border gap-6 max-w-full text-left text-23xl text-dimgray-100 font-playfair-display mq1050:flex-wrap mq1050:pl-5 mq1050:pr-5 mq1050:pb-5 mq1050:box-border ${className}`}
      data-scroll-to="astrologerConspectsSection"
    >
      <div className="flex-1 flex flex-col items-start justify-between py-10 px-0 box-border min-w-[480px] min-h-[1094px] max-w-full mq750:pt-5 mq750:pb-5 mq750:box-border mq750:min-w-full mq1225:pt-[26px] mq1225:pb-[26px] mq1225:box-border">
        <div className="self-stretch flex flex-col items-start justify-end gap-[26px] max-w-full">
          <h1 className="m-0 w-[546px] relative text-inherit tracking-[0.05em] font-normal font-[inherit] inline-block max-w-full mq750:text-15xl mq450:text-6xl">
            Конспекты астролога
          </h1>
          <div className="self-stretch flex flex-col items-start justify-start py-0 pl-0 pr-0.5 box-border gap-[13px] max-w-full text-base text-dimgray-300 font-ibm-plex-sans">
            <div className="self-stretch h-[134px] relative inline-block">
              <p className="[margin-block-start:0] [margin-block-end:4px]">
                <span className="font-medium font-ibm-plex-sans">✓</span>
                <span>
                  {" "}
                  Имея все конспекты астролога, вы без труда сможете сами начать
                  разбираться в своих картах и картах ваших близких.
                </span>
              </p>
              <p className="[margin-block-start:0] [margin-block-end:4px]">
                <span className="font-medium font-ibm-plex-sans">✓</span>
                <span>{` Без воды, всё самое важное , структурированная информация собрана за многие годы работы. `}</span>
              </p>
              <p className="m-0">
                <span className="font-medium font-ibm-plex-sans">✓</span>
                <span>
                  {" "}
                  Вы можете взять личную консультацию и я вас научу, как
                  работать с конспектами, шаблонами, читать вашу натальную
                  карту.
                </span>
              </p>
            </div>
            <div className="relative text-black inline-block max-w-full">
              <span className="font-medium">{`Стоимость одного блока конспектов: `}</span>
              <span>1 250₽</span>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[13px] max-w-full text-base text-black font-ibm-plex-sans">
            <div className="self-stretch flex flex-row items-center justify-center py-0 px-5">
              <img
                className="h-[25px] w-[25px] relative rounded-12xs-3"
                alt=""
                src="/polygon-1-1.svg"
              />
            </div>
            <div className="self-stretch h-[432px] overflow-y-auto shrink-0 flex flex-col items-start justify-start max-w-full mq750:h-auto">
              <div className="self-stretch flex flex-col items-start justify-start gap-[13px] max-w-full shrink-0">
                <BlockRow
                  i="Блок I."
                  prop="Знаки зодиака, планеты, стихии, обители, "
                  prop1="экзальтации, падения, изгнания, кресты"
                />
                <BlockRow
                  propFlexWrap="unset"
                  propFlexWrap1="unset"
                  propMinWidth="419px"
                  propRowGap="20px"
                  i="Блок II."
                  prop="Мажорные аспекты, планеты в шахте, "
                  prop1="ретро планеты"
                />
                <BlockRow1
                  prop="Блок"
                  iII=" III. "
                  prop1="Дома гороскопа, управители домов"
                />
                <BlockRow1
                  propHeight="unset"
                  prop="Блок"
                  iII=" IV. "
                  prop1="Планеты в домах"
                  propHeight1="unset"
                  propWidth="unset"
                  propDisplay="inline-block"
                  propMinWidth="59px"
                  propAlignSelf="unset"
                  propFlex="unset"
                  iIIFontFamily="'IBM Plex Sans'"
                />
                <BlockRow1
                  propHeight="unset"
                  prop="Блок"
                  iII=" V. "
                  prop1="Структуры Хубера"
                  propHeight1="unset"
                  propWidth="unset"
                  propDisplay="inline-block"
                  propMinWidth="59px"
                  propAlignSelf="unset"
                  propFlex="unset"
                  iIIFontFamily="'IBM Plex Sans'"
                />
                <div className="self-stretch flex flex-row items-center justify-center gap-6 max-w-full mq750:flex-wrap">
                  <img
                    className="h-[30px] w-[71px] relative object-cover"
                    loading="lazy"
                    alt=""
                    src="/image-15@2x.png"
                  />
                  <div className="flex-1 rounded-6xl border-gray border-[1px] border-solid box-border flex flex-row items-center justify-between py-[11px] px-[25px] min-w-[419px] [row-gap:20px] max-w-full gap-0 mq750:flex-wrap mq750:min-w-full">
                    <div className="h-[46px] w-[443px] relative inline-block shrink-0 max-w-full">
                      <p className="[margin-block-start:0] [margin-block-end:4px]">
                        <span className="font-medium font-ibm-plex-sans">
                          <span className="uppercase">Блок</span>
                        </span>
                        <span className="font-medium font-ibm-plex-sans">{` VI. `}</span>
                        <span className="font-ibm-plex-sans">{`Лилит – Чёрная Луна, кармические узлы, Хирон, `}</span>
                      </p>
                      <p className="m-0">
                        <span className="font-ibm-plex-sans">Селена</span>
                      </p>
                    </div>
                    <div className="h-[50px] w-[149px] rounded-31xl bg-beige-100 flex flex-row items-center justify-center py-[15px] px-[45px] box-border text-mini">
                      <div className="self-stretch flex-1 relative font-medium">
                        КУПИТЬ
                      </div>
                    </div>
                  </div>
                </div>
                <BlockRow2
                  prop="Блок"
                  vII=" VII. "
                  prop1="Ректификация, символические дирекции"
                />
                <BlockRow3 prop="Блок" vIII=" VIII. " prop1="Транзиты" />
                <BlockRow2
                  prop="Блок "
                  vII="IX. "
                  prop1="Прогрессия"
                  vIIFontFamily="'IBM Plex Sans'"
                />
                <BlockRow3
                  prop="Блок "
                  vIII="X. "
                  prop1="Соляр"
                  vIIIFontFamily="'IBM Plex Sans'"
                />
                <BlockRow2
                  prop="Блок "
                  vII="IX. "
                  prop1="Детская астрология"
                  vIIFontFamily="'IBM Plex Sans'"
                />
                <BlockRow2
                  prop="Блок "
                  vII="XII. "
                  prop1="Элективная астрология"
                  vIIFontFamily="'IBM Plex Sans'"
                />
                <div className="self-stretch flex flex-row items-center justify-center gap-6 max-w-full mq750:flex-wrap">
                  <img
                    className="h-[30px] w-[71px] relative object-cover"
                    alt=""
                    src="/image-15@2x.png"
                  />
                  <div className="flex-1 rounded-6xl border-gray border-[1px] border-solid box-border flex flex-row items-center justify-between py-[11px] px-[25px] min-w-[419px] [row-gap:20px] max-w-full gap-0 mq750:flex-wrap mq750:min-w-full">
                    <div className="h-[21px] w-[443px] relative inline-block shrink-0 max-w-full">
                      <span className="font-medium">
                        <span className="uppercase">{`Блок `}</span>
                      </span>
                      <span className="font-medium">{`XIII. `}</span>
                      <span className="font-ibm-plex-sans">Синастрия</span>
                    </div>
                    <button className="cursor-pointer [border:none] py-[15px] px-[45px] bg-beige-100 h-[50px] w-[149px] rounded-31xl flex flex-row items-center justify-center box-border hover:bg-tan">
                      <div className="self-stretch flex-1 relative text-mini font-medium font-ibm-plex-sans text-black text-left">
                        КУПИТЬ
                      </div>
                    </button>
                  </div>
                </div>
                <BlockRow1
                  propHeight="21px"
                  prop="Блок "
                  iII="XIV. "
                  prop1="Астрология проф. предназначения"
                  propHeight1="50px"
                  propWidth="149px"
                  propDisplay="unset"
                  propMinWidth="unset"
                  propAlignSelf="stretch"
                  propFlex="1"
                  iIIFontFamily="'IBM Plex Sans'"
                />
                <BlockRow1
                  propHeight="21px"
                  prop="Блок "
                  iII="XV. "
                  prop1="Геммоастрология"
                  propHeight1="50px"
                  propWidth="149px"
                  propDisplay="unset"
                  propMinWidth="unset"
                  propAlignSelf="stretch"
                  propFlex="1"
                  iIIFontFamily="'IBM Plex Sans'"
                />
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-center py-0 px-5">
              <img
                className="h-[25px] w-[25px] relative rounded-12xs-3"
                alt=""
                src="/polygon-1-2.svg"
              />
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[26px]">
            <h1 className="m-0 self-stretch relative text-inherit tracking-[0.05em] font-normal font-[inherit] mq750:text-15xl mq450:text-6xl">
              Обучение
            </h1>
            <div className="self-stretch flex flex-col items-start justify-start py-0 pl-0 pr-0.5 gap-[13px] text-base text-dimgray-300 font-ibm-plex-sans">
              <div className="self-stretch relative">
                На обучении мало теории, даю готовые структурированные конспекты
                + очень много практики! В короткие сроки вы научитесь читать
                натальную карту, понимать последовательность разбора, без моей
                помощи делать ректификацию, разбираться в дирекциях, транзитах и
                солярной карте!
              </div>
              <div className="self-stretch relative text-black">
                <p className="[margin-block-start:0] [margin-block-end:4px]">
                  <span className="font-medium">
                    <span className="text-dimgray-300">{`✓ `}</span>
                    <span>Индивидуальное занятие (45 минут):</span>
                  </span>
                  <span className="font-ibm-plex-sans">
                    <span className="text-dimgray-300">{` `}</span>
                    <span className="text-black">3 000₽ | 35$</span>
                  </span>
                </p>
                <p className="m-0">
                  <span className="text-dimgray-300">
                    <span className="font-medium font-ibm-plex-sans">✓</span>
                    <span className="font-ibm-plex-sans">{` `}</span>
                  </span>
                  <span className="font-medium">
                    Индивидуальное занятие (1,5 часа):
                  </span>
                  <span className="font-ibm-plex-sans">
                    <span className="text-dimgray-300">{` `}</span>
                    <span className="text-black">5 000₽ | 55 $</span>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[1014px] w-[517px] flex flex-col items-start justify-center min-w-[517px] max-w-full mq750:min-w-full mq1225:flex-1">
        <img
          className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-contain mq1225:self-stretch mq1225:w-auto"
          loading="lazy"
          alt=""
          src="/-----------------1-1-1@2x.png"
        />
      </div>
    </section>
  );
};

export default AstrologerConspectsSection;
