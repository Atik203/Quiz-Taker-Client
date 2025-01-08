import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="pt-8 sm:pt-20 mt-12 0">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl space-y-8 divide-y divide-gray-100 dark:divide-gray-600 lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-6 gap-y-6 lg:grid-cols-3">
            <div>
              <h2 className="text-3xl font-bold tracking-tight dark:text-white">
                Contact Us
              </h2>
              <p className="mt-4 leading-7 text-gray-800 dark:text-gray-200">
                Whether you have questions, need assistance, or want to share
                feedback, we're here to help. Reach out to us via the contact
                details below.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
              <div className="rounded-2xl bg-gray-50 dark:bg-gray-800 p-6">
                <h3 className="text-base font-semibold leading-7 dark:text-white">
                  Collaborate
                </h3>
                <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-800 dark:text-gray-200">
                  <div>
                    <dt className="sr-only">Email</dt>
                    <dd>
                      <a
                        className="font-semibold text-primary"
                        href="mailto:collaborate@quiztaker.com"
                      >
                        collaborate@quiztaker.com
                      </a>
                    </dd>
                  </div>
                  <div className="mt-1">
                    <dt className="sr-only">Phone number</dt>
                    <dd>+1 (555) 123-4567</dd>
                  </div>
                </dl>
              </div>
              <div className="rounded-2xl bg-gray-50 dark:bg-gray-800 p-6">
                <h3 className="text-base font-semibold leading-7 dark:text-white">
                  Press Inquiries
                </h3>
                <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-800 dark:text-gray-200">
                  <div>
                    <dt className="sr-only">Email</dt>
                    <dd>
                      <a
                        className="font-semibold text-primary"
                        href="mailto:press@quiztaker.com"
                      >
                        press@quiztaker.com
                      </a>
                    </dd>
                  </div>
                  <div className="mt-1">
                    <dt className="sr-only">Phone number</dt>
                    <dd>+1 (555) 234-5678</dd>
                  </div>
                </dl>
              </div>
              <div className="rounded-2xl bg-gray-50 dark:bg-gray-800 p-6">
                <h3 className="text-base font-semibold leading-7 dark:text-white">
                  Careers
                </h3>
                <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-800 dark:text-gray-200">
                  <div>
                    <dt className="sr-only">Email</dt>
                    <dd>
                      <a
                        className="font-semibold text-primary"
                        href="mailto:careers@quiztaker.com"
                      >
                        careers@quiztaker.com
                      </a>
                    </dd>
                  </div>
                  <div className="mt-1">
                    <dt className="sr-only">Phone number</dt>
                    <dd>+1 (555) 345-6789</dd>
                  </div>
                </dl>
              </div>
              <div className="rounded-2xl bg-gray-50 dark:bg-gray-800 p-6">
                <h3 className="text-base font-semibold leading-7 dark:text-white">
                  Support
                </h3>
                <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-800 dark:text-gray-200">
                  <div>
                    <dt className="sr-only">Email</dt>
                    <dd>
                      <a
                        className="font-semibold text-primary"
                        href="mailto:support@quiztaker.com"
                      >
                        support@quiztaker.com
                      </a>
                    </dd>
                  </div>
                  <div className="mt-1">
                    <dt className="sr-only">Phone number</dt>
                    <dd>+1 (555) 456-7890</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-6 py-6">
            <h2 className="text-2xl font-semibold leading-7 dark:text-white">
              Follow Us
            </h2>
            <div className="flex justify-center space-x-6 py-4">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-600"
              >
                <FaFacebook size={30} />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-600 dark:text-blue-300 dark:hover:text-blue-500"
              >
                <FaTwitter size={30} />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-600 hover:text-pink-800 dark:text-pink-400 dark:hover:text-pink-600"
              >
                <FaInstagram size={30} />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:text-blue-900 dark:text-blue-500 dark:hover:text-blue-700"
              >
                <FaLinkedin size={30} />
              </a>
            </div>
            <div className="text-center mt-8">
              <p className="text-lg font-semibold dark:text-white">
                Contact Info
              </p>
              <p className="text-gray-800 dark:text-gray-200">
                Phone: +1 (555) 789-0123
              </p>
              <p className="text-gray-800 dark:text-gray-200">
                Email: contact@quiztaker.com
              </p>
              <p className="text-gray-800 dark:text-gray-200">
                Address: 123 Quiz Street, Knowledge City, CA 90001
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
