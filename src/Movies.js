import React from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {Grid} from '@material-ui/core';


const Movies = (props) => {
  console.log(props.list);
  return (
    <div style={{display: "flex", flexDirection: "row",justifyContent:"center", flexWrap: "wrap" ,backgroundColor: "#000000d9"}}>
      {props.list &&
        props.list.map((each) => {
          return (
            <div key={each.id}>
              <Grid item lg={3} style={{marginRight: "18px", marginTop:"100px", marginBottom:"100px" , marginLeft:"18px"}}>
            <Card style={{width:"300px" , background: '#252525',
         color:'white'}}>
            <CardContent>
            <div style={{display: "grid", background: '#252525',
         color:'white'}}>
             <h3>{each.title}</h3>
              <img 
                src={`https://image.tmdb.org/t/p/w500${each.poster_path}`}
                alt="" style ={{width:"250px"}}
              />
              
              <span>
               {each.overview} 
              {each.release_date} 
              </span>
              
            </div>
            </CardContent>
            </Card>
            </Grid>
            </div>
          );
        })}
    </div>
  );
};

export default Movies;
