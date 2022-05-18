import React, { useState } from 'react'
import Tab from './tab'

const tabPortfolio = [
    {
       title: "Ilustraciones",
       content:"Ilustraciones",
    },
    {
        title: "Fotografia",
        content:"Fotografia",
     },
     {
        title: "Tipografias",
        content:"Tipografias",
     },
     {
        title: "Diseño 3D",
        content:"Diseño 3D",
     },
];

const TabsPortfolio = () => {
    return (
        <>
            <div className='tabs'>
                <div className='col text-center'>
                    <div className='row text-left'>
                        <Tab active={1}>
                            {tabPortfolio.map((tab,idx) => (
                                <Tab.TabPane key={`Tab-${idx}`} tab={tab.title}>
                                    {tab.content}
                                </Tab.TabPane>
                            ))}
                        </Tab>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TabsPortfolio