import { SIZES, VARIANTS, StyledButton } from './styles';

function Button({ disabled, size, variant, children }) {
  const sizeStyle = SIZES[size];
  const variantStyle = VARIANTS[variant];

  return (
    <StyledButton disabled={disabled} sizeStyle={sizeStyle} variantStyle={variantStyle}>
      {children}
    </StyledButton>
  );
}

export default Button;
