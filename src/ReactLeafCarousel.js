import React from "react";
import InfiniteCarousel from "react-leaf-carousel";

// carousel data object
const ImgData = [
    { alt: "Image1", src: "../images/kpl-1.jpg", classId:"sliderImg1"},
    { alt: "Image2", src: "../images/kpl-2.jpg", classId:"tsliderImg2" },
    { alt: "Image3", src: "../images/kpl-3.jpg", classId:"sliderImg3" },
    { alt: "Image4", src: "../images/kpl-4.jpg", classId:"sliderImg4" },
    { alt: "Image5", src: "../images/kpl-5.png" , classId:"sliderImg5"},
    { alt: "Image6", src: "../images/kpl-6.jpg" , classId:"sliderImg6"},
    { alt: "Image7", src: "../images/kpl-7.jpg" , classId:"sliderImg7" },
    { alt: "Image8", src: "../images/kpl-8.jpg" , classId:"sliderImg8"},
    { alt: "Image9", src: "../images/kpl-9.jpg" , classId:"sliderImg9" }
];

// carousel slider data component

function ImgComponent({ src, alt, classId }) {
    return (
        <div className={classId}>
            <img src={src} alt={alt} />
            <p>{alt}</p>
        </div>
    );
}

// carousel data iterator
const ImgDataIterator = ImgData.map((element) => (
    <ImgComponent src={element.src} alt={element.alt} />
));

export default function ReactLeafCarousel() {
    return (
        <InfiniteCarousel
            breakpoints={[
                {
                    breakpoint: 320,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        dots:2
                    }
                },
                {
                    breakpoint: 720,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        dots:3
                    }
                },
                {
                    breakpoint: 1000,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 4,
                        dot:4
                    }
                }
            ]}
            lazyLoad={true}
            dots={true}
            showSides={true}
            sidesOpacity={0.5}
            sideSize={0.01}
            slidesToScroll={5}
            slidesToShow={4}
            scrollOnDevice={true}
        >
            {ImgDataIterator }
        </InfiniteCarousel>
    );
}
