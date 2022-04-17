import React, { Component } from "react";
import Card from "../Card/card";
import "../Main/main.css"

class Main extends Component {
    constructor(props){
      super(props)
      this.state = {
        datos: [],
        isLoaded: false,
        nextUrl: "",
        filas: true,
        peliculasResultado: [],
      }
    }
  
    
  
    componentDidMount(){
      fetch('https://api.themoviedb.org/3/movie/popular?api_key=e359a4e964c9e009d51477293d96e985&language=en-US&page=1')
      .then(response => response.json())
      .then( data => this.setState(
        {
          datos: data.results,
          peliculasResultado: data.results,
          isLoaded: true,
          nextUrl: data.page + 1,
        }
      ) )
      .catch( error => console.log(error) )
    }
  
    pedirMas(){
      fetch(`https://api.themoviedb.org/3/movie/popular?api_key=e359a4e964c9e009d51477293d96e985&language=en-US&page=${this.state.nextUrl}`)
      .then(response => response.json())
      .then( data => {
          console.log(data.results);
          this.setState({peliculasResultado: this.state.peliculasResultado.concat(data.results), nextUrl: data.page + 1, datos: this.state.datos.concat(data.results)})
      })
      .catch(error=> console.log(error))
  }
  
  delete(peliculaABorrar){
    let peliculasQueQuedan = this.state.peliculasResultado.filter( pelicula => pelicula.id !== peliculaABorrar)
    let peliculasQueDejamos = this.state.datos.filter( pelicula => pelicula.id !== peliculaABorrar)
  
    this.setState({peliculasResultado: peliculasQueQuedan, datos: peliculasQueDejamos})
  
  }
  render(){
    console.log(this.state.datos);
    return(
      <h1>Aca deberian ir las cards con el fetch y su info</h1>  
    )
}

}
export default Main;