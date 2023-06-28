import * as yup from 'yup';

export const financialReportValidationSchema = yup.object().shape({
  business_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
