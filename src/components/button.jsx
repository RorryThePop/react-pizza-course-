import classNames from 'classnames';
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

export default Button;
