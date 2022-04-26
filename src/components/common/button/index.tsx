import { Container, Mode } from './styles';

interface IButton extends React.HTMLAttributes<HTMLButtonElement> {
  text?: string;
  icon?: React.ReactNode;
  iconSide?: 'left' | 'right';
  mode?: Mode;
  isSubmit?: boolean;
}

export function Button({ text, icon, iconSide = 'left', mode, isSubmit = false, ...props }: IButton) {
  return (
    <Container type={isSubmit ? 'submit' : 'button'} mode={mode ?? 'flat'} {...props}>
      {iconSide === 'left' ? (
        <>
          <div>{icon}</div>
          <div>{text}</div>
        </>
      ) : (
        <>
          <div>{text}</div>
          <div>{icon}</div>
        </>
      )}
    </Container>
  );
}
