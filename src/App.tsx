import { useState } from "react";
import Avatar from "./components/Avatar";
import Rutine from "./components/Rutine";
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

        <Rutine
          timeInterval={timeInterval}
          image="work"
          title="Work"
          index={0}
          background="LightRed"
        />
        <Rutine
          timeInterval={timeInterval}
          image="play"
          title="Play"
          index={1}
          background="SoftBlue"
        />
        <Rutine
          timeInterval={timeInterval}
          image="study"
          title="Study"
          index={2}
          background="LightRedTwo"
        />
        <Rutine
          timeInterval={timeInterval}
          image="exercise"
          title="Exercise"
          index={3}
          background="LimeGreen"
        />
        <Rutine
          timeInterval={timeInterval}
          image="social"
          title="Social"
          index={4}
          background="Violet"
        />
        <Rutine
          timeInterval={timeInterval}
          image="self-care"
          title="Self Care"
          index={5}
          background="SoftOrange"
        />
      </article>
    </main>
  );
};

export default App;
