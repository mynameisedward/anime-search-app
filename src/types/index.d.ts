// css-модули
declare module '*.module.css' {
  const content: Record<string, string>;
  export default content;
}

// Картинкиы
declare module '*.png';
declare module '*.svg';
declare module '*.webp';
declare module '*.gif';
