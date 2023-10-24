import React from "react"
import Lottie from "lottie-react"
import welcomeAnimation from "../images/welcome-animation.json"
import WelcomeMessage from "../components/welcome-message"
import { Grid } from "@mui/material"

export default function Home(): JSX.Element {
  return (
    <Grid
      container
      justifyContent="center" 
      alignItems="center"
      style={{ height: "100vh" }}
    >
      <Grid item xs={12} sm={6}> 
        <WelcomeMessage />
      </Grid>
      <Grid item xs={12} sm={6}> 
        <Lottie animationData={welcomeAnimation} />
      </Grid>
    </Grid>
  )
}
