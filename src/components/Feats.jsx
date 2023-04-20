import {motion} from 'framer-motion'
import {styles} from '../styles'
import {SectionWrapper} from '../hoc'
import { fadeIn,textVariant } from '../utils/motion'
import { feats } from '../constants'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const FeatsCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) =>{
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <div
        
        className='p-5 rounded-2xl sm:w-[360px] w-full'
        onClick={() => window.open(source_code_link, "_blank")}
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Feats = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    touchMove:true,
    useCSS:true,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0
          
        }
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0
          
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className='mt-12 bg-black-100 rounded-[20px]'>
      <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`} >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Look at my</p>
          <h2 className={styles.sectionHeadText}>Feats</h2>
        </motion.div>
      </div>
      <Slider {...settings} className={`${styles.paddingX} -mt-20 pb-14 gap-7 flex items-center`}>
        {feats.map((feats,index) =>(
          <FeatsCard
            key={feats.name}
            index={index}
            {...feats}
          />
        ))}
      </Slider>
    </div>
  )
}

export default SectionWrapper(Feats,"")