import React, { Component } from 'react'
import { Container } from 'reactstrap'
import SideNav from './SideNavMenu/SideNav'

export function Layout(props) {
  return (
    <div>
      <SideNav />
      <Container>{props.children}</Container>
    </div>
  )
}
