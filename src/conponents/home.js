import React from "react";
import "./home.css"
import Text from "./text";

const Home = () => {
    const bigbox = [
        {
            id: 1,
        },
        {
            id: 2,
        },
    ]
    const box = [
        {
            id: 1,
            text: "Read more",
            link: Text
            
            }, 
            {
            id: 2,
            text: "Read more",
            link: Text
            },  
            
    ]
    return(
        <div className="box1">
            {
            bigbox.map((row) => (
            <div className="box1-1">
                {
                box.map((mbox) => (
                <div className="box1-1-1">
                     <img src="" alt="."/>
                      <p>{mbox.text}</p>
                </div>
                ))
                }   
            </div> 
            ))
            }
        </div>
    )
}
export default Home
