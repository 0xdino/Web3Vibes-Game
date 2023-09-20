import css from "@/styles/components/Preloader/Preloader.module.scss";

export default function Preloader() {
  return (
    <section className={css.section}>
      <div className={css.loader}></div>
    </section>
  );
}
