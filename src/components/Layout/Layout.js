import classes from "./Layout.module.css";
import SideContent from './SideContent';

const Layout = (props) => {
  return <div className={classes.container}>
    <SideContent/>
    {props.children}
  </div>;
};

export default Layout;
