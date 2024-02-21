import { FC } from "react";
import data from "../../public/data.json";
import NumberCounter from "./NumberCounter";

type Props = {
  timeInterval: string;
};
type Timeframe = {
  current: number;
  previous: number;
};

type Activity = {
  timeframes: {
    daily: Timeframe;
    weekly: Timeframe;
    monthly: Timeframe;
    [key: string]: Timeframe;
  };
};

const Social: FC<Props> = ({ timeInterval }) => {
  const { timeframes }: Activity = data[4] || {
    timeframes: {
      daily: { current: 0, previous: 0 },
      weekly: { current: 0, previous: 0 },
      monthly: { current: 0, previous: 0 },
    },
  };
  return (
    <div
      className={`row-span-1 h-[160px] rounded-[1rem] bg-[url(../images/icon-social.svg)] bg-Violet bg-no-repeat flex items-end sm:h-[244px] md:col-span-3 lg:col-span-1`}
      style={{
        backgroundPositionX: "93%",
        backgroundPositionY: "-5%",
      }}
    >
      <div className="bg-DarkBlue h-[120px] w-full rounded-[1rem] flex flex-col items-center py-6 sm:h-[204px] sm:px-6 hover:bg-HoverCard cursor-pointer transition-all duration-500">
        <div className="w-[85%] h-[30px] flex justify-between items-center m-auto sm:h-[20px] sm:m-0 sm:mb-6">
          <h2 className="text-lg text-white font-normal">Social</h2>
          <img src="../images/icon-ellipsis.svg" alt="ellipsis" />
        </div>
        <div className="w-[85%] h-[30px] flex justify-between items-center m-auto sm:flex-col sm:m-0 sm:items-start">
          <h2 className="text-[32px] sm:text-[54px] sm:font-light">
            <NumberCounter endValue={timeframes[timeInterval]?.current || 0} />
            hrs
          </h2>

          <h3 className="text-[15px] text-[#BDC1FF]">
            {timeInterval == "daily"
              ? "Last Day - "
              : timeInterval == "weekly"
              ? "Last Week - "
              : timeInterval == "monthly"
              ? "Last Month - "
              : ""}
            <NumberCounter endValue={timeframes[timeInterval]?.previous || 0} />
            hrs
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Social;
