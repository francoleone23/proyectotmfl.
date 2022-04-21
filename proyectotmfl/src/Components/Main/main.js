import React, { Component } from "react";
import Card from "../Card/card";
import "../Main/main.css";
import Buscador from "../Search/buscador";

class Main extends Component {
    constructor(props){
      super(props)
      this.state = {
        isLoaded: false,
        nextUrl: "", //actualizar la url de la siguiente página de resultados m
        filas: true,
        peliculasResultado: [],
        peliculas: []
      }
    }
  
    
  
    componentDidMount(){
      fetch('https://api.themoviedb.org/3/movie/popular?api_key=e359a4e964c9e009d51477293d96e985&language=en-US&page=1')
      .then(response => response.json())
      .then( data => this.setState(
        {
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
          this.setState({
              peliculasResultado: this.state.peliculasResultado.concat(data.results),
              nextUrl: data.page + 1, datos: this.state.peliculasResultado.concat(data.results)}) //merge 2 or more arrays
              
      })
      .catch(error=> console.log(error))
  }

  borrar(id){
    let peliculasFiltradas = [];
    peliculasFiltradas = this.state.peliculasResultado.filter( unaPelicula => unaPelicula.id !== id);
   
    this.setState({
      peliculasResultado: peliculasFiltradas
    })

  }

Filas(){
    this.setState({filas: true})
  }
  
Columnas(){
    this.setState({filas: false})
  }  //despues hay que agregar unos iconitos para que se pueda cambiar de filas a columnas 



  
  
  filtrarPeliculas(porTexto){
    let peliBuscada = this.state.peliculasResultado.filter(unaPelicula => unaPelicula.title.toLowerCase().includes(porTexto.toLowerCase()))
    
    
    this.setState({peliculasResultado: peliBuscada
    })
}

  render(){
    console.log(this.state.peliculasResultado);
    return(
        <React.Fragment>
            <Buscador filter = {(porTexto) => this.filtrarPeliculas(porTexto)}/>
     <section>
     <ul className="cards">
          {this.state.peliculasResultado.length === 0 ?
              <p>Cargando...</p>:
              this.state.peliculasResultado.map( (pelicula, idx) => <Card key={pelicula.title + idx} dataPelicula={pelicula} borrarPelicula={ (id)=>this.borrar(id) }/>)

            }
            </ul>
      </section>
      <button type="button" onClick={()=>this.pedirMas()}>Pedir más</button>
      </React.Fragment>
    )
}

}
export default Main;