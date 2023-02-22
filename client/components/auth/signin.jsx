import { Formik, Form, Field } from 'formik';
import Cookies from 'js-cookie';
import { login } from 'utils/services/rest';
import * as Yup from 'yup';

const SignIn = () => {
  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .trim()
      .email('Invalid email address')
      .required('Required'),
    password: Yup.string().trim().required('Required'),
  });

  const onSubmit = async (values, { resetForm }) => {
    try {
      const res = await login(values);
      const token = res.data.data.session.access_token;
      Cookies.set('user', token);
      console.log(`cookies set for token : ${token}`);
      //   resetForm();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ touched, errors }) => (
        <Form>
          <div className="bg-gray-10 ">
            <div className="flex justify-center h-screen w-screen items-center ">
              <div className="w-full md:w-1/2 flex flex-col items-center bg-[#1f1e1e] p-20 rounded-2xl text-black">
                <h1 className="text-center text-3xl font-bold text-white mb-10">
                  LOGIN
                </h1>
                <div className="w-3/4 mb-6">
                  <Field
                    name="email"
                    type="email"
                    className="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 outline-blue-500"
                    placeholder="SRM Email"
                  />
                </div>
                <div className="w-3/4 mb-6">
                  <Field
                    name="password"
                    type="password"
                    className="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 outline-blue-500"
                    placeholder="Password"
                  />
                </div>
                <div className="w-1/4 mt-4">
                  <button
                    type="submit"
                    className="py-4 bg-blue-400 w-full rounded text-white font-bold hover:bg-blue-700"
                  >
                    Continue
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default SignIn;
