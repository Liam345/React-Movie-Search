import React from 'react';
import {Typeahead} from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';

const theme = {
    container: {
      position: 'relative'
    },
    input: {
      width: 240,
      height: 30,
      padding: '10px 20px',
      fontFamily: 'Helvetica, sans-serif',
      fontWeight: 300,
      fontSize: 16,
      border: '1px solid #aaa',
      borderTopLeftRadius: 4,
      borderTopRightRadius: 4,
      borderBottomLeftRadius: 4,
      borderBottomRightRadius: 4,
    },
    inputFocused: {
      outline: 'none'
    },
    inputOpen: {
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0
    },
    suggestionsContainer: {
      display: 'none'
    },
    suggestionsContainerOpen: {
      display: 'block',
      position: 'absolute',
      top: 51,
      width: 280,
      border: '1px solid #aaa',
      backgroundColor: '#fff',
      fontFamily: 'Helvetica, sans-serif',
      fontWeight: 300,
      fontSize: 16,
      borderBottomLeftRadius: 4,
      borderBottomRightRadius: 4,
      zIndex: 2
    },
    suggestionsList: {
      margin: 0,
      padding: 0,
      listStyleType: 'none',
    },
    suggestion: {
      cursor: 'pointer',
      padding: '10px 20px'
    },
    suggestionHighlighted: {
      backgroundColor: '#ddd'
    }
  };

const languages = [
  {
    name: 'C',
    year: 1972
  },
  {
    name: 'Elm',
    year: 2012
  },
  
];
class SearchBar extends React.Component{
    render(){
        const options = [
            'John',
            'Miles',
            'Charles',
            'Herbie',
          ];
          const styles = {
              textArea : {
                  width:300,
                  borderColor:'red',
                  borderWidth:5,
                  color:'red'
              }
            }
        return( 
            <div>
            <div className={styles.textArea}>
                Hey  <br/>
                Hey  <br/>
                Hey  <br/>
                Hey  <br/>
                Hey  <br/>
            </div>
            <Typeahead className={theme.input}  onChange={(selected)=>console.log(selected)} options={options} multiple/>  
            </div>
        );
    }
}

export default  SearchBar;