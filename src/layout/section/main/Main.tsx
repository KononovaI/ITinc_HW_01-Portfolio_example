import styled from 'styled-components';
import photoInga from "../../../assets/images/inga.jpg";
import { FlexWrapper } from '../../../components/FlexWrapper';

export const Main = () => {
	return (
		<StyledMain>
			<FlexWrapper align={"center"} justify={"space-around"}>
				<MainTextArea>
					<MainSpan>Hi there </MainSpan>
					<MainSpan>I'm Inga Kononova.</MainSpan>
					<MainTitle>A software developer</MainTitle>
				</MainTextArea>
				<Photo src={photoInga} alt="My photo" />
			</FlexWrapper>
		</StyledMain>
	);
};

const StyledMain = styled.div`
	min-height: 100vh;
	background-color: rgb(209, 240, 212)
`

const MainTextArea = styled.div`
	
`

const MainSpan = styled.span`
	
`
const MainTitle = styled.h1`
`

const Photo = styled.img`
	max-width: 200px;
	max-height:200px;
	border-radius: 200px;
	object-fit: cover;
`