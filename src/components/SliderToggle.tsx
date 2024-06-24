import Brightness2OutlinedIcon from "@mui/icons-material/Brightness2Outlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import { motion } from "framer-motion";
import { memo, useCallback, useMemo } from "react";
import { useTheme } from "../contexts/ThemeContext";

const TOGGLE_CLASSES =
  "text-sm font-medium flex items-center gap-2 px-3 md:pl-3 md:pr-3.5 py-3 md:py-1.5 transition-colors relative z-10";

const SliderToggle = () => {
  const { theme, toggleTheme } = useTheme();

  const toggleClasses = useMemo(() => {
    return `grid transition-colors ${theme === "light" ? "text-white" : "text-slate-300"}`;
  }, [theme]);

  return (
    <div className={toggleClasses}>
      <Switch selected={theme} setSelected={toggleTheme} />
    </div>
  );
};

export const ThemeToggler = memo(SliderToggle);

interface SwitchProps {
  selected: string;
  setSelected: (selected: string) => void;
}

const Switch = memo(({ selected, setSelected }: SwitchProps) => {

  const isSelectedLight = selected === "light";
  const isSelectedDark = selected === "dark";

  const handleLightClick = useCallback(() => {
    setSelected("light");
  }, [setSelected]);

  const handleDarkClick = useCallback(() => {
    setSelected("dark");
  }, [setSelected]);

  return (
    <div className="relative flex w-fit items-center rounded-full">
      <button
        className={`${TOGGLE_CLASSES} ${
          isSelectedLight ? "text-white" : "text-slate-300"
        }`}
        onClick={handleLightClick}
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
        onClick={handleDarkClick}
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
});
