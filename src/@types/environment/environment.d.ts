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
    AWS_BUCKET_URL: string;
    APP_URL: string;
    SECRET_TOKEN: string;
    EXPIRES_IN_TOKEN: string;
    SECRETE_REFRESH_TOKEN: string;
    EXPIRES_IN_REFRESH_TOKEN: string;
    EXPIRES_REFRESH_TOKEN_DAYS: number;
    APP_PORT: number;
    APP_MAIL: string;
    MAIL_PROVIDER: string;
  }
}
