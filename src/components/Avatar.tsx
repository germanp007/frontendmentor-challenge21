import { Dispatch, FC } from "react";
type TimeInterval = "daily" | "weekly" | "monthly";
type Props = {
  setTimeInterval: Dispatch<React.SetStateAction<TimeInterval>>;
  timeInterval: TimeInterval;
};

const Avatar: FC<Props> = ({ setTimeInterval, timeInterval }) => {
  return (
    <div className="bg-DarkBlue row-span-1 h-[215px] rounded-[1rem] sm:row-span-2 sm:h-full">
      <div className="bg-Blue h-[144px] w-full rounded-[1rem] flex justify-start gap-4 items-center p-5 sm:h-[354px] sm:flex-col sm:items-start sm:p-10">
        <figure>
          <img
            src="../images/image-jeremy.png"
            alt="avatar"
            className="w-[65px] h-auto border-[3px] border-white rounded-full sm:w-[84px] sm:mb-[20px]"
          />
        </figure>
        <div>
          <h2 className="font-light text-[#BDC1FF]">Report for</h2>
          <h1 className="text-2xl font-light sm:text-[40px] sm:leading-[3rem]">
            Jeremy Robson
          </h1>
        </div>
      </div>

      <ul className="h-[70px] px-8 flex w-full justify-between items-center text-[18px] font-extralight text-[#6F76C8] sm:flex-col sm:h-[140px] sm:items-start sm:justify-evenly">
        <li
          className={`hover:text-white cursor-pointer ${
            timeInterval == "daily" ? "text-white" : ""
          }`}
          onClick={(e) => {
            const clickedText = (
              e.target as HTMLLIElement
            ).innerText.toLowerCase();
            const timeInterval: TimeInterval = clickedText as TimeInterval;
            setTimeInterval(timeInterval);
          }}
        >
          Daily
        </li>

        <li
          className={`hover:text-white cursor-pointer ${
            timeInterval == "weekly" ? "text-white" : ""
          }`}
          onClick={(e) => {
            const clickedText = (
              e.target as HTMLLIElement
            ).innerText.toLowerCase();
            const timeInterval: TimeInterval = clickedText as TimeInterval;
            setTimeInterval(timeInterval);
          }}
        >
          Weekly
        </li>
        <li
          className={`hover:text-white cursor-pointer ${
            timeInterval == "monthly" ? "text-white" : ""
          }`}
          onClick={(e) => {
            const clickedText = (
              e.target as HTMLLIElement
            ).innerText.toLowerCase();
            const timeInterval: TimeInterval = clickedText as TimeInterval;
            setTimeInterval(timeInterval);
          }}
        >
          Monthly
        </li>
      </ul>
    </div>
  );
};

export default Avatar;
