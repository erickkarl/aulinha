import { RootState } from "../store";

export const selectNumero = (state: RootState) => state.counter.value;
