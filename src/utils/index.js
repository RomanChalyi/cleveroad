import moment from 'moment';

export const getDays = (seconds) => {
  const dataUnix = moment.unix(+seconds);
  return dataUnix.endOf('day').fromNow();
};
