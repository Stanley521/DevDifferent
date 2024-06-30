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

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@components/shadcn/ui/breadcrumb"

import OverviewTable from '@components/table/Overview';
import moment from 'moment';

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
                            <span className=''>GLAM</span>
                        </div>
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
            <div className='w-full h-full py-14 px-14'>
                <Breadcrumb className='pb-14'>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink className='font-semibold' href="/">Screener</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink className='font-semibold' href="/GBS">GBS</BreadcrumbLink>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>

                <div className='flex'>
                    <div className='mr-3'>
                        <img className="mb-3 w-20  bg-gray-100" src={IconCoin} />
                        <div className='w-20 h-20 p-2 bg-gray-100'>
                            <div className='text-xs text-gray-400'>Symbol</div>
                            <div className='font-bold text-xl'>GBS</div>
                            <div className='text-gray-400 text-sm'>CPR...IN1</div>
                        </div>
                    </div>
                    <div className='w-full mr-3'>
                        <div className='mb-3 p-2 h-20 bg-gray-100'>
                            <div className='font-semibold text-xl'>GLAM Investment Fund</div>
                            <div className='text-gray-400 text-xs'>The GLAM Investment Fund seeks to reflect generally the performance of Bitcoin and Solana</div>
                        </div>
                        <div className='flex'>
                            <div className='mr-3 w-1/3 h-20 p-2 bg-gray-100'>
                                <div className='text-xs text-gray-400'>Share Class Asset</div>
                                <div className='font-bold text-xl'>USDC</div>
                                <div className='text-gray-400 text-sm'>EPJ...tlv</div>
                            </div>
                            <div className='w-2/3 h-20 p-2 bg-gray-100'>
                                <div className='text-xs text-gray-400'>Fees</div>
                                <div className='flex flex-wrap'>
                                    <div className='w-1/2 flex justify-between pr-2'>
                                        <div className='text-sm text-gray-400'>Management</div>
                                        <div className='text-bold'>1.5%</div>
                                    </div>
                                    <div className='w-1/2 flex justify-between'>
                                        <div className='text-sm text-gray-400'>Subscription</div>
                                        <div className='text-bold'>1.5%</div>
                                    </div>
                                    <div className='w-1/2 flex justify-between pr-2'>
                                        <div className='text-sm text-gray-400'>Performance</div>
                                        <div className='text-bold'>1.5%</div>
                                    </div>
                                    <div className='w-1/2 flex justify-between'>
                                        <div className='text-sm text-gray-400'>Redemption</div>
                                        <div className='text-bold'>1.5%</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-2/5 flex flex-col justify-between bg-gray-100 p-5 mr-3'>
                        <div className='text-xs text-gray-400'>NAV</div>
                        <div className='font-semibold text-3xl'>100.00</div>
                        <div className='text-gray-400 text-xs'>1 Day NAV Change</div>
                        <div className='font-medium text-green-600'>1.00 (1.00%)</div>
                    </div>
                    <div className='w-2/5 flex flex-col justify-between bg-gray-100 p-5'>
                        <div className='text-xs text-gray-400'>AUM</div>
                        <div className='font-semibold text-3xl'>21.0M</div>
                        <div className='text-gray-400 text-xs'>1 Day AUM Change</div>
                        <div className='font-medium text-red-600'>1M (0.42%)</div>
                    </div>
                </div>

                <div className='w-100 mt-3'>
                    <div className='bg-gray-100 p-1 my-3 inline-flex'>
                        <span className='font-semibold bg-white p-2'>Overview</span>
                    </div>
                    <div className='w-100 flex'>
                        <div className='w-9/12 bg-gray-100 p-2 mr-3'>
                            <div className='font-semibold pb-3'>Performance</div>
                            <OverviewTable />
                        </div>
                        <div className='w-3/12 p-2 bg-gray-100 p-2'>
                            <div className='font-semibold pb-3'>Key Facts</div>
                            <div className='flex justify-between'>
                                <div className='text-sm text-gray-400 pb-2'>
                                    Share Class Assets
                                </div>
                                <div className='text-sm text-right pb-2'>
                                    USDC
                                </div>
                            </div>
                            <div className='flex justify-between border-b-2 border-gray-200 pb-2'>
                                <div className='text-sm text-gray-400 pb-2'>
                                    Inception Date
                                </div>
                                <div className='text-sm text-right pb-2'>
                                    {moment().format('YYYY-MM-DD')}
                                </div>
                            </div>

                            <div className='font-semibold py-3'>Accounts</div>
                            <div className='flex justify-between'>
                                <div className='text-sm text-gray-400 pb-2'>
                                    Fund
                                </div>
                                <div className='text-sm text-right pb-2'>
                                    Adx...faF
                                </div>
                            </div>
                            <div className='flex justify-between'>
                                <div className='text-sm text-gray-400 pb-2'>
                                    Manager
                                </div>
                                <div className='text-sm text-right pb-2'>
                                    3FA...3FVX
                                </div>
                            </div>
                            <div className='flex justify-between border-b-2 border-gray-200 pb-2'>
                                <div className='text-sm text-gray-400 pb-2'>
                                    Treasury
                                </div>
                                <div className='text-sm text-right pb-2'>
                                    VA64...JU5
                                </div>
                            </div>

                            <div className='font-semibold py-3'>Terms</div>
                            <div className='flex justify-between'>
                                <div className='text-sm text-gray-400 pb-2'>
                                    Lock-up Period
                                </div>
                                <div className='text-sm text-right pb-2'>
                                    24 hours
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage
