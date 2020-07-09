import React, { useState } from 'react'
import { Container } from 'reactstrap'
import SideNav from './SideNavMenu/SideNav'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import clsx from 'clsx'

export function Layout(props) {
  const [open, setOpen] = React.useState(false)

  const drawerWidth = 240

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  const useStyles = makeStyles(theme => ({
    appContainerShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
  }))
  const classes = useStyles()

  return (
    <div>
      <SideNav
        open={open}
        setOpen={setOpen}
        handleDrawerClose={handleDrawerClose}
        handleDrawerOpen={handleDrawerOpen}
      />
      <Container
        className={clsx(classes.app, {
          [classes.appContainerShift]: open,
        })}
      >
        {props.children}
      </Container>
    </div>
  )
}
