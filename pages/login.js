import { getProviders, signIn } from "next-auth/react";
import { getRedirectUrl } from "helpers/getRedirectUrl";

const Login = ({ providers }) => (
  <div className="flex flex-col items-center justify-center min-h-screen w-full">
    {/* I'm passing any providers with the code below, rather than using a custom button */}
    {Object.values(providers).map((provider) => (
      <div key={provider.name}>
        <button
          className="border bg-slate-600 text-gray-100 rounded-md px-5 py-3"
          onClick={() =>
            signIn(provider.id, { callbackUrl: getRedirectUrl(provider.id) })
          }
        >
          <p>Log In with {provider.name}</p>
        </button>
      </div>
    ))}
  </div>
);

export default Login;

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}
