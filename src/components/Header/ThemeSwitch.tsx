import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import css from "@/styles/components/Header/ThemeSwitch.module.scss";
import day from "@/assets/components/Header/ThemeSwitch/day.svg";
import night from "@/assets/components/Header/ThemeSwitch/night.svg";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const changeTheme = (t: string) => {
    setTheme(t);
  };

  return (
    <div className={css.section}>
      <div
        className={`${theme == "light" ? css.active : null}`}
        onClick={() => changeTheme("light")}
      >
        <Image src={day} width={20} alt="day" quality={100} />
      </div>
      <div
        className={`${theme == "dark" ? css.active : null}`}
        onClick={() => changeTheme("dark")}
      >
        <Image src={night} width={20} alt="night" quality={100} />
      </div>
    </div>
  );
}
