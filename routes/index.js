import todoRoutes from "./todoRoutes.js";

// registerRoutes.js
const routes = [
    { path: '/api/', route: todoRoutes },
];
export default function registerRoutes(app) {
    routes.forEach((route) => {
        app.use(route.path, route.route);
    });
}
