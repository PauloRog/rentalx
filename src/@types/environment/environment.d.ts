/* eslint-disable @typescript-eslint/naming-convention */
/* Declaração de TIPO do arquivo .env */
declare namespace NodeJS {
  interface ProcessEnv {
    FORGOT_MAIL_URL: string;
    AWS_ACCESS_KEY_ID: string;
    AWS_SECRET_ACCESS_KEY: string;
    AWS_BUCKET: string;
    AWS_BUCKET_REGION: string;
    DISK: string;
  }
}
