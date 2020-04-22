import React, { Component } from 'react';
import CardColumns from 'react-bootstrap/CardColumns';
import axios from 'axios';

import './page.scss';
import Fiche from 'src/components/Fiche/Fiche';

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }


  componentDidMount() {
    // Make a request for a user with a given ID
    axios.get('https://swapi.dev/api/people/7/')
      .then((response) => {
        // handle success
        console.log(response);

        this.setState({
          isLoaded: true,
          items: response.data,
        });
        console.log(response.data);
      })
      .catch((error) => {
        // handle error
        console.log(error);
        this.setState({
          isLoaded: true,
          error,
        });
      })
      .then(() => {
      // always executed
      });
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Erreur : {error.message}</div>;
    } if (!isLoaded) {
      return <div>Chargement…</div>;
    }
    return (
      <div>
          Page de présentation
        <CardColumns>
          <Fiche {...items} />
        </CardColumns>
      </div>
    );
  }
}

export default Page;
