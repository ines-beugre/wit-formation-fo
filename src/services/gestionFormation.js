// import {csrf} from "./utils";
import axios from 'axios';
import { Component } from 'react';

class GestionFormation extends Component {
  
    constructor(props) {
      super(props);
      this.state = {
        url: 'http://localhost:8080/api/formations',
        errorMsg: '', 
      }
    };

    list() {
      return  axios.get(this.state.url)
        .then(formations =>{
          return formations.data
        })
        .catch(err => {
          console.log(err)
          this.setState({ errorMsg: 'Erreur pendant la récuperation des formations.' })
        });
    }

    getById(id) {
      return axios
        .get(this.state.url + '/' + id)
        .then(formation => {
            return formation.data
        })
        .catch(err => {
          console.log(err)
          this.setState({ errorMsg: 'Erreur pendant la récuperation de la formation.'})
        });
    }

    add(formation) {
      console.log('form-to-add', formation);
      return  axios
        .post('http://localhost:8080/api/formations', formation)
        .then(response => {
            console.log('response', response)
        })
        .catch(err => {
            console.log(err);
            this.setState({ errorMsg: 'Erreur pendant l\'ajout d\'une méthode.'});
        });
    }
}

export default GestionFormation;
