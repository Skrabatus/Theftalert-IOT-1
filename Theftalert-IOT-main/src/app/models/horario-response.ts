export interface Horario {
  id?:        string;
  schedules: Schedule[];
  activo:    boolean;
  tocar:     boolean;
  account_sid: string;
  auth_token:  string;
  from_number: string;
  to_number:   string;
  message:     string;
}

export interface Schedule {
  start_time: string;
  end_time:   string;
}
