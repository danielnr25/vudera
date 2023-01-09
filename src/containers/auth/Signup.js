import Layout from "../../hocs/Layout";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { signup } from "../../redux/actions/auth";

const Signup = ({ signup }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [accountCreated, setAccountCreated] = useState(false);

  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    re_password: "",
  });

  const { first_name, last_name, email, password, re_password } = user;

  const onSubmit = (e) => {
    e.preventDefault();
    signup(first_name, last_name, email, password, re_password);
    setAccountCreated(true);
    window.scrollTo(0,0);
  };

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  return (
    <Layout>
      <div className="min-h-full flex flex-col justify-center py-8 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-2 mb-1 text-center text-xl font-bold tracking-tight dark:text-dark-txt text-gray-900">
            ¡Regístrate y comienza tu aventura!
          </h2>
        </div>

        <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-md">
          <div className=" bg-gray-50 py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-3" onSubmit={(e) => onSubmit(e)}>
              <div className="relative mt-1 rounded-md shadow-sm">
                <div className="ponter-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-5 w-5 text-gray-400"
                  >
                    <path d="M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z"></path>
                  </svg>
                </div>
                <div className="mt-1">
                  <input
                    name="first_name"
                    value={first_name}
                    onChange={(e) => onChange(e)}
                    type="text"
                    required
                    placeholder="Nombre"
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
                    <path d="M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z"></path>
                  </svg>
                </div>
                <div className="mt-1">
                  <input
                    name="last_name"
                    value={last_name}
                    onChange={(e) => onChange(e)}
                    type="text"
                    required
                    placeholder="Apellido"
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
                    <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z"></path>
                    <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z"></path>
                  </svg>
                </div>
                <div className="mt-1">
                  <input
                    name="email"
                    value={email}
                    onChange={(e) => onChange(e)}
                    type="email"
                    placeholder="Email@example.com"
                    required
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
                    name="password"
                    value={password}
                    onChange={(e) => onChange(e)}
                    type="password"
                    required
                    placeholder="Contraseña"
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
                    name="re_password"
                    value={re_password}
                    onChange={(e) => onChange(e)}
                    type="password"
                    placeholder="Repetir Contraseña"
                    required
                    className="block w-full font-medium border rounded-md border-gray-900 pl-10 py-3 focus:border-gray-900 focus:ring-gray-900 text-md"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-gray-900"
                  >
                    Quiero recibir contenido exclusivo, recomendaciones
                    personalizadas y tips.
                  </label>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-xl border border-transparent bg-purple-700 py-3 px-4 text-md font-semibold text-white shadow-sm  focus:outline-none focus:ring-2 focus:ring-purple-700 focus:ring-offset-2"
                >
                  Regístrate
                </button>
              </div>
            </form>
            <div className="flex items-center justify-center mt-4">
              <div className="text-sm">
                <span className="font-medium text-md text-gray-900">o </span>
                <Link className="font-semibold text-md text-purple-600 hover:text-purple-500">
                  Reenviar correo de verificación
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center mt-4">
              <div className="text-sm">
                <span className="font-medium text-md text-gray-900">
                  Ya tienes una cuenta?{" "}
                </span>
                <Link to="/login" className="font-semibold text-md text-purple-600 hover:text-purple-500">
                  Inicia sesión
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {
  signup,
})(Signup);
