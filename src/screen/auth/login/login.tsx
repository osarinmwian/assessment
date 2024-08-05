import React from 'react';
import Basic from '@/shared/component/text/basic/basic';
import Layout from '@/shared/component/layout/layout';
import Input from '@/shared/component/input/Input';
import { theme } from '@/shared/assets/colors/theme';
import { Formik  } from 'formik';
import * as Yup from 'yup'; 

const Login: React.FC = () => {
  return (
    <Layout>
      <Basic title="LOGIN" />
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={(values: any) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          email: Yup.string().email('Invalid email address').required('Required'),
          password: Yup.string().required('Required'),
        })}
      >
        {({
          handleChange,
          handleSubmit,
          errors,
          values,
          setFieldTouched,
          handleBlur,
          touched,
        }) => (
          <>
            <Input
              placeholder="Email"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              error={touched.email && errors.email}
              placeholderTextColor={theme.color.red}
            />
            <Input
              placeholder="Password"
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              error={touched.password && errors.password }
              placeholderTextColor={theme.color.red}
              passwordShow
            />
            <button type="button" onClick={handleSubmit}>Submit</button>
          </>
        )}
      </Formik>
    </Layout>
  );
};

export default Login;