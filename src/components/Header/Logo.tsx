import css from "@/styles/components/Header/Logo.module.scss";
import Image from "next/image";
import logo from "@/assets/logos/web3vibes.png";
import { useRouter } from "next/router";

export default function Logo() {
  const router = useRouter();

  return (
    <div className={css.section}>
      <Image
        className={css.logo}
        src={logo}
        width={45}
        alt="logo"
        quality={100}
        priority={true}
        onClick={() => router.push("/")}
      />
      <h1>Web3Vibes</h1>
    </div>
  );
}
