import Autosuggest from 'react-autosuggest';
import React from 'react';

const theme = {
    container: {
    display:'flex',
    justifyContent:'center',
      position: 'relative'
    },
    input: {
      width: 400,
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
      width: 440,
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

  

  
  
  const getSuggestionValue = suggestion => suggestion;
  
  const renderSuggestion = suggestion => (
    <div>
      {suggestion}
    </div>
  );



class SearchAuto extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      suggestions: []
    };
  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
    this.props.onSearchTerm(newValue);
  };

   getSuggestions = (value) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
  
    return inputLength === 0 ? [] : this.props.movieList.filter(movie =>
      movie.toLowerCase().slice(0, inputLength) === inputValue
    );
  };
  
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: this.getSuggestions(value)
    });
  };
  

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  render() {
    
    
    const { value, suggestions } = this.state;
    const { movieList } = this.props;
    const inputProps = {
      placeholder: 'Type a movie name',
      value,
      onChange: this.onChange
    };
    
    return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
        theme={theme}
      />
    );
  }
}

export default SearchAuto;

// const baseUrl = "https://api.themoviedb.org/3/search/movie?api_key=2953c5d9cfcc863abe654f340f17914f&query=";
// const url = `${baseUrl}${term}`;

// fetch(url)
// .then((resp) => resp.json()) 
// .then((data) => console.log(data));