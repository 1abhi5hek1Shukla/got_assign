
import classes from "./Card.module.css"
// const imgUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStcPv2QrgwWILuqRV2-RFGTktyza_630tWuQ&usqp=CAU";
const Card = (props)=> {
    return (
        <div className={classes.card}>
            <img src={props.imageUrl}/>
            <div>
                <div className={classes.name}>
                    {props.firstName} {props.lastName}
                </div>
                <div>
                    <div className={classes.title}>
                        Title: {props.title}
                    </div>
                    <div className={classes.title}>
                        Family: {props.title}
                    </div>
                </div>
            </div>
        </div>
    );
}  

export default Card;