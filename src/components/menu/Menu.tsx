import styled from "styled-components";

export const Menu = () => {
	return (
		<StyledMenu>
				<ul>
					<li>Home</li>
					<li>About</li>
					<li>Tech Stack</li>
					<li>Projects</li>
					<li>Contact</li>
				</ul>
			</StyledMenu>
	);
};

const StyledMenu = styled.nav`
	ul {
		display: flex;
		gap: 30px;
		list-style: none;
	}
`