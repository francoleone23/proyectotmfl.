import React, {Component} from "react"
import "../Search/buscador.css"

class Buscador extends Component {
	constructor(props){
		super(props);
		this.state = {
			value: ""
		}
	}

	notDefault(event){
		console.log("Evito default");
		event.preventDefault();
	}

	getDatos(datos){
		this.setState({
			value: datos.target.value
		},
		()=> this.props.filter(this.state.value)
		)
	}

	render(){
		return(
		<form onSubmit= {(event)=> this.notDefault(event)}>
			<input type="text" name="search" id="" placeholder="Que peli queres?" onChange = {(dato) => this.getDatos(dato)} value={this.state.value}/>
			<button type="submit"><i className="fas fa-search"></i></button>
		</form>     
		);
	}

}

export default Buscador;