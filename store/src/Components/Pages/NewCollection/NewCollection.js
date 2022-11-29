import React from 'react';
import s from './newCollection.module.scss'
const NewCollection = () => {
    return (
        <div className={s.newCollection}>
            <div className={s.wrapper}>
                <h4>New collectons</h4>
                <div className={s.block1}>
                    <div>
                        <div>We have a new Christmas collection!</div>
                        <div>We will be happy to help you
                            please yourself and your
                            loved ones
                        </div>
                    </div>
                    <div><img src='./31.png' alt='newCollection1'></img></div>
                </div>
                <div className={s.block2}>
                    <div><img src='./32.png' alt='newCollection1'></img></div>
                    <div>We will help you not only to choose a model
                        for you,<br /> but also to decorate it beautifully
                    </div>
                </div>
                <div className={s.block3}>

                    <div>Our pajamas are perfect
                        for a New Year's gift
                    </div>
                    <div><img src='./33.png' alt='newCollection1'></img></div>
                </div>
            </div>
        </div>
    );
}

export default NewCollection;
