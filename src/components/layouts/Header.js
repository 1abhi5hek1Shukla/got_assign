import thumb from "../../images/thumb.png"
import classes from "./Header.module.css"
const Header = () =>{
    return (
        <header className={classes.header}>
            <img src={thumb}  className={classes.thumbnail}/>
            <p className={classes.heading}>GAME OF THRONES</p>
        </header>
    );
}
export default Header;