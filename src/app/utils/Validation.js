import * as Yup from 'yup';
import { phoneRegex } from './Constant';

export const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required.').min(2, 'Name must be atleast 2 characters.').max(50, 'Name must be with a maximum of 50 characters.'),
    email: Yup.string().email('Invalid email address.').required('Email is required.'),
    phone: Yup.string().required('Phone number is required.').matches(phoneRegex, 'Contact number must contain only digits').max(10, 'Contact number cannot exceed 10 digits.'),
    subject: Yup.string().required('Subject is required.'),
    comment: Yup.string().required('Comment is required.').min(10, 'Comment must be atleast 10 characters.').max(50, 'Comment must be with a maximum of 50 characters.'),
});

;