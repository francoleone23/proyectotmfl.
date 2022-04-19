import React, { Component } from "react";
import "../Main/main.css"

class Card extends Component {
        constructor(props){
          super(props)
          this.state = {
            datos: [],
            ver: 'más',
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
                    <p onClick={()=>this.props.borrarPelicula(this.props.dataPelicula.id)}>Borrar</p>
                </section>
                <main>
                    <img src={this.props.dataPelicula.poster_path} alt={this.props.dataPelicula.title}/>
                    <h3>{this.props.dataPelicula.title}</h3>
                    <p className="description">{this.props.dataPelicula.overview}</p>
                    <a href="">Ver más</a>
                </main>
            </article>
    );
    }
    
}

export default Card;