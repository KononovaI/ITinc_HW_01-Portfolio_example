import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import drawing from "../../../assets/images/Drawing.png";
import { SectionTitle } from "../../../components/SectionTitle";

export const About = () => {
	return (
		<StyledAbout>
			<FlexWrapper >
				<StyledAboutTextArea>
					<SectionTitle>About Me</SectionTitle>
					<p>The Generator App is an online tool that helps you to export ready-made templates ready to work as your future website. It helps you to combine slides, panels and other components and export it as a set of static files: HTML/CSS/JS.
					</p>
					<FlexWrapper direction={"column"} align={"start"} justify={"space-around"}>
						<StyledAboutSubtitle>Work Experience</StyledAboutSubtitle>
						
						<StyledAboutSubtitle>Education</StyledAboutSubtitle>
					</FlexWrapper>
				</StyledAboutTextArea>
				<StyledAboutDrawing>
					<StyledDrawing src={drawing} />
				</StyledAboutDrawing>
			</FlexWrapper>
		</StyledAbout>
		
	);
}; 

const StyledAbout = styled.div`
	background-color: #e7dc43;
	
`
const StyledAboutTextArea = styled.div`
	display: flex;
	flex-direction: column;
	align-items: auto;
`

const StyledAboutSubtitle = styled.h2`
	font-family: "Poppins", sans-serif;
	font-weight: 700;
	font-size: 42px;
	line-height: 1.2381;
	letter-spacing: -0.01em;
	color: #42446e;
`

const StyledAboutDrawing = styled.div`
	
`

const StyledDrawing = styled.img`
`