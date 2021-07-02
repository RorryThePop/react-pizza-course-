import classNames from 'classnames';
import PropTypes from 'prop-types';
const Button = ({ onClick, className, outline, children }) => {
  return (
    <button
      className={classNames('button', className, {
        'button--cart': 'cart',
      })}>
      {children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
};
export default Button;
