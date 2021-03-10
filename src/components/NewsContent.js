import React from "react";
import { Container } from "@material-ui/core";
import NewsCard from "./NewsCard";
import "./NewsContent.css";

const NewsContent = ({newsArray,newsResults, loadmore, setLoadmore}) => {

    const selectedNews = {
        width:"95%",
        display: "flex",
        alignItems: "center",
        background: "#f44336",
        height: "48px",
        padding: "0 48px",
        margin: "20px 0 35px 0",
        color: "white",
        boxShadow:"0 2px 5px 0 rgba(0,0,0, 0.16), 0 2px 10px 0 rgba(0,0,0,0.12)",
    }

    const content = {
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }
      

    return (
     <>
        <Container maxWidth="md">
            <div style={content}>
                <div className="downloadMessage" style={selectedNews}>
                    <span>(This part is in under development...)Selected News Category wise News Article are displayed here...</span>
                </div>
                { newsArray.map((newsItem) => (
                    <NewsCard newsItem={newsItem} key={newsItem.title} />
                ))}
                    

                    {
                        loadmore <= newsResults && (
                        <>
                            <hr />
                            <button onClick={()=>setLoadmore(loadmore + 20)} className="loadMore">
                                Load More
                            </button>
                        </>
                        )
                    }
                    
                
            </div>
       </Container>
     </>
    )
}

export default NewsContent;
