import {Request, Response } from 'express'
import nodemailer from 'nodemailer'

export const contato = async (req: Request, res: Response) => {
     //transporter
     var transport = nodemailer.createTransport({
          host: "smtp.mailtrap.io",
          port: 2525,
          auth: {
               user: "346d8f948c72f7",
               pass: "235f103f30d69f"
          }
     });

     //configurar a mensagem
     let message = {
          from: req.body.from,
          to: 'teste@teste.com',
          subject: req.body.subject,
          html: req.body.email,
          text: req.body.email
     }

     //envia mensagem
     let info = await transport.sendMail(message)
     console.log('info', info)

     res.json({success: true})
}
