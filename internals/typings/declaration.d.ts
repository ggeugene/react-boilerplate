declare module '*.scss' {
  const content: { [className: string]: string };
  export = content;
}

declare module '*.png' {
  const value: unknown;
  export default value;
}

declare module '*.jpg' {
  const value: unknown;
  export default value;
}

declare module '*.jpeg' {
  const value: unknown;
  export default value;
}

declare module '*.svg' {
  const value: unknown;
  export default value;
}
