import * as React from "react"

import Header from "./Header"
import { theme } from "./Theme"

import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'


const Layout: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      {children}
    </ThemeProvider>
  )
}

export default Layout
