import React from 'react';
import s from './collection.module.scss'

const Colection = () => {
    const [index, setIndex] = React.useState(0);

    const cards = [
        { id: '1', Image: './2.png' },
        { id: '2', Image: './3.png' },
        { id: '3', Image: './4.png' }
    ]

    let mod = (n, m) => {
        let result = n % m;
        return result = 0 ? result : result + m
    }
    React.useEffect(() => {
        setTimeout(() => {
            setIndex((index + 1) % cards.length)
        }, 3000)
    }, [cards.length, index]);


    return (
        <div className={s.colection}>
            <div className={s.content}>
                <div className={s.title}>New collectons</div>
                <div className={s.preview}>
                    <div className={s.img}>
                        <img src='./1.png' alt='main colect'></img>
                    </div>
                    <div className={s.carusel}>
                        {/* <img className={s.center} src='./2.png'></img>
                        <img className={s.left} src='./3.png'></img>
                        <img className={s.right} src='./4.png'></img> */}
                        {cards.map((item, i) => {
                            const indexLeft = mod(index + 1, cards.length)
                            const indexRight = mod(index + 1, cards.length)
                            let className = ''; 
                            if (i === index) {
                                className = s.center
                            } else if (i === indexLeft) {
                                className = s.left
                            } else if (i === indexRight) {
                                className = s.right
                            } else {
                                className=s.card
                            }
                            return <img key={item.id} src={item.Image} alt='collect' className={className} />
                        })}
                    
                            <span className={s.more}>more...</span>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Colection;
