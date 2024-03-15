import express, { Express } from "express"
import cors from "cors";
import path from "path";
/**
 * Método que configura los middlewares de la aplicación
 * @param app Instancia de Express para configurar los middlewares
 */
export const middlewaresConfig = (app: Express): void => {
  app.use(cors());
  app.use(express.urlencoded({extended: true}));
  app.use(express.static(path.join(__dirname,"..","client")));
}