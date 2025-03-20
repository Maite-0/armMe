export type AuthenticateModel = {
  grant_type?: 'password';
  username?: string;
  password?: string;
  client_secret?: string;
  client_id?: string;
};

export type RequestModel = {
  CL?: string;
  AC?: number;
  PanelCode?: string;
  Partition?: number;
  client_id?: string;
};
