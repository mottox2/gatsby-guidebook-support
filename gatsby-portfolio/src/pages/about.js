import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <h1>I'm mottox2</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default AboutPage
