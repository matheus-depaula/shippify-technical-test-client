import { Container } from "./styles";

interface IButton {
  text: string;
  type: "submit" | "button";
}

export function Button({ text, type }: IButton) {
  return (
    <Container>
      <button type={type}>{text}</button>
    </Container>
  );
}
