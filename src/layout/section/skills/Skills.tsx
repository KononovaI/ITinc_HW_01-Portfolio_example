import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';
import { SectionSubtitle } from '../../../components/SectionSubtitle';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Skill } from './skill/Skill';

export const Skills = () => {
	return (
		<StyledSkills>
			<SectionTitle>My Tech Stack</SectionTitle>
			<SectionSubtitle>Technologies I've been working with recently</SectionSubtitle>
			<FlexWrapper wrap={"wrap" } justify={"space-between"}>
				<Skill iconId={"javascript"}/>
				<Skill iconId={"typescript"}/>
				<Skill iconId={"html"}/>
				<Skill iconId={"css"}/>
				<Skill iconId={"bootstrap"}/>
				<Skill iconId={"sass"}/>
				<Skill iconId={"react"}/>
				<Skill iconId={"redux"}/>
				<Skill iconId={"vscode"}/>
				<Skill iconId={"mysql"}/>
				<Skill iconId={"docker"}/>
				<Skill iconId={"git"}/>
			</FlexWrapper>
		</StyledSkills>
	);
};

const StyledSkills = styled.section`
background-color: #f3ebbb;
min-height: 100vh;
`