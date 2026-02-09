import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        eslint(), // Перемещает вывод ESLint в браузер, чтобы не засорять терминал
    ],
    server: {
        port: 3000, // Можно указать порт, как у CRA
        open: true, // Автоматически открывать браузер при запуске
    },
});