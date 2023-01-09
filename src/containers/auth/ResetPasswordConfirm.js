import Layout from "../../hocs/Layout";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { reset_password_confirm } from "../../redux/actions/auth";
import Loader from "react-loader-spinner";
import { Navigate, useParams } from "react-router";
const ResetPasswordConfirm = ({ reset_password_confirm, loading }) => {
  const params = useParams();

  const [requestSent, setRequestSent] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [user, setUser] = useState({
    new_password: "",
    re_new_password: "",
  });

  const { new_password, re_new_password } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    const uid = params.uid;
    const token = params.token;

    reset_password_confirm(uid, token, new_password, re_new_password);
    if (new_password === re_new_password) setRequestSent(true);
  };

  if (requestSent && !loading) return <Navigate to="/" />;

  return (
    <Layout>
      <div className="min-h-full flex flex-col justify-center py-8 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-2 mb-1 text-center text-xl font-bold tracking-tight text-gray-900">
            Establece tu nueva contraseña
          </h2>
        </div>

        <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-gray-50 py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form onSubmit={(e) => onSubmit(e)} className="space-y-6">
              <div className="relative mt-1 rounded-md shadow-sm">
                <div className="ponter-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-5 w-5 text-gray-400"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div className="mt-1">
                  <input
                    name="new_password"
                    value={new_password}
                    onChange={(e) => onChange(e)}
                    type="password"
                    required
                    placeholder="Nueva contraseña"
                    className="block w-full font-medium border rounded-md border-gray-900 pl-10 py-3 focus:border-gray-900 focus:ring-gray-900 text-md"
                  />
                </div>
              </div>
              <div className="relative mt-1 rounded-md shadow-sm">
                <div className="ponter-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-5 w-5 text-gray-400"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div className="mt-1">
                  <input
                    name="re_new_password"
                    value={re_new_password}
                    onChange={(e) => onChange(e)}
                    type="password"
                    required
                    placeholder="Repetir contraseña"
                    className="block w-full font-medium border rounded-md border-gray-900 pl-10 py-3 focus:border-gray-900 focus:ring-gray-900 text-md"
                  />
                </div>
              </div>
              <div>
                {loading ? (
                  <button className="flex w-full justify-center rounded-xl border border-transparent bg-purple-700 py-3 px-4 text-md font-semibold text-white shadow-sm  focus:outline-none focus:ring-2 focus:ring-purple-700 focus:ring-offset-2">
                    <Loader type="Oval" color="#fff" width={20} height={20} />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-xl border border-transparent bg-purple-700 py-3 px-4 text-md font-semibold text-white shadow-sm  focus:outline-none focus:ring-2 focus:ring-purple-700 focus:ring-offset-2"
                  >
                    Restablecer contraseña
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};
const mapStateToProps = (state) => ({
  loading: state.Auth.loading,
});

export default connect(mapStateToProps, {
  reset_password_confirm,
})(ResetPasswordConfirm);
