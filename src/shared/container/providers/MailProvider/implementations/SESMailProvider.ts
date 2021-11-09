import { SES } from 'aws-sdk';
import fs from 'fs';
import handlebars from 'handlebars';
import nodemailer, { Transporter } from 'nodemailer';
import { injectable } from 'tsyringe';

import { IMailProvider } from '../IMailProvider';

interface IVariables {
  name: string;
  link: string;
}

@injectable()
class SESMailProvider implements IMailProvider {
  private client: Transporter;

  constructor() {
    this.client = nodemailer.createTransport({
      SES: new SES({
        apiVersion: '2010-12-01',
        region: process.env.AWS_BUCKET_REGION,
      }),
    });
  }

  async sendMail(
    to: string,
    subject: string,
    variables: IVariables,
    path: string,
  ): Promise<void> {
    const templateFileContent = fs.readFileSync(path).toString('utf-8');
    const templateParse = handlebars.compile(templateFileContent);
    const templateHTML = templateParse(variables);

    await this.client.sendMail({
      to,
      from: `Rentalx <${process.env.APP_MAIL}>`,
      subject,
      html: templateHTML,
    });
  }
}

export { SESMailProvider };
