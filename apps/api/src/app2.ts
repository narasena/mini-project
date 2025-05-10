import express, { Express, NextFunction, Request, Response } from 'express';
import { PORT } from './config';
import authRouter from './routers/auth.router';
import eventRouter from './routers/event.router';
import countryPhoneRouter from './routers/countryPhone.router';
import referralRouter from './routers/referral.router';
import discountRouter from './routers/discount.coupon.controller';
export default async function App() {
  const app: Express = express();
  const cors = require('cors');
  
  app.use(cors());
  app.use(express.json());
  app.use('*/storages', express.static('src/public/storages'));
  app.get('/', (req: Request, res:Response) => {
    res.send('<h1>Welcome to Loket API</h1>');
  });

  app.use('/api/auth', authRouter)
  app.use('/api/events', eventRouter)
  app.use('/api/country-phones', countryPhoneRouter)
  app.use('/api/referral', referralRouter)
  app.use('/api/discount', discountRouter)
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
    
    return app;
}
