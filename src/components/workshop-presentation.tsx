import React from "react"
import styled from "styled-components"
import catAnimation from "../images/cat-animation.json"
import Lottie from "lottie-react"

interface StyledTextProps {
  fontSize: string
}

const StyledText = styled.p<StyledTextProps>`
  font-family: "Sometype Mono", monospace;
  font-size: ${props => props.fontSize};
  width: 600px;
  text-align: center;
  display: flex;
  align-items: center;
  margin: 0;
`

const OuterDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export default function WorkshopPresentation(): JSX.Element {
  const documentURL =
    "https://docs.google.com/presentation/d/1e_vINlWWLHtegyQcR--mvCvGlNmhpfysiLK1excNNok/edit?usp=sharing"
  return (
    <OuterDiv>
      <a
        href={documentURL}
        style={{
          color: "#e47760",
        }}
      >
        <StyledText fontSize="50px">Workshop Presentation</StyledText>
      </a>
      <StyledText fontSize="20px">
        Check out the presentation to get a summary of all the frameworks we are
        using today!
      </StyledText>
      <Lottie
        animationData={catAnimation}
        style={{ width: "50vw", height: "50vh" }}
      />
    </OuterDiv>
  )
}
