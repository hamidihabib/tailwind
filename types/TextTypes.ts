export type TextTypes = React.JSX.IntrinsicAttributes &
  React.ClassAttributes<HTMLParagraphElement> &
  React.HTMLAttributes<HTMLParagraphElement> & {
    children?: React.ReactNode;
    /**
     *The text size
     *@default "md"
     */
    text?:
      | "text-sm"
      | "text-md"
      | "text-base"
      | "text-lg"
      | "text-xl"
      | "text-2xl"
      | "text-3xl"
      | "text-4xl"
      | "text-5xl"
      | "text-6xl"
      | "text-7xl"
      | "text-8xl"
      | "text-9xl";
    /**
     *The text font weight
     *@default "normal"
     */
    font?:
      | "font-thin"
      | "font-extralight"
      | "font-light"
      | "font-normal"
      | "font-medium"
      | "font-semibold"
      | "font-bold"
      | "font-extrabold"
      | "font-black";
    classes?: string;
  };
