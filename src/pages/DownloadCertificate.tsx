"use client";

import { Button } from "@/components/ui/button";
import { Certificate } from "@/components/ui/custom/Certificate";
import { PaymentMethods } from "@/components/ui/custom/PaymentMethods";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";

export default function DownloadCertificate() {
  const [isPaid, setIsPaid] = useState(false);
  const [searchParams] = useSearchParams();
  const scorePercentage = searchParams.get("scorePercentage") || 0;

  const userData = {
    name: "John Doe",
    email: "johndoe@gmail.com",
    title: "Web Development Fundamentals",
    scorePercentage,
    cost: 10,
  };

  const handlePaymentComplete = () => {
    setIsPaid(true);
  };

  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-green-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-green-800 mb-8">
          {t("exams.exam_certificate")}
        </h1>
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-green-700 mb-4">
              {userData.title}
            </h2>
            <p className="text-gray-600 mb-2">
              Congratulations,
              <span className="font-semibold text-green-700">
                {userData.name}
              </span>
              !! You've successfully completed the exam with a score of{" "}
              <span className="font-semibold text-green-700">
                {userData.scorePercentage}%.
              </span>
            </p>
            <p className="text-gray-600">
              To get your certificate, please complete the payment of{" "}
              <span className="font-semibold text-green-700">
                {" "}
                ${userData.cost}
              </span>
            </p>

            {!isPaid ? (
              <PaymentMethods onPaymentComplete={handlePaymentComplete} />
            ) : (
              <div className="text-center">
                <p className="text-green-600 font-semibold mb-4">
                  Payment successful! You can now download your certificate.
                </p>
                <PDFDownloadLink
                  document={
                    <Certificate
                      name={userData.name}
                      examTitle={userData.title}
                      scorePercentage={Number(userData.scorePercentage)}
                    />
                  }
                  fileName="exam_certificate.pdf"
                >
                  {({ loading }: { loading: boolean }) =>
                    loading ? (
                      <>Loading document...</>
                    ) : (
                      <Button className="bg-green-600 hover:bg-green-700 text-white">
                        {t("exams.download_certificate")}
                      </Button>
                    )
                  }
                </PDFDownloadLink>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
