import React from 'react'
import cn from 'classnames'

import './custom.css'
import s from './App.modules.scss'
import image from './assets/images/pokemon.png'

import * as example from './example'

const App = () => {
    return (
        <div className="wrapper">
            <div className={s.block}>
                <div className={s.header}>
                    <p className={s.header__title}>
                        Homework <span className={ cn(s.header__title__span, 'accent') }>#2</span>
                    </p>
                </div>
                <div className={s.body}>
                    <p className={s.body__line}><span className="accent">#1</span>: { example.concat('Hello', 'world') }</p>
                    <p className={s.body__line}><span className="accent">#2</span>: { example.myHometask.howIDoIt }</p>
                    <p className={s.body__line}><span className="accent">#3</span>: { example.summ }</p>
                    <img className={s.body__image} src={image} alt="???"/>
                </div>
                <p className={s.copy}>&copy; React marathon PRO</p>
            </div>
        </div>
    )
}

export default App
