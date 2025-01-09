import CustomForm from "@/components/form/CustomForm";
import CustomInput from "@/components/form/CustomInput";
import CustomButton from "@/components/ui/custom/CustomButton";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { useAppDispatch } from "@/redux/hooks";
import { authValidation } from "@/schemas/auth.validation";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

const defaultValues = {
  email: "testemail@gmail.com",
  password: "abcd",
};

const Login = () => {
  const { t } = useTranslation();
  const [showPassword, setShowPassword] = useState(false);
  const [Login] = useLoginMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Logging in...");

    navigate("/exam/1");
    toast.success("Login successful", { id: toastId });
    // try {
    //   const result = await Login(data).unwrap();
    //   if (result.success) {
    //     dispatch(setUser({ user: result.data, token: result.token }));
    //     toast.success(result.message, { id: toastId });
    //     navigate(`/${result.data.role}/dashboard`);
    //   } else {
    //     toast.error(result.message, { id: toastId });
    //   }
    // } catch (error) {
    //   toast.error("Something went wrong...", { id: toastId });
    // }
  };

  return (
    <div className="min-h-screen py-16">
      <Helmet>
        <title>{t("menu.login")}</title>
      </Helmet>
      <div className="flex flex-1">
        <div className="flex flex-1 flex-col justify-center px-2 py-16">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <h2 className="mt-4 text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100">
                {t("login.title")}
              </h2>
              <p className="mt-2 text-sm leading-6 text-gray-500 dark:text-gray-400">
                {t("login.no_account")}{" "}
                <Link
                  to={"/register"}
                  className="font-semibold hover:underline text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
                >
                  {t("login.register")}
                </Link>
              </p>
            </div>
            <div className="mt-8">
              <div>
                <CustomForm
                  defaultValues={defaultValues}
                  onSubmit={onSubmit}
                  resolver={zodResolver(authValidation.loginValidationSchema)}
                >
                  <CustomInput name="email" label={t("login.email")} />
                  <div className="relative w-full">
                    <CustomInput
                      name="password"
                      label={t("login.password")}
                      type={showPassword ? "text" : "password"}
                    />
                    <div
                      className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                      style={{ top: "70%", transform: "translateY(-50%)" }}
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeSlashIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                      ) : (
                        <EyeIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                      )}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600 dark:border-gray-700 dark:bg-gray-800 dark:focus:ring-indigo-500"
                      />
                      <label
                        htmlFor="remember-me"
                        className="ml-3 block text-sm leading-6 text-gray-700 dark:text-gray-300"
                      >
                        {t("login.remember_me")}
                      </label>
                    </div>

                    <div className="text-sm leading-6">
                      <a
                        href="#"
                        className="font-semibold text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
                      >
                        {t("login.forgot_password")}
                      </a>
                    </div>
                  </div>
                  <div>
                    <CustomButton className="w-full" type="submit">
                      {t("login.login_button")}
                    </CustomButton>
                  </div>
                </CustomForm>
              </div>
            </div>
            <div className="mt-4">
              <p className="mt-2 text-sm leading-6 text-gray-500 dark:text-gray-400">
                {t("login.agree")}{" "}
                <Link
                  to={"/privacy-policy"}
                  className="font-semibold text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
                >
                  {t("login.privacy_policy")}
                </Link>{" "}
                and{" "}
                <Link
                  to={"/terms-conditions"}
                  className="font-semibold text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
                >
                  {t("login.terms_conditions")}
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
        <div className="relative hidden w-0 flex-1 lg:block">
          <img
            className="absolute inset-0 w-3/4 object-cover mx-auto"
            src="https://i.ibb.co/JRSm35S/login.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
