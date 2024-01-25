import { Request, Response, NextFunction, Router } from 'express';
import { IMiddleware } from './middleware.interface';

export interface IControllerRoute {
	path: string;
	func: (req: Request, res: Response, next: NextFunction) => void;
	method: 'get' | 'post' | 'delete' | 'patch' | 'put';
	middleware?: IMiddleware[];
	//   method2: keyof Pick<Router, "get" | "post" | "delete" | "patch" | "put">;
}

export type ExpressReturnType = Response<any, Record<string, any>>;
