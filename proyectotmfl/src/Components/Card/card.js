import React, { Component } from "react";
import "../Main/main.css"
import "../Card/card.css"

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

    viewMore() {
        if (this.state.viewMore) {
            this.setState({
                viewMore: false,
                text: "Ver más"
            });
        } else {
            this.setState({
                viewMore: true,
                text: "Ver menos"
            })
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
                    <section
                        className={`${
                            this.state.viewMore ? "aditional-info-show" : "aditional-info"
                        }`}
                    >
                        <p>Rating: {this.props.dataPelicula.vote_average}</p>
                        <p>Estreno: {this.props.dataPelicula.release_date}</p>
                        <p>Popularidad: {this.props.dataPelicula.popularity}</p>
                    </section>
                    <p className="descButton" onClick={()=> this.viewMore()}>{this.state.text}</p>
                </main>
            </article>
    );
    }
    
}

export default Card;