declare namespace NodeJS {
  interface ProcessEnv {
    DATABASEURL: string;
    SECRETKEY: string;
    PORT?: string;
    [key: string]: string | undefined;
  }
}
