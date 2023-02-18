export const fadeIn = (
    direction: string, 
    type: any, 
    delay: any, 
    duration: any) => 
({
    hidden: {
    x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
    y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
    opacity: 0,
    },
    show: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
          type,
          delay,
          duration,
          ease: 'easeOut',
        },
    },
    });

export const staggerContainer:any = (staggerChildren: any, delayChildren: any) => ({
    hidden: {},
    show: {
      transition: {
        staggerChildren,
        delayChildren,
      },
    },
    });

export const earth = (direction: string) => ({
    hidden: {
      x: direction === 'left' ? '-100%' : '200%',
      rotate: 180,
    },
    show: {
      x: 0,
      rotate: 0,
      transition: {
        type: 'spring',
        duration: 1.5
      },
    },
  });