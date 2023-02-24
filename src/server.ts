import express, { Application, Router } from "express";
import bodyParser from "body-parser";

export class Server {

  private app: Application;
  private port;

  constructor(port? : number) {
    this.app = express()
    this.port = port || 3200
  }

  setInitialConfig(routes: [Router], initialRoute = '/api/v1') {
    this.app.use(bodyParser.json())
    routes.forEach((route: Router) => {
      this.app.use(initialRoute, route)
    })
    return this
  }

  start() {
    this.app.listen(this.port, () => {
      console.log(`Server started on PORT:${this.port}`);
    })
  }

}