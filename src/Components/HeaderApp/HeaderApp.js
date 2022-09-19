import React from 'react';
import Inq from '../../img/inq.png'

export const HeaderApp = () => {
    return (
        <div className='divHeaderApp'>
            <img src={Inq} alt='inq'/>
            <marquee className='headerAppText' scrollamount="10">Данная информация не является индивидуальной инвестиционной рекомендацией, и финансовые инструменты либо операции, упомянутые в ней, могут не соответствовать Вашему инвестиционному профилю и инвестиционным целям (ожиданиям).</marquee>
        </div>
    )
}