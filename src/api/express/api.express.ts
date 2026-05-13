import type { Api } from "../api";
import express from "express";
import type { Express, Request, Response } from "express";

export class ApiExpress implements Api {
  private constructor(readonly app: Express) {}

  public static build() {
    const app = express();
    app.use(express.json());
    return new ApiExpress(app);
  }

  public addGetRoute(
    path: string,
    handler: (req: Request, res: Response) => void,
  ): void {
    this.app.get(path, handler);
  }

  public addPostRoute(
    path: string,
    handler: (req: Request, res: Response) => void,
  ): void {
    this.app.post(path, handler);
  }

  public start(port: number) {
    this.app.listen(port, () => {
      console.log("Server runing on port " + port);
    });
  }
}
