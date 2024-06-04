"use client"
import Slider from "react-slick";
import React, { Component } from "react";
import Image from "next/image";

// CAROUSEL DATA

interface DataType {
    profession: string;
    name: string;
    imgSrc: string;
}

const postData: DataType[] = [
    {
        profession: 'Doctor of Mediciner',
        name: 'Shoo Thar Mien',
        imgSrc: '/assets/mentor/user3.png',
    },
    {
        profession: 'Doctor of Pharmacy',
        name: 'Shoo Thar Mien',
        imgSrc: '/assets/mentor/user2.png',
    },
    {
        profession: 'Bachelor of Science',
        name: 'Shoo Thar Mien',
        imgSrc: '/assets/mentor/user1.png',
    },
    {
        profession: 'Doctor of Mediciner',
        name: 'Shoo Thar Mien',
        imgSrc: '/assets/mentor/user3.png',
    },
    {
        profession: 'Doctor of Pharmacy',
        name: 'Shoo Thar Mien',
        imgSrc: '/assets/mentor/user2.png',
    },
    {
        profession: 'Bachelor of Science',
        name: 'Shoo Thar Mien',
        imgSrc: '/assets/mentor/user1.png',
    },
]

// CAROUSEL SETTINGS

function SampleNextArrow(props: { className: any; style: any; onClick: any; }) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "flex", justifyContent: "center", position: 'absolute', alignItems: "center" , background: "#D5EFFA", padding: "28px", borderRadius: "30px", border: "1px solid #1A21BC" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props: { className: any; style: any; onClick: any; }) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "flex", justifyContent: "center", alignItems: "center" , background: "#D5EFFA", padding: "28px", borderRadius: "30px", border: "1px solid #1A21BC" }}
            onClick={onClick}
        />
    );
}



export default class MultipleItems extends Component {

    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 3,
            // centerMode: true,
            slidesToScroll: 1,
            arrows: false,
            autoplay: false,
            speed: 4000,
            nextArrow: <SampleNextArrow className={undefined} style={undefined} onClick={undefined} />,
            prevArrow: <SamplePrevArrow className={undefined} style={undefined} onClick={undefined} />,
            autoplaySpeed: 4500,
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
                    breakpoint: 1000,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 530,
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
            <div className="py-10 sm:py-24 mentor-bg" id="mentor">

                <div className='mx-auto max-w-2xl lg:max-w-7xl sm:py-4 px-4 lg:px-8 relative'>
                    <h2 className="lh-82 text-midnightblue text-4xl md:text-55xl text-center md:text-start balootamma">Meet with our Doctors.</h2>

                    <Slider {...settings}>
                        {postData.map((items, i) => (
                            <div key={i}>
                                <div className='m-3 py-14 md:my-10 text-center'>
                                    <div className="relative m-10 rounded-full overflow-auto">
                                        <img src={items.imgSrc} alt="user-image" className="w-full inline-block m-auto" />
                                        {/* <div className="absolute right-[84px] bottom-[102px] bg-white rounded-full p-4">
                                            <Image src={'/assets/mentor/linkedin.svg'} alt="linkedin-image" width={25} height={24} />
                                        </div> */}
                                        <div className="text-2xl bg-white py-4 text-[#2EA8A3] balootamma">{items.name}</div>
                                        <div className="text-2xl bg-white pb-14 text-[#2EA8A3] balootamma">{items.profession}</div>
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
