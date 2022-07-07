import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../cards/Card";
import classes from "./Content.module.css"
const fetchData = async() => {
    const url = "https://thronesapi.com/api/v2/Characters";
    try {
        const {data} = await axios.get(url);
        return data;
    } catch (error) {
        console.log(error);
    }
    return [];
}

const Content = () =>{
    const [data, setData] = useState([]);
    const getData = async () =>{
        const data = await fetchData();
        setData(data);
    }
    useEffect(()=>{
        getData();
    }, [])
    const renderContent = data.map((datum, idx)=>(
        <Card {...datum} key={idx}/>
    ))
    return (
        <div className={classes.content}>
            <div className={classes.grid}>
                {renderContent}
            </div>
        </div>
    );
}
export default Content;