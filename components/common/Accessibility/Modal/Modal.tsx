import { motion } from 'framer-motion';
import cn from 'classnames';
import { Text, Box, Link } from '@components/ui';

import { VscChromeClose } from 'react-icons/vsc';
import { BiSun, BiMoon } from 'react-icons/bi';
import { BsQuestionCircle } from 'react-icons/bs';
import { FiAlignCenter } from 'react-icons/fi';
import { AiOutlineAlignLeft, AiOutlineAlignRight } from 'react-icons/ai';
import { RiCursorFill } from 'react-icons/ri';
import { ImFont } from 'react-icons/im';
import {
  MdHideImage,
  MdOutlineInvertColors,
  MdOutlineInvertColorsOff,
  MdAnimation,
} from 'react-icons/md';

import s from './Modal.module.scss';

const Tile = ({ onClick, children, className = '' }) => (
  <button className={cn(s.tile, className)} onClick={onClick}>
    {children}
  </button>
);

const Group = ({ title, children }) => (
  <Box className={s.group}>
    <Text
      className='font-heading mb-4'
      fontSize='xs'
      casing='uppercase'
      as='h6'
    >
      {title}
    </Text>
    <Box className={s.tiles}>{children}</Box>
  </Box>
);

export const Modal = ({ onClose, theme, toggleTheme }) => {
  const menuVariants = {
    initial: {
      opacity: 0,
      y: 40,
      scale: 0.95,
    },
    enter: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      y: 40,
      transition: {
        duration: 1,
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    },
  };

  return (
    <motion.div
      variants={menuVariants}
      initial='initial'
      animate='enter'
      exit='exit'
      className={s.root}
    >
      <Box className={s.header}>
        <Link
          href='/accessibility'
          className='hover:scale-110 hover:text-rose-500'
        >
          <BsQuestionCircle className={s.headerIcon} />
        </Link>
        <button
          onClick={onClose}
          className='transition duration-300 ease-in-out hover:rotate-90 hover:text-rose-500'
        >
          <VscChromeClose className={s.headerIcon} />
          <span className='sr-only'>Close</span>
        </button>
      </Box>
      <Box className={s.body}>
        <Text
          as='h6'
          className='font-heading mb-6'
          fontSize='sm'
          align='center'
          casing='uppercase'
        >
          Accessibility adjustments
        </Text>

        <Group title='Color adjustments'>
          <Tile onClick={toggleTheme} className='col-span-2'>
            {theme === 'dark' ? (
              <BiSun className='h-4 w-auto' />
            ) : (
              <BiMoon className='h-4 w-auto' />
            )}
            {theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          </Tile>
          <Tile onClick={() => {}}>
            <MdOutlineInvertColors />
            Monochrome
          </Tile>
          <Tile onClick={() => {}}>
            <MdOutlineInvertColorsOff />
            Hue
          </Tile>
        </Group>

        <Group title='Content adjustments'>
          <Tile onClick={() => {}}>
            <FiAlignCenter />
            Align center
          </Tile>
          <Tile onClick={() => {}}>
            <AiOutlineAlignLeft />
            Align left
          </Tile>
          <Tile onClick={() => {}}>
            <AiOutlineAlignRight />
            Align right
          </Tile>
          <Tile onClick={() => {}}>
            <ImFont />
            Reading font
          </Tile>
          <Tile onClick={() => {}} className='col-span-2'>
            <ImFont />
            Font size
          </Tile>
        </Group>

        <Group title='Interactions adjustments'>
          <Tile onClick={() => {}} className='col-span-2'>
            <MdAnimation />
            Stop animations
          </Tile>
          <Tile onClick={() => {}}>
            <MdHideImage />
            Hide images
          </Tile>
          <Tile onClick={() => {}}>
            <RiCursorFill />
            Big cursor
          </Tile>
        </Group>
      </Box>
    </motion.div>
  );
};

//  <button className='flex min-h-[80px] flex-col items-center justify-center gap-2 rounded bg-rose-500 p-3 text-white'>
//           <ToggleDark />
//           Dark mode
//         </button>
//         <button className='flex min-h-[80px] flex-col items-center justify-center gap-2 rounded bg-white p-3 dark:bg-slate-700'>
//           <FiAlignCenter />
//           Align center
//         </button>
//         <button className='flex min-h-[80px] flex-col items-center justify-center gap-2 rounded bg-white p-3 dark:bg-slate-700'>
//           <AiOutlineAlignLeft />
//           Align left
//         </button>
//         <button className='flex min-h-[80px] flex-col items-center justify-center gap-2 rounded bg-white p-3 dark:bg-slate-700'>
//           <AiOutlineAlignRight />
//           Align right
//         </button>
//         <button className='col-span-2 flex min-h-[80px] flex-col items-center justify-center gap-2 rounded bg-white p-3 dark:bg-slate-700'>
//           <VscChromeClose />
//           Change text colors
//         </button>
//         <button className='flex min-h-[80px] flex-col items-center justify-center gap-2 rounded bg-white p-3 dark:bg-slate-700'>
//           <ImContrast />
//           High contrast
//         </button>

//         <button className='flex min-h-[80px] flex-col items-center justify-center gap-2 rounded bg-white p-3 dark:bg-slate-700'>
//           <RiCursorFill />
//           Big black cursor
//         </button>
//         <button className='col-span-2 flex min-h-[80px] flex-col items-center justify-center gap-2 rounded bg-white p-3 dark:bg-slate-700'>
//           <VscChromeClose />
//           Change title colors
//         </button>
//         <button className='flex min-h-[80px] flex-col items-center justify-center gap-2 rounded bg-white p-3 dark:bg-slate-700'>
//           <GrCursor />
//           Big white cursor
//         </button>
//         <button className='flex min-h-[80px] flex-col items-center justify-center gap-2 rounded bg-white p-3 dark:bg-slate-700'>
//           <MdHideImage />
//           Hide images
//         </button>
//         <button className='flex min-h-[80px] flex-col items-center justify-center gap-2 rounded bg-white p-3 dark:bg-slate-700'>
//           <MdAnimation />
//           Pause animations
//         </button>