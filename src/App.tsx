import { useState } from "react";
import Avatar from "./components/Avatar";
import Work from "./components/Work";
import Play from "./components/Play";
import SelfCare from "./components/SelfCare";
import Social from "./components/Social";
import Exercise from "./components/Exercise";
import Study from "./components/Study";
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
        <Work timeInterval={timeInterval} />
        <Play timeInterval={timeInterval} />
        <Study timeInterval={timeInterval} />
        <Exercise timeInterval={timeInterval} />
        <Social timeInterval={timeInterval} />
        <SelfCare timeInterval={timeInterval} />
      </article>
    </main>
  );
};

export default App;
