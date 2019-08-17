import algoliasearch from 'algoliasearch/lite';
import React, { Component } from 'react';
import {
  InstantSearch,
  Hits,
  SearchBox,
  Pagination,
  Highlight,
  ClearRefinements,
  RefinementList,
  Configure,
} from 'react-instantsearch-dom';
import PropTypes from 'prop-types';
import './App.css';

const searchClient = algoliasearch(
  '7N37BK9GEW',
  'c59028084f358d47fbf29f1548b6bcd2'
);

class App extends Component {
  render() {
    return (
      <div className="ais-InstantSearch">
        <h1>Find Your Board Game</h1>
        <InstantSearch indexName="boardGames" searchClient={searchClient}>
          <div className="left-panel">
            <ClearRefinements />
            <h2>Category</h2>
            <RefinementList attribute="category" />
            <Configure hitsPerPage={8} />
          </div>
          <div className="right-panel">
            <SearchBox />
            <Hits hitComponent={Hit} />
            <Pagination />
          </div>
        </InstantSearch>
      </div>
    );
  }
}

function Hit(props) {
  return (
    <div className="card">
      <div>{props.hit.names}</div>
      {/* <img src={props.hit.image_url} align="left" alt={props.hit.names} /> */}
      <div className="hit-name">
        <Highlight attribute="name" hit={props.hit} />
      </div>
      <div className="hit-description">
        <Highlight attribute="description" hit={props.hit} />
      </div>
      <div className="hit-description">Geek rating: {props.hit.geek_rating}</div>
      <div className="hit-description">Category: {props.hit.category}</div>
      <div className="hit-description">Designer: {props.hit.designer}</div>      
    </div>
  );
}

Hit.propTypes = {
  hit: PropTypes.object.isRequired,
};

export default App;
