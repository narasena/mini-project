import express, { Express, NextFunction, Request, Response } from 'express';
import { PORT } from './config';
export default async function App() {
    const app: Express = express();

  app.use(express.json());
  app.use('*/storages', express.static('src/public/storages'));
  app.get('/', (req: Request, res:Response) => {
    res.send('<h1>Welcome to Loket API</h1>');
  });

  //centralized error handler

  interface IError extends Error {
    isExpose: boolean;
    status: number;
    msg: string;
  }
    const errorHandler = () => {
      app.use((req: Request, res: Response, next: NextFunction) => {
        if (req.path.includes('/api/')) {
          res.status(404).json({
            success: false,
            message: 'API Not Found',
            data: null
          });
        } else {
          next()
        }
      })

      app.use((err: IError, req: Request, res: Response, next: NextFunction) => {
        console.error(err.stack);
        if (req.path.includes('/api/')) {
          console.error('Error : ', err.stack);
          res.status(err.status || 500).json({
              succes: false,
              message: err.isExpose ? err.message : err.message === 'jwt expired' ? "Session Login is Expired" : "Internal Server Error", 
              data: null
        });
        }else{
          next()
        }
      });
  }
    
    app.listen(PORT, ()=>{
        console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
    })
    return app;
}
