import React from 'react';
import { Icon } from '../../../../components/icon/Icon';
import styled from 'styled-components';

type SkillPropsType = {
	iconId: string
}

export const Skill = (props: SkillPropsType) => {
	return (
		<StyledSkill>
			<Icon iconId={props.iconId} viewBox="0 0 120 119"/>
		</StyledSkill>
	);
};

const StyledSkill = styled.div`
	width: 16%;
	
`