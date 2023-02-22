import React, { FC } from 'react'
import Box from '@mui/material/Box'
import { StyledButton } from '@/components/styled-button'

const AuthNavigation: FC = () => {
  return (
    <Box sx={{ '& button:first-child': { mr: 2 } }}>
      <StyledButton disableHoverEffect={true} variant="outlined" onClick={()=>{console.log("Hello")}}>
        Sign In
      </StyledButton>
      <StyledButton disableHoverEffect={true} onClick={()=>console.log("Sign up")}>Sign Up</StyledButton>
    </Box>
  )
}

export default AuthNavigation
