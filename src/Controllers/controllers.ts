import { Request, Response } from 'express';


export function fazerSoma(req: Request, res: Response) {
  const numero: number = Number(req.params.numero)
 
  res.status(200).send({})
}