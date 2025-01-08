export default function About() {
  return (
    <div className="pt-8 sm:pt-20 mt-12 0">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl space-y-8 divide-y divide-gray-100 dark:divide-gray-600 lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-6 gap-y-6 lg:grid-cols-3">
            <div>
              <h2 className="text-3xl font-bold tracking-tight dark:text-white">
                About Us
              </h2>
              <p className="mt-4 leading-7 text-gray-800 dark:text-gray-200">
                Welcome to Quiz Taker, your go-to platform for expert-curated
                exams designed to boost your knowledge and skills in various
                fields.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
              <div className="rounded-2xl bg-gray-50 dark:bg-gray-800 p-6">
                <h3 className="text-base font-semibold leading-7 dark:text-white">
                  Our Mission
                </h3>
                <p className="mt-3 text-sm leading-6 text-gray-800 dark:text-gray-200">
                  At Quiz Taker, our mission is to provide high-quality exams
                  that help individuals enhance their knowledge and achieve
                  their educational and professional goals.
                </p>
              </div>
              <div className="rounded-2xl bg-gray-50 dark:bg-gray-800 p-6">
                <h3 className="text-base font-semibold leading-7 dark:text-white">
                  Our Vision
                </h3>
                <p className="mt-3 text-sm leading-6 text-gray-800 dark:text-gray-200">
                  We envision a world where everyone has access to the best
                  educational resources and can learn and grow at their own
                  pace.
                </p>
              </div>
              <div className="rounded-2xl bg-gray-50 dark:bg-gray-800 p-6">
                <h3 className="text-base font-semibold leading-7 dark:text-white">
                  Our Values
                </h3>
                <p className="mt-3 text-sm leading-6 text-gray-800 dark:text-gray-200">
                  We value integrity, excellence, and a commitment to continuous
                  improvement. We strive to create a supportive and inclusive
                  learning environment for all.
                </p>
              </div>
              <div className="rounded-2xl bg-gray-50 dark:bg-gray-800 p-6">
                <h3 className="text-base font-semibold leading-7 dark:text-white">
                  Our Team
                </h3>
                <p className="mt-3 text-sm leading-6 text-gray-800 dark:text-gray-200">
                  Our team is composed of experienced educators, industry
                  professionals, and passionate individuals dedicated to helping
                  you succeed.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-6 py-6">
            <h2 className="text-2xl font-semibold leading-7 dark:text-white">
              Join Us
            </h2>
            <p className="text-center text-gray-800 dark:text-gray-200">
              If you share our passion for education and want to be part of our
              mission, we'd love to hear from you. Explore our career
              opportunities and join our team.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
