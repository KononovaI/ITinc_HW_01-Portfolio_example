import styled from "styled-components";

export const Menu = () => {
	return (
		<StyledMenu>
				<ul>
					<li><a href="#home">Home</a></li>
					<li><a href="#about">About</a></li>
					<li><a href="#tech-stack">Tech Stack</a></li>
					<li><a href="#projects">Projects</a></li>
					<li><a href="#contact">Contact</a></li>
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

	li {
		font-family: "DM Sans", sans-serif;
		font-weight: 500;
		font-size: 20px;
		line-height: 1.3;
		text-align: center;
	}

	a {
		color: #666;
		box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
		text-decoration: none;
		transition: color 0.3s;
	}

	a:hover {
		
	}

`