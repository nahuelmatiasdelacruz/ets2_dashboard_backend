import{Express} from "express";
import { Request,Response } from "express";
import { clientPath } from "../constants";

/**
  * Método que responde con la aplicación cuando se carga la ruta en el navegador
  * @param req Objeto de la petición que recibe los parámetros del metodo GET
  * @param res Objeto de la respuesta
  */
const clientController = (req: Request, res: Response): void => {
  res.sendFile(clientPath);
}
/**
  * Método que incializa la escucha de peticiones al servidor
  * @param app Instancia de Express para configurar los listeners
  */
export const serverListenersConfig = (app: Express, port: number): void => {
  app.get("/",clientController);
  app.get("/*",clientController);
  app.listen(port,()=>{
    console.log(`Server ON | Port: ${port}`);
  })
}