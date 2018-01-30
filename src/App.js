import React, { Component } from 'react';
import SearchAuto from './components/SearchAuto';
import './App.css';
import MovieCard from './components/MovieCard';
import Movie from './Data/Movie';
import {baseUrl, size1000} from './Data/Movie';
import 'typeface-roboto'
let noImgUrl = "https://www.makeupgeek.com/content/wp-content/themes/makeup-geek/images/placeholder-square.svg";
let bgImgUrl = "";
const styles ={
  wrapper :{
    backgroundImage:`url(${bgImgUrl})`,
    backgroundRepeat  : 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  },
  headerContainer:{
    display:'flex',
     justifyContent:'center',
  },
  heading:{
    color: '#081C24'
  },
  container: {
    maxWidth: 800,
    height:500,
    position:'relative',
    marginLeft:200,
    //marginTop:25
  },
  logo: {
    height:75,
    width:200
  },
  nomovie : {
    width:'100%',
    height:'100%',
    position:'absolute',
    height: 500,
    width: 350,
    backgroundColor:"#e6e6e6",
    backgroundImage:`url(${noImgUrl})`,
    backgroundRepeat  : 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    top:0,
    left:0
  },
  yesmovie :{
    width:'100%',
    height:'100%',
    position:'absolute',
    top:0,
    left:0,
    zIndex:10
  },
  

}

class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      movieList:[],
      movie:Movie
    }
  }
  onSearchTerm(term){
    const baseUrl = "https://api.themoviedb.org/3/search/movie?api_key=2953c5d9cfcc863abe654f340f17914f&query=";
    const url = `${baseUrl}${term}`;
   
    fetch(url)
    .then((resp) => resp.json()) 
    .then((data) => {
      const movieArray = typeof(data.results) === 'undefined'? []: data.results.map((result)=>{
        return result.original_title;
      });
      if(typeof(data.errors) !== 'undefined' || data.results.length === 0){
        bgImgUrl = "";
        this.setState({
          movieList:movieArray,
          movie:Movie
        });
      }
        else{
          bgImgUrl = `https://image.tmdb.org/t/p/w1280/${data.results[0].backdrop_path}`;
          this.setState({
            movieList:movieArray,
            movie:data
          });
        }
    });
    

}
  render() {
   
    return (
      <div style={{backgroundImage:`url(${bgImgUrl})`}}>
        <div style={styles.headerContainer}>
        <h1 style={styles.heading}>Movie <br/>Search <br/>engine</h1>
        <img src="https://www.themoviedb.org/static_cache/v4/logos/408x161-powered-by-rectangle-blue-10d3d41d2a0af9ebcb85f7fb62ffb6671c15ae8ea9bc82a2c6941f223143409e.png" style={styles.logo}/> 
        </div>
        <SearchAuto onSearchTerm={(term)=>this.onSearchTerm(term)} movieList={this.state.movieList}/>
        <div style={styles.container}>
          <div style={styles.nomovie} ></div>
          <MovieCard style={styles.yesmovie} movie={this.state.movie}/>
        </div>
      </div>
    );
  }
}

export default App;
