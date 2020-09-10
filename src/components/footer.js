import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import footerStyles from "./footer.module.scss"
import instagram from "../images/instagram.jpg"
import twitter from "../images/twitter.jpg"
import email from "../images/email.jpg"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <footer className={footerStyles.footer}>
      <div className={footerStyles.split}>
        <p className={footerStyles.footerTitle}>
          {data.site.siteMetadata.title}
        </p>
        <p> © 2020</p>
      </div>
      <div className={footerStyles.split}>
        <a href="//#endregion"><img src={instagram} alt="website logo" /></a>
        <img src={twitter} alt="website logo" />
        <img src={email} alt="website logo" />
      </div>
    </footer>
  )
}

export default Footer