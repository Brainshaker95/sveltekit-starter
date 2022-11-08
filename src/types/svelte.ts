export type SvelteMouseEvent<T> = MouseEvent & {
  currentTarget: EventTarget & T;
};

export type SvelteKeyboardEvent<T> = KeyboardEvent & {
  currentTarget: EventTarget & T;
};
