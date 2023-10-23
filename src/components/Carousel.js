import { useState } from 'react';
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa';

const Carousel = ({slides}) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    let previousSlide = () => {
        console.log('previous')
        if (currentSlide === 0) setCurrentSlide(slides.length - 1);
        else setCurrentSlide(currentSlide - 1);
    }

    let nextSlide = () => {
        console.log('next')
        if (currentSlide === slides.length - 1) setCurrentSlide(0);
        else setCurrentSlide(currentSlide + 1);
    }

    return (
        <div className="overflow-hidden relative">
            <div className={`flex gap-10 p-12 transition ease-in-out duration-500 translate-x-[-${currentSlide * 100}]`}>
                {slides.map((slide, index) => {
                    return <img src={slide} alt="" key={`image` + index} />
                })}
            </div>

            <div className='absolute top-0 h-full w-full justify-between items-center flex text-3xl text-gray-500'>
                <button onClick={previousSlide}>
                    <FaChevronCircleLeft />
                </button>

                <button onClick={nextSlide}>
                    <FaChevronCircleRight />
                </button>
            </div>

            <div className='absolute bottom-0 py-4 flex justify-center gap-10 w-full'>
                {slides.map((slide, index) => {
                    return <div key={`circle` + index} onClick={() => {setCurrentSlide(index)}} className={`rounded-full w-5 h-5 cursor-pointer ${index === currentSlide ? 'bg-[#6366F1]' : 'bg-[#D6BBFB]'}`}></div>
                })}
            </div>
        </div>
    )
}

export default Carousel;