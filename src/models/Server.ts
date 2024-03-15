import { middlewaresConfig, routesConfig, serverListenersConfig } from "../config";
import express, { Express } from "express";
import { IServer } from "../interfaces";

export class Server implements IServer{
  app: Express = express();
  portString: string = process.env.PORT || "8080";
  port = parseInt(this.portString, 10);

  initialize(): void {
    middlewaresConfig(this.app);
    routesConfig(this.app);
    serverListenersConfig(this.app,this.port);
  }
}

export default Server;