import Brightness2OutlinedIcon from "@mui/icons-material/Brightness2Outlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import { motion } from "framer-motion";
import { useState } from "react";

const TOGGLE_CLASSES =
  "text-sm font-medium flex items-center gap-2 px-3 md:pl-3 md:pr-3.5 py-3 md:py-1.5 transition-colors relative z-10";

export const SliderToggle = () => {
  const [selected, setSelected] = useState("dark");
  return (
    <div
      className={`grid transition-colors ${
        selected === "light" ? console.log("light") : console.log("dark")
      }`}
    >
      <Switch selected={selected} setSelected={setSelected} />
    </div>
  );
};

interface SwitchProps {
  selected: string;
  setSelected: (selected: string) => void;
}

const Switch = ({ selected, setSelected }: SwitchProps) => {
  const isSelectedLight = selected === "light";
  const isSelectedDark = selected === "dark";

  return (
    <div className="relative flex w-fit items-center rounded-full">
      <button
        className={`${TOGGLE_CLASSES} ${
          isSelectedLight ? "text-white" : "text-slate-300"
        }`}
        onClick={() => {
          setSelected("light");
        }}
      >
        <Brightness2OutlinedIcon className="relative z-10 text-lg md:text-sm" />
        <span
          className={`relative z-10 font-semibold ${
            isSelectedLight ? "text-white" : "text-slate-300"
          }`}
        >
          Light
        </span>
      </button>
      <button
        className={`${TOGGLE_CLASSES} ${
          isSelectedDark ? "text-white" : "text-slate-300"
        }`}
        onClick={() => {
          setSelected("dark");
        }}
      >
        <WbSunnyOutlinedIcon className="relative z-10 text-lg md:text-sm" />
        <span
          className={`relative z-10 font-semibold ${
            isSelectedDark ? "text-white" : "text-slate-300"
          }`}
        >
          Dark
        </span>
      </button>
      <div
        className={`absolute inset-0 z-0 flex ${
          isSelectedDark ? "justify-end" : "justify-start"
        }`}
      >
        <motion.span
          layout
          transition={{ type: "spring", damping: 15, stiffness: 250 }}
          className="h-full w-1/2 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600"
        />
      </div>
    </div>
  );
};
