import React, { Component } from "react";
import "../Main/main.css"
import "../Card/card.css"

class Card extends Component {
        constructor(props){
          super(props)
          this.state = {
            text: 'Ver más',
            viewMore: false,
          }
        }

    extendCard() {
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
        
        
        
        return (
            
                
                <li className="cards_item">
                    <div className="card">
                
                <main>
                    
                    <img className="card_image" src={"https://image.tmdb.org/t/p/original/"+this.props.dataPelicula.poster_path+"?api_key=e359a4e964c9e009d51477293d96e985"} alt={this.props.dataPelicula.title}/>
                    
                    <div className="card_content">
                    <h3>{this.props.dataPelicula.title}</h3>
                    <p className="description">{this.props.dataPelicula.overview}</p>
                    <button onClick={()=>this.props.borrarPelicula(this.props.dataPelicula.id)}>Borrar</button>
                    <section
                        className={`${
                            this.state.viewMore ? "aditional-info-show" : "aditional-info"
                        }`}
                    >
                        <p>Rating: {this.props.dataPelicula.vote_average}</p>
                        <p>Estreno: {this.props.dataPelicula.release_date}</p>
                        <p>Popularidad: {this.props.dataPelicula.popularity}</p>
                    </section>
                    <p className="descButton" onClick={()=> this.extendCard()}>{this.state.text}</p>
                    </div>
                </main>
                </div>
                </li>
                
            
    );
    }
    
}

export default Card;