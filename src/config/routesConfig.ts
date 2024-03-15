import { Express, Router } from "express";
import { routesList } from "../constants";

/**
  * Método que configura las rutas a la API del servidor
  * @param app Instancia de Express para configurar las rutas
  */
export const routesConfig = (app: Express) => {
  for (const key in routesList) {
    if (routesList.hasOwnProperty(key)) {
      const routePath: string = `/api/${routesList[key]}`;
      const routeModule: Router = require(`../routes/${routesList[key]}`).default;
      app.use(routePath, routeModule);
    }
  }
}