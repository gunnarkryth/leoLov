import style from "./Header.module.scss";
export const Header = (props) => {
  return <header className={style.Header}>{props.children}</header>;
};
