export const EMAILS = [
  'johnsmith@outlook.com',
  'mary@gmail.com',
  'djacobs@move.org',
];

export function isEmailAlreadyInUse(name) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(EMAILS.indexOf(name) > -1), 200);
  });
}

export const ErrorMessage = (props) => {
  return <span class='error-message'>{props.error}</span>;
};

export interface Fields {
  password: string;
  password_confirmation?: string;
  email: string;
}

export interface ErrorType {
  password: boolean;
  password_confirmation: boolean;
  email: boolean;
}
