import React from 'react'
import cn from 'classnames'

import s from './App.modules.scss'
import './custom.css'
import image from './assets/images/image.jpg'

const App = () => {
    return (
        <div className="wrapper">
            <div className={s.block}>
                <div className={s.header}>
                    <p className={s.header__title}>
                        This is <span className={ cn(s.header__title__span, 'accent') }>App</span> component
                    </p>
                </div>
                <div className={s.body}>
                    <img className={s.body__image} src={image} alt="???"/>
                </div>
                <p className={s.copy}>&copy; React marathon PRO</p>
            </div>
        </div>
    )
}

export default App
