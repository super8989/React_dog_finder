import React, { Component } from "react";
import DogList from "./DogList";
import DogDetails from "./DogDetails";
import Navbar from "./Navbar";
import { Switch, Route } from "react-router-dom";
import whiskey from "./images/whiskey.jpg";
import hazel from "./images/hazel.jpg";
import tubby from "./images/tubby.jpg";
import "./App.css";

class App extends Component {
	static defaultProps = {
		dogs: [
			{
				name: "Whiskey",
				age: 5,
				src: whiskey,
				facts: [
					"Whiskey is a sweetie.",
					"Whiskey is a terrible guard dog.",
					"Whiskey wants to cuddle with you!"
				]
			},
			{
				name: "Hazel",
				age: 3,
				src: hazel,
				facts: [
					"Hazel has so much energy!",
					"Hazel is highly intelligent",
					"Hazel loves people more than dogs"
				]
			},
			{
				name: "Tubby",
				age: 4,
				src: tubby,
				facts: [
					"Tubby is a fatty",
					"Tubby does not like exercise",
					"Tubby loves eating food"
				]
			}
		]
	};

	render() {
		const getDog = props => {
			let name = props.match.params.name;
			let currentDog = this.props.dogs.find(
				dog => dog.name.toLowerCase() === name.toLowerCase()
			);
			return <DogDetails {...props} dog={currentDog} />;
		};

		return (
			<div>
				<Navbar />
				<Switch>
					<Route
						exact
						path='/dogs'
						render={() => <DogList dogs={this.props.dogs} />}
					/>
					<Route exact path='/dogs/:name' render={getDog} />
				</Switch>
			</div>
		);
	}
}

export default App;
