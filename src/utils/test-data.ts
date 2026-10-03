export const credentials = {
  password: 'secret_sauce',
  standardUser: 'standard_user',
  lockedOutUser: 'locked_out_user',
  problemUser: 'problem_user',
  performanceGlitchUser: 'performance_glitch_user',
} as const;

export const products = {
  backpack: 'Sauce Labs Backpack',
} as const;

export const messages = {
  lockedOutError: 'Epic sadface: Sorry, this user has been locked out.',
} as const;
