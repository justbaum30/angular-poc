export interface ErrorState {
  fatalError?: {};
  silentError?: {};
}

export const initialErrorState: ErrorState = {
  fatalError: undefined,
  silentError: undefined,
};
