import * as React from "react"

import AppHeader from "./AppHeader"
import { theme } from "./AppTheme"

import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'


const Layout: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppHeader />
      {children}
    </ThemeProvider>
  )
}

export default Layout
