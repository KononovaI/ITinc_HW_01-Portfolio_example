import React from "react";
import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { Menu } from "../../components/menu/Menu";
import { Social } from "../../components/social/Social";
import logo from "../../assets/images/logo-colored.png";


export const Header = () => {
	return (
		<StyledHeader>
			<Logo src={logo} alt="logo"/>
			<Menu/>
			<Social/>
		</StyledHeader>
	)
};

const StyledHeader = styled.header`
	display: flex;
	justify-content: space-around;
	align-items:center;
	background-color: #fff;
	position: sticky;
	top: 0;
	/* font-family: "DM Sans", sans-serif;
	font-weight: 500;
	font-size: 20px;
	line-height: 1.3;
	text-align: center;
	color: #666; */
`