import classes from "./SideContent.module.css";
import logo from "../../assets/Logo.svg";
import heart from "../../assets/Heart.svg";
import Search from "../../assets/Search.svg";

const SideContent = () => {
  return (
    <div className={classes["side-content"]}>
      <img src={logo} alt='logoImage' className={classes.logo} />
      <div>
        <span className={classes.span}>
          <img src={Search} alt='searchImage' />
        </span>

        <p className={classes.textone}>Search</p>
      </div>
      <div>
        <img src={heart} alt='heartImage' />
        <p className={classes.texttwo}>Watchlist</p>
      </div>
    </div>
  );
};

export default SideContent;
