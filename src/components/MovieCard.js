import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import {baseUrl, size300,size500} from '../Data/Movie';
//import SearchMovie from '../Data/SearchMovie';


const styles = {
  card: {
    maxWidth: 800,
     height:500,
    margin: '100px auto',
    display:'flex',
    overflow:'hidden'
    
     
  },
  media: {
    height: 500,
    width: 350,
    zIndex:1
    
    
  },
  content: {
    height: 500,
    display:'flex',
    flexDirection:'column',
    width:450,
    backgroundColor:'#000000',
    opacity:0.9,
    marginBottom:25,
    
},
  heading: {
    color:'#FFFFFF',
    fontSize:'35px',
    paddingLeft:100,
    marginBottom:50,
    
},
body:{
    color:'#FFFFFF',
    marginBottom:25,
    
    
},
tile: {
    color:'green',
    
}
};

function SimpleMediaCard(props) {
  const { classes } = props;
  let movie;
  
    movie = props.movie.results[0];
  
  const { original_title,release_date, popularity,vote_count, vote_average, poster_path } = movie;
  const overview = movie.overview.slice(0,500);
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia 
          className={classes.media}
          image= {`${baseUrl}${size500}${poster_path}`} 
          title={original_title}
        />
      
      <CardContent className={classes.content}>
      <Typography  className={classes.heading} type="headline" component="h2">
            {original_title}
    </Typography>
    <Typography className={classes.body} component="p">
            {overview}
          </Typography>
          <Typography className={classes.body} component="p">
            <span className={classes.tile}>Release date: </span>{release_date}
          </Typography>
          <Typography className={classes.body} component="p">
            <span className={classes.tile}>Popularity: </span>{popularity}
            <span> %</span>
          </Typography>
          <Typography className={classes.body} component="p">
            <span className={classes.tile}>Vote count: </span>{vote_count}
          </Typography>
          <Typography className={classes.body} component="p">
            <span className={classes.tile}>Vote average: </span>{vote_average}
            <span> /10</span>
          </Typography>
      </CardContent>  
      </Card>
    </div>
  );
}

SimpleMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleMediaCard);