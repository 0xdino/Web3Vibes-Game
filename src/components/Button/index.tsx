import IButton from "@/constants/interfaces/IButton";
import Image from "next/image";
import css from "@/styles/components/Button/Button.module.scss";

export default function Button(props: IButton) {
  return (
    <button
      className={`${css.button} ${props.css}`}
      onClick={() => props.onclick()}
    >
      {props.text}
      {props.icon && (
        <Image
          src={props.icon.src}
          width={props.icon.width}
          height={props.icon.height}
          alt={props.icon.alt}
          quality={100}
          className={props.icon.css}
        />
      )}
    </button>
  );
}
