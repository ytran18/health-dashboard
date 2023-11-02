import React from "react";

import SingleCard from "./single-card";

import { ReactComponent as IconHearthRate } from '../../../assets/icons/iconHearhRate.svg';
import { ReactComponent as IconTemparature } from '../../../assets/icons/iconTemparature.svg';

const Cards = () => {

    const cards = [
        { title: 'Current hearth rate', type: 'hearth-rate', value: '124', icon:  IconHearthRate },
        { title: 'Body temparature', type: 'temparature', value: '60', icon: IconTemparature  },
        { title: 'Brain activity', type: 'brain-activity', value: '80', status: "Hight"  },
    ];

    return (
        <div className="flex justify-between w-full px-16">
            {cards.map((item, index) => {
                return (
                    <div className="" key={index}>
                        <SingleCard data={item}/>
                    </div>
                )
            })}
        </div>
    );
};

export default Cards;