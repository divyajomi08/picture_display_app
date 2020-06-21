import React,{useState} from "react";

const Search= (props)=> {
    const [data,setdata]= useState('');
    const handlesearch=(event)=>{
         setdata(event.target.value);
    };
    const handlesubmit= (event)=>{
        event.preventDefault();
        props.searchword(data); 
    };
    return (<form onSubmit={handlesubmit} className="ui form" align='center'  >
        
        <div className="ui fluid category search" >
        <div className="ui icon input" >
            <input onChange={handlesearch}  className="prompt" type="text" placeholder="Search image..." style={{ width: "500px" , marginTop: "100px",marginBottom: "100px"}} />
            <i className="search icon"></i>
        </div>
        <div className="results"></div>
    </div>
    <br></br>
    </form>
    )
};
export default Search;