export interface ExpireTime {
  unit: ExpireTimeUnit;
  value: number;
}

export enum ExpireTimeUnit {
  Minute,
  Hour,
  Day,
  Year,
}

export const useExpireTimeDate = () => {
  const getExpireTimeDate = (expireTime: ExpireTime): Date => {
    const date = new Date();

    const expireInMs = parseExpireTimeToMs(expireTime);
    date.setTime(date.getTime() + expireInMs);

    return date;
  };

  return {
    getExpireTimeDate,
  };
};

const parseExpireTimeToMs = (expireTime: ExpireTime): number => {
  const expireValue = expireTime.value;

  switch (expireTime.unit) {
    case ExpireTimeUnit.Minute:
      return expireValue * MS_IN_MINUTE;

    case ExpireTimeUnit.Hour:
      return expireValue * MS_IN_HOUR;

    case ExpireTimeUnit.Day:
      return expireValue * MS_IN_DAY;

    default:
      return expireValue * MS_IN_YEAR;
  }
};

const MS_IN_SECOND = 1000;
const MS_IN_MINUTE = 60 * MS_IN_SECOND;
const MS_IN_HOUR = 60 * MS_IN_MINUTE;
const MS_IN_DAY = 24 * MS_IN_HOUR;
const MS_IN_YEAR = 365 * MS_IN_DAY;
