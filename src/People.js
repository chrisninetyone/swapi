import React from 'react';
import styled from 'styled-components';

const PeopleCard = styled.div`
	border: 1px solid red;
	width: 100px;
	height: 200px;
	float: right;
`;

export default class People extends React.Component {
	render() {
		return (
			<PeopleCard>
				{this.props.homeworld.map(val => {
					return val;
				})}
				{this.props.people.map(val => {
					return <h3>Name: {val.name}</h3>;
				})}
			</PeopleCard>
		);
	}
}

// DATA NEEDED
// Name
// Homeworld
// Species
// Population of Homeworld
// A button to “Favorite” the person
