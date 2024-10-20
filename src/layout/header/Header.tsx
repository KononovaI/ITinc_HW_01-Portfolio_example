import React from "react";
import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { Menu } from "../../components/menu/Menu";
import { Social } from "../../components/social/Social";
import logo from "../../assets/images/i-logo.jpeg";


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
	justify-content: space-between;
	
`