declare module 'vite-plugin-eslint';

// Обычные scss-файлы
declare module '*.scss' {
  const content: Record<string, string>;
  export default content;
}

// scss-модули
declare module '*.module.scss' {
  const classes: { readonly [key: string]: string };
  export default classes;
}
