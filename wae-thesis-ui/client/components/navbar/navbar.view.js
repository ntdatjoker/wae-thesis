import React from 'react'
import {Link} from 'react-router'
import cssModules from 'react-css-modules'
import { InputGroup, InputGroupButton, Input } from "reactstrap"
import { Glyphicon, Col } from "react-bootstrap"
import style from "./navbar.style.scss"

@cssModules(style, {errorWhenNotFound: false})
export class NavbarView extends React.Component {
    render() {
        return (
          <div styleName="nav-bar--fixed">
              <Col lg={2}>
                  <div styleName="nav-bar__logo--left-fixed" className="animated swing" >
                      <span styleName="nav-bar--red">W</span>A<span style={{color: 'yellow'}}>D</span>E
                  </div>
              </Col>
              <Col lg={6}>
                  <div styleName="nav-bar__list--right">
                      <InputGroup>
                          <InputGroupButton color="warning">
                              <button className="btn" styleName="btn-yellow">What you are looking for</button>
                          </InputGroupButton>
                          <Input placeholder="............" />
                          <InputGroupButton color="success">
                              <button className="btn" styleName="btn-yellow">
                                  <Glyphicon glyph="eye-open"/> Search
                              </button>
                          </InputGroupButton>
                      </InputGroup>
                  </div>
              </Col>
              <Col lg={4}>
                  <div styleName="nav-bar__list--right">
                      <Link styleName="nav-bar__link--default" to="/app/home">Home</Link>
                      <Link styleName="nav-bar__link--default" to="/signin">Sign In</Link>
                      <Link styleName="nav-bar__link--default" to="/signup">Sign Up Free</Link>
                      <Link styleName="nav-bar__link--default" to="/app/explore">
                          <Glyphicon glyph="shopping-cart"/> Cart
                      </Link>
                  </div>
              </Col>
          </div>
        )
    }
}
