import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Title = styled.h1`
  font-size: 24px;
  color: red;
`

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <Title>I'm mottox2</Title>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default AboutPage
