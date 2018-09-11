import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import People from './People';

class App extends Component {
	state = {
		openingCrawl: '',
		title: '',
		date: '',
		people: [],
		planets: '',
		vehicles: ''
	};
	handlePeople = () => {
		const URL = `https://swapi.co/api/people/`;
		fetch(URL)
			.then(response => response.json())
			.then(response => {
				this.setState({ people: this.state.people.concat(response.results) });
				console.log(response.results);
			});
	};

	handlePlanets = () => {
		const URL = `https://swapi.co/api/planets/`;
		fetch(URL)
			.then(response => response.json())
			.then(response => {
				console.log(response);
			});
	};
	handleVehicles = () => {
		const URL = `https://swapi.co/api/vehicles/`;
		fetch(URL)
			.then(response => response.json())
			.then(response => {
				console.log(response);
			});
	};

	componentDidMount() {
		const randomNum = Math.round(Math.random() * 6) + 1;
		console.log(randomNum);
		const URL = `https://swapi.co/api/films/${randomNum}/`;
		fetch(URL)
			.then(response => response.json())
			.then(response => {
				console.log(response);
				this.setState({
					openingCrawl: response.opening_crawl,
					title: response.title,
					date: response.release_date
				});
			});
	}

	render() {
		const PeopleButton = styled.button`
			color: pink;
		`;
		const PlanetsButton = styled.button`
			color: teal;
		`;
		const VehiclesButton = styled.button`
			color: purple;
		`;
		const Sidebar = styled.div`
			position: absolute;
			float: left;
			left: 0;
			width: 200px;
		`;
		const SidebarContainer = styled.div`
			display: flex;
		`;

		return (
			<div className="App">
				<div>
					<h1>SWAPI-Box</h1>
					<button>View Favorites</button>
				</div>
				<div>
					<PeopleButton onClick={this.handlePeople}>People</PeopleButton>
					<PlanetsButton onClick={this.handlePlanets}>Planets</PlanetsButton>
					<VehiclesButton onClick={this.handleVehicles}>
						Vehicles
					</VehiclesButton>
					<People people={this.state.people}/>
				</div>
				<SidebarContainer>
					<Sidebar>
						<div>
							{this.state.openingCrawl ? this.state.openingCrawl : <div />}
						</div>
						<div>{this.state.title ? this.state.title : <div />}</div>
						<div>{this.state.date ? this.state.date : <div />}</div>
					</Sidebar>
				</SidebarContainer>
			</div>
		);
	}
}

export default App;
