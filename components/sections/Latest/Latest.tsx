import { useState } from 'react';
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectCards } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-cards';

import { Box, Button, Card, Container, Link, Text } from '@components/ui';
import s from './Latest.module.scss';

SwiperCore.use([EffectCards]);

export const LatestBlogs = ({ articles }) => {
  const [x, setX] = useState(0);

  const translate = (pos) => {
    setX((prev) => prev + pos);
  };

  return (
    <Container full className={s.root} id='latest'>
      <Container className='mb-5'>
        <Box className='flex justify-between items-center'>
          <Text as='h2'>Latest Blogs</Text>
          <Link
            href='/blog'
            className='font-heading uppercase hidden md:block text-sm font-medium'
          >
            See the full blog
          </Link>
        </Box>
        <Text>
          Swipe left or right to see the latest articles or click{' '}
          <Link href='/blog' className='text-rose-500 font-medium'>
            here
          </Link>{' '}
          to go to the blog.
        </Text>
      </Container>

      <Container className='md:hidden'>
        <Swiper effect={'cards'} grabCursor={true}>
          {articles?.length &&
            articles.map(
              ({
                id,
                title,
                published_at,
                reading_time_minutes,
                cover_image,
              }) => (
                <SwiperSlide key={id}>
                  <Card
                    title={title}
                    date={published_at}
                    readingTime={reading_time_minutes}
                    coverImage={cover_image}
                  />
                </SwiperSlide>
              )
            )}
        </Swiper>
      </Container>

      <Box
        className='hidden md:flex gap-x-10 pl-10 w-[3000px] transition duration-500 ease-in-out'
        style={{ transform: `translate3d(${x}px, 0px, 0px)` }}
      >
        {articles?.length &&
          articles.map(
            ({
              id,
              title,
              published_at,
              reading_time_minutes,
              cover_image,
            }) => (
              <Card
                key={id}
                title={title}
                date={published_at}
                readingTime={reading_time_minutes}
                coverImage={cover_image}
              />
            )
          )}
      </Box>
      <Container className='hidden md:block'>
        <Button
          className={s.arrows}
          size='sm'
          disabled={x === 0}
          onClick={() => translate(510)}
        >
          <MdArrowBackIosNew className='h-6 w-auto' />
        </Button>
        <Button
          className={s.arrows}
          disabled={x === -1530}
          size='sm'
          onClick={() => translate(-510)}
        >
          <MdArrowForwardIos className='h-6 w-auto' />
        </Button>
      </Container>
    </Container>
  );
};