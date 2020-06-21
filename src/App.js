import React,{useState} from "react";
import Search from './component/Search';
import Card from './component/Card';
import api from './api/api'

const App = () => {
    const [show,setshow]=useState([]);
    const calling=async(data1)=>{
        const result=await api(data1);
        const array=result.data.results;
        setshow(array);
    };
    // const showcard=()=>{
    //     show.map((data)=>{
    //         <Card image={data.urls.regular}/>
    //     });
    // };
    return (
    <div>
        <Search searchword={calling} />
        <div className="ui three column grid">
        { show.map((data2)=>{
            return <Card image={data2.urls.regular} key={data2.urls.regular}/>
        })}
        </div>
    </div>);
    
};
export default App;
