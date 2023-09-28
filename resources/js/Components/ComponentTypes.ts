export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export interface TextInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  ref?: never;
}
