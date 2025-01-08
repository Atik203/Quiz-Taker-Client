import CustomForm from "@/components/form/CustomForm";
import CustomInput from "@/components/form/CustomInput";
import CustomButton from "@/components/ui/custom/CustomButton";
import { useRegisterMutation } from "@/redux/features/auth/authApi";

import { authValidation } from "@/schemas/auth.validation";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const navigate = useNavigate();
  const [SignUp] = useRegisterMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    if (!agreeTerms) {
      toast.error("Please agree to the terms and conditions");
      return;
    }
    const toastId = toast.loading("Signing up...");

    navigate("/login");
    toast.success("Register successful", { id: toastId });

    // try {
    //   const submitData = { role: "user", ...data };

    //   const result = await SignUp(submitData).unwrap();

    //   if (result.success) {
    //     toast.success(result.message, { id: toastId });
    //     navigate("/login");
    //   } else {
    //     toast.error(result.message, { id: toastId });
    //   }
    // } catch (error) {
    //   toast.error("Something went wrong...", { id: toastId });
    // }
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>Sign Up</title>
      </Helmet>
      <div className="px-2 py-12">
        <div className="mx-auto w-full max-w-4xl">
          <div className="text-center">
            <h2 className="mt-4 text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100">
              Register your account
            </h2>
            <p className="mt-2 text-sm leading-6 text-gray-500 dark:text-gray-400">
              Already have an account?{" "}
              <Link
                to={"/login"}
                className="font-semibold hover:underline text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
              >
                Login
              </Link>
            </p>
          </div>
          <div className="mt-8 max-w-lg mx-auto">
            <CustomForm
              onSubmit={onSubmit}
              resolver={zodResolver(authValidation.signUpValidationSchema)}
            >
              <CustomInput name="name" label="Full Name" />
              <CustomInput name="email" label="Email" type="email" />

              <div className="relative w-full">
                <CustomInput
                  name="password"
                  label="Password"
                  type={showPassword ? "text" : "password"}
                />
                <div
                  className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                  style={{ top: "50%", transform: "translateY(-10%)" }}
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeSlashIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                  ) : (
                    <EyeIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                  )}
                </div>
              </div>
              <CustomInput
                name="confirmPassword"
                label="Confirm Password"
                type="password"
              />

              <div className="flex items-center justify-between w-96 mx-auto mt-4">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    onClick={() => setAgreeTerms(!agreeTerms)}
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600 dark:border-gray-700 dark:bg-gray-800 dark:focus:ring-indigo-500"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-3 block text-sm leading-6 text-gray-700 dark:text-gray-300"
                  >
                    I agree to the{" "}
                    <Link
                      to={"/terms-conditions"}
                      className="font-semibold text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
                    >
                      Terms and Conditions
                    </Link>
                  </label>
                </div>
              </div>

              <div className="mt-6 text-center">
                <CustomButton
                  disabled={!agreeTerms}
                  className="w-full sm:w-96"
                  type="submit"
                >
                  Register
                </CustomButton>
              </div>
            </CustomForm>
          </div>
          <div className="mt-4 w-full sm:w-96 text-center mx-auto">
            <p className="mt-2 text-sm leading-6 text-gray-500 dark:text-gray-400">
              By registering, you agree to our{" "}
              <Link
                to={"/privacy-policy"}
                className="font-semibold text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
              >
                Privacy Policy
              </Link>{" "}
              and{" "}
              <Link
                to={"/terms-conditions"}
                className="font-semibold text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
              >
                Terms of Service
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
