import style from "../LandingPage/LandingPage.module.scss";

export const LandingPage = (props) => {
  return <section className={style.LandingPage}>{props.children}</section>;
};
