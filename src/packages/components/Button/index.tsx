import { ButtonHTMLAttributes, FC } from 'react';

export interface BaseButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  type: 'default' | 'main';
}

const Button: FC<BaseButtonProps> = (props) => {
  const { type, children, ...restProps } = props;
  return <button {...restProps}>{children}</button>;
};
export default Button;
