import { StaticImageData } from "next/image";

export default interface IButton {
  text: string | JSX.Element;
  onclick: Function;
  icon?: {
    src: StaticImageData;
    alt: string;
    width: number;
    height?: number;
    css?: string;
  };
  css?: string;
}
