import styled from "styled-components";
import { Icon } from "../icon/Icon";


export const Social = () => {
	return (
		<StyledSocial>
				<a href="">
					<Icon iconId={'github'}/>
				</a>
				<a href="">
					<Icon iconId={'twitter'} width="32" height="32" viewBox="0 0 32 32"/>
				</a>
				<a href="">
					<Icon iconId={'linkedin'}/>
				</a>
			</StyledSocial>
	);
};

const StyledSocial = styled.div`
	display: flex;
	gap: 20px;
`