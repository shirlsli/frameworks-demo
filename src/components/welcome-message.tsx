import { Button, Grid } from "@mui/material"
import React from "react"
import styled from "styled-components"
import { navigate } from "gatsby"

interface StyledTextProps {
  fontSize: string
  width: string
}

const StyledText = styled.p<StyledTextProps>`
  font-family: "Sometype Mono", monospace;
  font-size: ${props => props.fontSize};
  width: ${props => props.width};
  text-align: center;
  display: flex;
  align-items: center;
`

export default function WelcomeMessage(): JSX.Element {
  return (
    <div>
      <StyledText fontSize="70px" width="50vw">
        Hi, welcome to the workshop demo!
      </StyledText>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        style={{ width: "100%" }}
      >
        <Button
          variant="outlined"
          sx={{
            color: "#e47760",
            borderColor: "#e47760",
            "&:hover": {
              backgroundColor: "#fff9f7",
              borderColor: "#e47760",
            },
          }}
          onClick={ () => navigate("/slides") }
        >
          <StyledText fontSize="20px" width="300px">
            Click here to get started!
          </StyledText>
        </Button>
      </Grid>
    </div>
  )
}
