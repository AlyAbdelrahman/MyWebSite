import React from 'react'
import { CSSTransition } from "react-transition-group";

const Header=({handleClickNextSlide,show})=> {
    return (
        <div>
          <CSSTransition classNames="layout" appear={true}   timeout={5000} in={show}>
            <div className="layout-cover"></div>
          </CSSTransition>

            <button className="button button--state-success" onClick={handleClickNextSlide}>
              click to animete
            </button>
        </div>
    )
}
export default Header;