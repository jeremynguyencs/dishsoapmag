import React from "react"

import Layout from "../components/layout"
import Head from "../components/head"
import Nav from "../components/nav"
import Subheader from "../components/subHeader"
import layoutStyles from "../components/layout.module.scss"
import contactStyles from "./contact.module.scss"
import MobileNav from "../components/mobileNav"


const ContactPage = () => {
  return (
    <>
    <MobileNav />
      <Nav />
      <Subheader title="reach  us over the soap suds!" />
      <Layout>
        <Head title="Contact" />
        <div className={layoutStyles.title}>
          <h2>do you see your work finding its home at dishsoap?</h2>
        </div>

        <div className={layoutStyles.pinkLineTop}></div>
        <div className={contactStyles.contactForm}>
          <form name="contact" method="POST" data-netlify="true">
            <div className={contactStyles.formContainer}>
              <div className={contactStyles.side}>
                <label>
                  <p>email*</p> <input type="email" name="email"  placeholder="example@gmail.com"  />
                </label>
              </div>
              <div className={contactStyles.side}>
                <label>
                  <p>full name*</p> <input type="text" name="name" placeholder="John Doe" />
                </label>
              </div>
            </div>
            <div>
              <label>
                <p>type your message here...</p>{" "}
                <textarea
                 placeholder="Lorem ipsum dolor sit amet..." 
                  name="message"
                  className={contactStyles.boxsizingBorder}
                ></textarea>
              </label>
            </div>
            <div>
              <button type="submit">contact!</button>
            </div>
          </form>
        </div>
        <div className={layoutStyles.pinkLineBottom}></div>
        <div className={contactStyles.quote}>
          <h1 className={contactStyles.quoteText}>
            "friends don't leave friends behind to wash dishes for yetis!"
          </h1>
          <h1 className={contactStyles.author}>- philip reeve</h1>
        </div>
      </Layout>
    </>
  )
}

export default ContactPage