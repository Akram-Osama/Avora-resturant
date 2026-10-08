import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

const fromRoot = (path) => fileURLToPath(new URL(path, import.meta.url));

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                home: fromRoot("./index.html"),
                menu: fromRoot("./src/pages/menu.html"),
                contact: fromRoot("./src/pages/contact.html"),
            },
        },
    },
});
