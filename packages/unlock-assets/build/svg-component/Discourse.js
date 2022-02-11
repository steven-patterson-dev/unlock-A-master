import * as React from 'react'
import PropTypes from 'prop-types'

const SvgDiscourse = ({ title, titleId, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" aria-labelledby={titleId} {...props}>
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 11.79C0 5.279 5.532 0 12.103 0 18.666 0 24 5.486 24 11.996c0 6.51-5.33 11.992-11.9 11.992L0 24V11.79zm11.848-7.972a7.405 7.405 0 014.82 2.214c.527.396 1.001.863 1.408 1.392l-.005-.005.02.025a7.258 7.258 0 01.814 9.675 7.381 7.381 0 01-4.444 2.778 7.431 7.431 0 01-5.182-.858l-4.876.57H4.4h.002-.002.002v-.002h-.002l.007-.024.872-4.343a7.256 7.256 0 01-1.213-5.186 7.293 7.293 0 012.66-4.626 7.421 7.421 0 015.121-1.61zM4.42 19.603l-.017.006v-.002l.017-.004z"
    />
    <path d="M18.071 7.426a7.262 7.262 0 011.51 4.499 7.264 7.264 0 01-1.595 4.47 7.38 7.38 0 01-4.028 2.558 7.436 7.436 0 01-4.765-.43L4.401 19.61l4.878-.572a7.43 7.43 0 005.182.859 7.381 7.381 0 004.443-2.778 7.258 7.258 0 00-.833-9.693z" />
    <path d="M5.735 15.353a7.25 7.25 0 01-.764-4.818 7.294 7.294 0 012.465-4.222 7.415 7.415 0 014.596-1.744 7.42 7.42 0 014.681 1.509 7.404 7.404 0 00-4.865-2.26 7.421 7.421 0 00-5.12 1.61 7.293 7.293 0 00-2.66 4.626A7.256 7.256 0 005.28 15.24l-.877 4.37 1.332-4.257z" />
  </svg>
)

SvgDiscourse.propTypes = {
  title: PropTypes.string,
}
SvgDiscourse.defaultProps = {
  title: '',
}
export default SvgDiscourse
