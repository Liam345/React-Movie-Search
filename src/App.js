import React, { Component } from 'react';
import SearchAuto from './components/SearchAuto';
import './App.css';
import MovieCard from './components/MovieCard';
import Movie from './Data/Movie';
import {baseUrl, size1000} from './Data/Movie';
import 'typeface-roboto'

const styles ={
  container: {
    maxWidth: 800,
    height:500,
    position:'relative',
    margin:200
  },
  nomovie : {
    width:'100%',
    height:'100%',
    position:'absolute',
    height: 500,
    width: 350,
    backgroundColor:"#e6e6e6",
    backgroundImage:'url("https://www.makeupgeek.com/content/wp-content/themes/makeup-geek/images/placeholder-square.svg")',
    backgroundRepeat:'no-repeat',
    backgroundSize:'contain',
    backgroundPosition:'center',
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
  }

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
        this.setState({
          movieList:movieArray,
          movie:Movie
        });
      }
        else{
          this.setState({
            movieList:movieArray,
            movie:data
          });
        }
    });
    

}
  render() {
   
    return (
      <div>
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
