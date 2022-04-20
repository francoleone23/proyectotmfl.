import React, { Component } from "react";
import "../Main/main.css"

class Card extends Component {
        constructor(props){
          super(props)
          this.state = {
            datos: [],
            text: 'Ver más',
            viewMore: false,
            navego: false
          }
        }

    render(){
        console.log(this.props);
        
        
        return (
            <article>
                <section className="navigation">
                    <div>
                        <i className="fas fa-chevron-left"></i>
                        <i className="fas fa-chevron-right"></i>
                    </div>
                    <button onClick={()=>this.props.borrarPelicula(this.props.dataPelicula.id)}>Borrar</button>
                </section>
                <main>
                    <img src={this.props.dataPelicula.poster_path} alt={this.props.dataPelicula.title}/>
                    <h3>{this.props.dataPelicula.title}</h3>
                    <p className="description">{this.props.dataPelicula.overview}</p>
                    <div className={this.state.descClassName}>
                        <p className='masInfo'>Release Date: {this.props.dataPelicula.release_date}</p>
                        <p className='masInfo'>Popularity: {this.props.dataPelicula.popularity} seconds</p>
                        <p className='masInfo'>Original Language: {this.props.dataPelicula.original_langauge}</p>
                    </div>
                    <p className="descButton" onClick={()=> this.showDescription()}>{this.state.text}</p>
                </main>
            </article>
    );
    }
    
}

export default Card;