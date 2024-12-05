export const constructClassName = (classNames: (string | boolean | undefined)[]): string => classNames.filter(Boolean).join(' ');
