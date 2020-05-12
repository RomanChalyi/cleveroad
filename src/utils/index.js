import moment from 'moment';

export const getDays = (seconds) => {
  const dataUnix = moment.unix(+seconds);
  return dataUnix.endOf('day').fromNow();
};

export const checkFormData = ({ title, description, photo, price }) => {
  const formData = Object.values({ title, description, photo });
  return formData.every((data) => data.trim() !== '') && price > 0;
};

export const getDatabaseDate = ({
  title,
  description,
  photo,
  price,
  discountPrice,
  discountPeriod,
  useDiscount,
}) => {
  return useDiscount
    ? {
        title,
        description,
        photo,
        price,
        discountPrice: discountPrice ? discountPrice : 1,
        discountPeriod,
      }
    : { title, description, photo, price, discountPrice: 0, discountPeriod: new Date() };
};
