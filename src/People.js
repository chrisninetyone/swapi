import React from 'react';
import styled from 'styled-components';

const PeopleCard = styled.div`
	border: 1px solid red;
	width: 100px;
	height: 200px;
    float: right;
`;

const People = props =>
	props.people.map(val => {
		return <PeopleCard>{val.name}</PeopleCard>;
	});

export default People;
