import { useState } from "react";
import Avatar from "./components/Avatar";
import data from "../public/data.json";
// import Activity from "./components/Activity";
import NumberCounter from "./components/NumberCounter";
// import Activity from "./components/Activity";
type TimeInterval = "daily" | "weekly" | "monthly";
const App = () => {
  const [timeInterval, setTimeInterval] = useState<TimeInterval>("weekly");
  // const background: string[] = [
  //   "LightRed",
  //   "SoftBlue",
  //   "LightRedTwo",
  //   "LimeGreen",
  //   "Violet",
  //   "SoftOrange",
  // ];
  // const dataModificated = data.map((ele, index) => ({
  //   ...ele,
  //   background: background[index],
  //   image:
  //     ele.title.toLocaleLowerCase().split(" ").length > 1
  //       ? ele.title.toLocaleLowerCase().split(" ").join("-")
  //       : ele.title.toLocaleLowerCase(),
  // }));
  // const foundIndex = data.findIndex((ele) => ele.title == title);
  // const timeInterval2: TimeInterval = timeInterval;
  // const currentValue = data[foundIndex]?.timeframes?.[timeInterval2];

  return (
    <main className="bg-VeryDarkBlue w-screen min-h-screen flex flex-col py-5 justify-center items-center">
      <article className="grid grid-cols-1 w-[90%] max-w-[1140px] text-white gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-8">
        <Avatar setTimeInterval={setTimeInterval} timeInterval={timeInterval} />
        {/* {dataModificated.map((ele) => (
          <Activity
            title={ele.title}
            key={ele.title}
            bg={ele.background}
            image={ele.image}
            timeInterval={timeInterval}
          />
        ))} */}
        <div
          className={`row-span-1 h-[160px] rounded-[1rem] bg-[url(../images/icon-work.svg)] bg-LightRed bg-no-repeat flex items-end sm:h-[244px]`}
          style={{
            backgroundPositionX: "93%",
            backgroundPositionY: "-10%",
          }}
        >
          <div className="bg-DarkBlue h-[120px] w-full rounded-[1rem] flex flex-col items-center py-6 sm:h-[204px] sm:px-6">
            <div className="w-[85%] h-[30px] flex justify-between items-center m-auto sm:h-[20px] sm:m-0">
              <h2 className="text-lg text-white font-normal">Work</h2>
              <img src="../images/icon-ellipsis.svg" alt="ellipsis" />
            </div>
            <div className="w-[85%] h-[30px] flex justify-between items-center m-auto sm:flex-col sm:m-0 sm:items-start">
              <h2 className="text-[32px] sm:text-[54px] sm:font-light">
                <NumberCounter
                  endValue={data[0].timeframes?.[timeInterval].current}
                />
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
                <NumberCounter
                  endValue={data[0].timeframes?.[timeInterval].previous}
                />
                hrs
              </h3>
            </div>
          </div>
        </div>
        <div
          className={`row-span-1 h-[160px] rounded-[1rem] bg-[url(../images/icon-play.svg)] bg-SoftBlue bg-no-repeat flex items-end sm:h-[244px]`}
          style={{
            backgroundPositionX: "93%",
            backgroundPositionY: "-10%",
          }}
        >
          <div className="bg-DarkBlue h-[120px] w-full rounded-[1rem] flex flex-col items-center py-6 sm:h-[204px] ">
            <div className="w-[85%] h-[30px] flex justify-between items-center m-auto">
              <h2 className="text-lg text-white font-normal">Play</h2>
              <img src="../images/icon-ellipsis.svg" alt="ellipsis" />
            </div>
            <div className="w-[85%] h-[30px] flex justify-between items-center m-auto">
              <h2 className="text-[32px]">
                <NumberCounter
                  endValue={data[1].timeframes?.[timeInterval].current}
                />
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
                <NumberCounter
                  endValue={data[1].timeframes?.[timeInterval].previous}
                />
                hrs
              </h3>
            </div>
          </div>
        </div>
        <div
          className={`row-span-1 h-[160px] rounded-[1rem] bg-[url(../images/icon-study.svg)] bg-LightRedTwo bg-no-repeat flex items-end sm:h-[244px]`}
          style={{
            backgroundPositionX: "93%",
            backgroundPositionY: "-10%",
          }}
        >
          <div className="bg-DarkBlue h-[120px] w-full rounded-[1rem] flex flex-col items-center py-6 sm:h-[204px] ">
            <div className="w-[85%] h-[30px] flex justify-between items-center m-auto">
              <h2 className="text-lg text-white font-normal">Study</h2>
              <img src="../images/icon-ellipsis.svg" alt="ellipsis" />
            </div>
            <div className="w-[85%] h-[30px] flex justify-between items-center m-auto">
              <h2 className="text-[32px]">
                <NumberCounter
                  endValue={data[2].timeframes?.[timeInterval].current}
                />
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
                <NumberCounter
                  endValue={data[2].timeframes?.[timeInterval].previous}
                />
                hrs
              </h3>
            </div>
          </div>
        </div>
        <div
          className={`row-span-1 h-[160px] rounded-[1rem] bg-[url(../images/icon-exercise.svg)] bg-LimeGreen bg-no-repeat flex items-end sm:h-[244px]`}
          style={{
            backgroundPositionX: "93%",
            backgroundPositionY: "-2%",
          }}
        >
          <div className="bg-DarkBlue h-[120px] w-full rounded-[1rem] flex flex-col items-center py-6 sm:h-[204px] ">
            <div className="w-[85%] h-[30px] flex justify-between items-center m-auto">
              <h2 className="text-lg text-white font-normal">Exercise</h2>
              <img src="../images/icon-ellipsis.svg" alt="ellipsis" />
            </div>
            <div className="w-[85%] h-[30px] flex justify-between items-center m-auto">
              <h2 className="text-[32px]">
                <NumberCounter
                  endValue={data[3].timeframes?.[timeInterval].current}
                />
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
                <NumberCounter
                  endValue={data[3].timeframes?.[timeInterval].previous}
                />
                hrs
              </h3>
            </div>
          </div>
        </div>
        <div
          className={`row-span-1 h-[160px] rounded-[1rem] bg-[url(../images/icon-social.svg)] bg-Violet bg-no-repeat flex items-end sm:h-[244px]`}
          style={{
            backgroundPositionX: "93%",
            backgroundPositionY: "-10%",
          }}
        >
          <div className="bg-DarkBlue h-[120px] w-full rounded-[1rem] flex flex-col items-center py-6 sm:h-[204px] ">
            <div className="w-[85%] h-[30px] flex justify-between items-center m-auto">
              <h2 className="text-lg text-white font-normal">Social</h2>
              <img src="../images/icon-ellipsis.svg" alt="ellipsis" />
            </div>
            <div className="w-[85%] h-[30px] flex justify-between items-center m-auto">
              <h2 className="text-[32px]">
                <NumberCounter
                  endValue={data[4].timeframes?.[timeInterval].current}
                />
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
                <NumberCounter
                  endValue={data[4].timeframes?.[timeInterval].previous}
                />
                hrs
              </h3>
            </div>
          </div>
        </div>
        <div
          className={`row-span-1 h-[160px] rounded-[1rem] bg-[url(../images/icon-self-care.svg)] bg-SoftOrange bg-no-repeat flex items-end sm:h-[244px]`}
          style={{
            backgroundPositionX: "93%",
            backgroundPositionY: "-10%",
          }}
        >
          <div className="bg-DarkBlue h-[120px] w-full rounded-[1rem] flex flex-col items-center py-6 sm:h-[204px] ">
            <div className="w-[85%] h-[30px] flex justify-between items-center m-auto">
              <h2 className="text-lg text-white font-normal">Self Care</h2>
              <img src="../images/icon-ellipsis.svg" alt="ellipsis" />
            </div>
            <div className="w-[85%] h-[30px] flex justify-between items-center m-auto">
              <h2 className="text-[32px]">
                <NumberCounter
                  endValue={data[5].timeframes?.[timeInterval].current}
                />
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
                <NumberCounter
                  endValue={data[5].timeframes?.[timeInterval].previous}
                />
                hrs
              </h3>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
};

export default App;
