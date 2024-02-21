import { FC } from "react";
import CountUp from "react-countup";

type Props = {
  endValue: number;
};
const NumberCounter: FC<Props> = ({ endValue }) => {
  return <CountUp end={endValue} duration={2} />;
};

export default NumberCounter;
