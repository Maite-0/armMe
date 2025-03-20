export type AuthenticateResultModel = {
  access_token: string;
  token_type?: string;
  expires_in?: number;
  refresh_token?: string;
  'as:client_id'?: string;
  Email?: string;
  FirstName?: string;
  user_role?: string;
  refresh_token_expires_in?: string;
  name?: string;
  otp?: string;
  '.issued'?: string;
  '.expires'?: string;
};
