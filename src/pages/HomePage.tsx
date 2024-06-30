import React, { useEffect } from 'react'
import './Homepage.css';
import IconHamburger from '@assets/icon/hamburger.jpg';
import IconPortofolios from '@assets/icon/portofolio.jpg';
import IconCoin from '@assets/icon/coin.jpg';

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@components/shadcn/ui/select";

const HomePage: React.FC = () => {

    const portofolios = [
        {
            src: IconCoin,
            name: 'IBTC'
        },
        {
            src: IconCoin,
            name: 'ISOL'
        },
        {
            src: IconCoin,
            name: 'IETH'
        },
        {
            src: IconCoin,
            name: 'MEME'
        },
        {
            src: IconCoin,
            name: 'DEFI'
        },
        {
            src: IconCoin,
            name: 'STAKE'
        },
        {
            src: IconCoin,
            name: 'DEPIN'
        },
        {
            src: IconCoin,
            name: 'DESCI'
        },
        {
            src: IconCoin,
            name: 'DEAI'
        },
        {
            src: IconCoin,
            name: 'STABLE'
        }
    ];

    React.useEffect(() => {
        const sidebar = document.getElementById("sidebar");
        if (!sidebar) return;

        const els = sidebar.getElementsByClassName("sidebar_width") as HTMLCollectionOf<Element>;

        sidebar.addEventListener("mouseenter", function () {
            Array.from(els).forEach((el) => {
                el.classList.remove('hide')
            });
        });
        sidebar.addEventListener("mouseleave", function () {
            Array.from(els).forEach((el) => {
                el.classList.add('hide')
            });
        });
    }, [])
    return (
        <div style={{ position: 'relative', width: '100%', height: '100vh', display: 'flex', flexDirection: 'row' }}>
            <div className='h-full flex flex-col justify-between border-grey-700 border-r-2' id="sidebar">
                <div className='h-full flex flex-col border'>
                    <div className='p-3 flex bg-gray-100 text-xl'>
                        <div className='sidebar_width'>
                        </div>
                            <span className='w-'>GLAM</span>
                        <span className='ml-3 text-2xl'>*.+</span>
                    </div>
                    <div className='flex flex-col bg-gray-100 border-y-2'>
                        <div className='flex items-center'>
                            <img className="w-11 mx-3" src={IconHamburger} />
                            <div className='sidebar_width text-gray-400'>
                                <span>Screener</span>
                            </div>
                        </div>
                        <div className='flex items-center'>
                            <img className="w-11 mx-3" src={IconPortofolios} />
                            <div className='sidebar_width text-gray-400'>
                                <span>Portofolio</span>
                            </div>
                        </div>
                    </div>
                    <div className='overflow-y-auto overflow-x-clip'>
                        {
                            portofolios.map((value, index) => {
                                return (
                                    <div key={index} className='py-3 flex items-center'>
                                        <img className="w-8 mx-4" src={value.src} />
                                        <div className='sidebar_width px-0  text-black'>
                                            <span>{value.name}</span>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div>
                        <div className='flex items-center'>
                            <span className='text-gray-400 text-4xl mx-4 text-center align-middle'>+</span>
                            <div className='sidebar_width pt-2 text-gray-400'>
                                <span className='text-nowrap'>CREATE PRODUCT</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='px-4 py-2  bg-gray-100 border-grey-700 border-r-2 select-container'>
                    <Select>
                        <SelectTrigger className="border-grey-700 sidebar_width">
                            <img className="w-6 m-2" src={IconCoin} />
                            <SelectValue placeholder="D5uR...EDID" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="light">D5uR...EDID</SelectItem>
                            <SelectItem value="dark">T64c...UFG7</SelectItem>
                            <SelectItem value="system">93MA...27NF</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}

export default HomePage
