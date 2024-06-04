"use client"
import Slider from "react-slick";
import React, { Component } from "react";
import { StarIcon } from '@heroicons/react/24/solid';
import Image from "next/image";

// CAROUSEL DATA

interface DataType {
    profession: string;
    comment: string;
    imgSrc: string;
    imgSrc2: string;
    name: string;
}

const postData: DataType[] = [
    // {
    //     name: "Robert Fox",
    //     profession: 'MONDAY, MAY 2024',
    //     comment: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    //     imgSrc: '/assets/testimonial/user.svg',
    // },
    {
        name: "Leslie Alexander",
        profession: 'MONDAY, MAY 2024',
        comment: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident',
        imgSrc: '/assets/mentor/user2.png',
        imgSrc2: '/assets/mentor/c1.png',
    },
    {
        name: "Cody Fisher",
        profession: 'MONDAY, MAY 2024',
        comment: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident',
        imgSrc: '/assets/mentor/user3.png',
        imgSrc2: '/assets/mentor/c2.png',
    },
    {
        name: "Robert Fox",
        profession: 'MONDAY, MAY 2024',
        comment: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident',
        imgSrc: '/assets/mentor/user1.png',
        imgSrc2: '/assets/mentor/c3.png',
    },
    {
        name: "Leslie Alexander",
        profession: 'MONDAY, MAY 2024',
        comment: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident',
        imgSrc: '/assets/mentor/user2.png',
        imgSrc2: '/assets/mentor/c1.png',
    },
    {
        name: "Cody Fisher",
        profession: 'MONDAY, MAY 2024',
        comment: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident',
        imgSrc: '/assets/mentor/user3.png',
        imgSrc2: '/assets/mentor/c2.png',
    },
]

// CAROUSEL SETTINGS


export default class MultipleItems extends Component {

    render() {
        const settings = {
            dots: true,
            dotsClass: "slick-dots",
            infinite: true,
            slidesToShow: 3,
            // centerMode: true,
            slidesToScroll: 2,
            arrows: false,
            autoplay: false,
            speed: 500,
            autoplaySpeed: 2000,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                }
            ]
        };

        return (
            <div className="pt-40 pb-10 sm:pb-32 lg:py-32" id="testimonial">
                <div className="text-center text-6xl text-midnightblue balootamma">What People say?</div>
                <div className='mx-auto max-w-7xl sm:py-4 lg:px-8'>
                    <Slider {...settings}>
                        {postData.map((items, i) => (
                            <div key={i}>
                                <div className={`bg-white m-4 p-5 my-20 relative ${i % 2 ? 'middleDiv' : 'testimonial-shadow'}`}>
                                    <div className=" flex gap-4 items-center">
                                        <Image src={items.imgSrc2} alt={items.imgSrc2} width={60} height={60} className="inline-block rounded-full" />
                                        <h3 className='text-lg font-medium text-darkbrown'>{items.name}</h3>
                                    </div>
                                    <h4 className='text-base font-normal text-darkgray my-4'>{items.comment}</h4>
                                    <hr style={{ color: "#D7D5D5" }} />
                                    <div className="flex justify-between">
                                        <div className="mt-4">
                                            <h3 className='text-sm font-normal text-lightgray pb-2'>{items.profession}</h3>
                                        </div>
                                        <div className="flex">
                                            <StarIcon width={20} className="text-gold" />
                                            <StarIcon width={20} className="text-gold" />
                                            <StarIcon width={20} className="text-gold" />
                                            <StarIcon width={20} className="text-gold" />
                                            <StarIcon width={20} className="text-lightgray" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

        );
    }
}
