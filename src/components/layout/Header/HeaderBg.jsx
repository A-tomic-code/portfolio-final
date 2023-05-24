import { motion } from 'framer-motion';
import { PropTypes } from 'prop-types';
export const Gear = ({ rotation }) => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width={1889.285}
      height={1889.766}
      viewBox="0 0 500 500"
      initial={{
        scale: 1.5,
        y: rotation === 'toright' ? '50%' : '-50%',
      }}
      animate={{
        rotate: rotation === 'toright' ? 360 : -360,
        transition: { duration: 270, ease: 'linear' },
      }}
    >
      <g
        style={{
          stroke: '#f3e000',
          strokeOpacity: 0.631373,
        }}
      >
        <path
          d="M594.408 60.315a29.82 30.246 0 0 1-29.82 30.246 29.82 30.246 0 0 1-29.82-30.246 29.82 30.246 0 0 1 29.82-30.246 29.82 30.246 0 0 1 29.82 30.246Z"
          style={{
            fill: 'none',
            fillOpacity: 0,
            fillRule: 'evenodd',
            strokeWidth: 5.34065,
            strokeLinecap: 'round',
            strokeOpacity: 1,
          }}
          transform="matrix(4.834 0 0 4.82924 -2479.467 -44.428)"
        />
        <path
          d="M573.302 60.268a8.734 8.845 0 0 1-8.734 8.845 8.734 8.845 0 0 1-8.734-8.845 8.734 8.845 0 0 1 8.734-8.845 8.734 8.845 0 0 1 8.734 8.845z"
          style={{
            fill: 'none',
            fillOpacity: 0.631373,
            fillRule: 'evenodd',
            strokeWidth: 5.36565,
            strokeLinecap: 'round',
            strokeOpacity: 1,
          }}
          transform="matrix(4.834 0 0 4.82924 -2479.467 -44.428)"
        />
        <path
          d="m564.588 30.069-.02 21.354M564.608 69.208l-.02 21.353M534.483 60.622l21.35-.354"
          style={{
            fill: '#f3e000',
            fillOpacity: 0.631373,
            fillRule: 'evenodd',
            stroke: '#f3e000',
            strokeWidth: 5,
            strokeLinecap: 'butt',
            strokeDasharray: 'none',
            strokeOpacity: 1,
          }}
          transform="matrix(4.834 0 0 4.82924 -2479.467 -44.428)"
        />
        <path
          d="m573.302 60.268 21.35-.354"
          style={{
            fill: 'none',
            fillOpacity: 0,
            fillRule: 'evenodd',
            stroke: '#f3e000',
            strokeWidth: 5,
            strokeLinecap: 'butt',
            strokeDasharray: 'none',
            strokeOpacity: 1,
          }}
          transform="matrix(4.834 0 0 4.82924 -2479.467 -44.428)"
        />
        <path
          d="M603.57 60.477a38.9 39.07 0 0 1-38.9 39.07 38.9 39.07 0 0 1-38.899-39.07 38.9 39.07 0 0 1 38.9-39.07 38.9 39.07 0 0 1 38.9 39.07z"
          style={{
            fill: 'none',
            fillOpacity: 0,
            fillRule: 'evenodd',
            strokeWidth: 5.02476,
            strokeOpacity: 1,
          }}
          transform="matrix(4.834 0 0 4.82924 -2479.467 -44.428)"
        />
        <path
          d="m558.025 19.484 1.252-7.683 9.637-.083 1.24 7.702zM579.263 21.545l4.836-6.1 8.457 4.623-2.67 7.33zM549.591 22.292l-5-6.846-8.457 4.622 3.03 8.262zM532.098 35.382l-7.665-3.623-5.219 8.102 6.61 5.808zM596.022 35.272l7.665-3.623 5.219 8.102-6.61 5.808zM604.71 54.185l8.455.606.57 9.62-8.61 1.816zM524.57 55.04l-8.455.607-.57 9.62 8.61 1.816zM597.078 85.577l7.665 3.623 5.219-8.102-6.61-5.808zM533.086 85.215l-7.664 3.623-5.22-8.103 6.61-5.808zM549.52 98.818l-5.115 7.319-8.439-4.656 3.274-8.626zM581.546 98.525l4.872 6.887 8.439-4.656-3.425-8.89z"
          style={{
            fill: '#f3e000',
            fillOpacity: 1,
            fillRule: 'evenodd',
            stroke: '#f3e000',
            strokeWidth: 5,
            strokeLinecap: 'butt',
            strokeDasharray: 'none',
            strokeOpacity: 1,
          }}
          transform="matrix(4.834 0 0 4.82924 -2479.467 -44.428)"
        />
        <path
          d="m559.036 99.502 1.252 10.212 9.637.11 1.24-10.238z"
          style={{
            fill: '#f3e000',
            fillOpacity: 1,
            fillRule: 'evenodd',
            stroke: '#f3e000',
            strokeWidth: 5.76468,
            strokeLinecap: 'butt',
            strokeDasharray: 'none',
            strokeOpacity: 1,
          }}
          transform="matrix(4.834 0 0 4.82924 -2479.467 -44.428)"
        />
      </g>
    </motion.svg>
  );
};
Gear.propTypes = {
  rotation: PropTypes.string.isRequired,
};

export const HeaderBg = () => (
  <motion.div className="header__background">
    {Array(2)
      .fill()
      .map((_, i) => {
        return <Gear key={i} rotation={i % 2 === 0 ? 'toleft' : 'toright'} />;
      })}
  </motion.div>
  //retornar los 3 gears colocados en el header
);
