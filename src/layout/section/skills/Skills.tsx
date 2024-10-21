import React from 'react';
import styled from 'styled-components';
import { Icon } from '../../../components/icon/Icon';

export const Skills = () => {
	return (
		<StyledSkills>
			<SectionTitle>My Tech Stack</SectionTitle>
			<SectionSubtitle>Technologies I've been working with recently</SectionSubtitle>
			<FlexWrapper>
				<Skill>
					<Icon iconId={"code"} />
				</Skill>
			</FlexWrapper>
		</StyledSkills>
	);
};

const StyledSkills = styled.section`
`