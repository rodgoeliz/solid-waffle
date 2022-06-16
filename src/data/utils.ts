const padTo2Digits = (num: number) => num.toString().padStart(2, '0');

export const convertMinuteToHour = (timeMs: number): string =>
  `${padTo2Digits(Math.floor(timeMs / 60))}:${padTo2Digits(timeMs % 60)}`;

export const getTextIsoDateYear = (isoDate: string): number =>
  new Date(isoDate).getFullYear();
