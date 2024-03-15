import { Express } from "express";
import { IServerConfig } from "./IServerConfig";

export interface IServer{
  app: Express;
  portString: string;
  port: number;

  /**
   * Método público que inicializa el servidor
   * y llama a los métodos necesarios de configuración.
   */
  initialize(config: IServerConfig): void;
}