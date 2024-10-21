import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';
import { SectionSubtitle } from '../../../components/SectionSubtitle';

export const Projects = () => {
	return (
		<StyledProjects>
			<SectionTitle>Projects</SectionTitle>
			<SectionSubtitle>Things I’ve built so far</SectionSubtitle>
		</StyledProjects>
	);
};

const StyledProjects = styled.section`
	min-height: 100vh;
	background-color: #f2f2f2;
`