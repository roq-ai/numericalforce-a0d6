import * as yup from 'yup';

export const invoiceValidationSchema = yup.object().shape({
  amount: yup.number().integer().required(),
  business_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
