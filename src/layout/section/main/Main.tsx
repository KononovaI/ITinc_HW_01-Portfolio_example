import styled from 'styled-components';
import photo from "../../../assets/images/photo.png";
import { FlexWrapper } from '../../../components/FlexWrapper';
import abstraction from "../../../assets/images/Abstract.png";

export const Main = () => {
	return (
		<StyledMain>
			<FlexWrapper>
				<MainTextArea>
					<MainSpan>Hi ,</MainSpan>
					<MainSpan>May name is</MainSpan>
					<MainSpanGradient>Pavan MG</MainSpanGradient>
					<MainTitle>I build things for web</MainTitle>
				</MainTextArea>
				<div>
				<Photo src={photo} alt="Profile photo" />
				<Abstract src={abstraction} />
				</div>
			</FlexWrapper>
		</StyledMain>
	);
};

const StyledMain = styled.div`
	min-height: 100vh;
	background-color: rgb(209, 240, 212)
`

const MainTextArea = styled.div`
	display: flex;
	flex-direction: column;

`


const MainSpan = styled.span`
	
`

const MainSpanGradient = styled.span`
	
`
const MainTitle = styled.h1`
`

const Photo = styled.img`
	max-width: 200px;
	max-height:200px;
	border-radius: 200px;
	object-fit: cover;
`

const Abstract = styled.img`
	
`