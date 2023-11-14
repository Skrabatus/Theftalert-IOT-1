export interface Twilio {
  account_sid: string;
  auth_token:  string;
  from_number: string;
  to_number:   string;
  message:     string;
  id?:          string;
}
