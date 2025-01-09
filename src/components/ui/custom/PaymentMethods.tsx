"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Lock, Shield } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

interface PaymentMethodsProps {
  onPaymentComplete: () => void;
}

export function PaymentMethods({ onPaymentComplete }: PaymentMethodsProps) {
  const { t } = useTranslation();
  const [selectedMethod, setSelectedMethod] = useState<string>("");
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePayment = () => {
    if (selectedMethod) {
      setIsProcessing(true);
      // Simulate payment process
      setTimeout(() => {
        onPaymentComplete();
        setIsProcessing(false);
      }, 1500);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-green-700">
          {t("exams.payment_methods")}
        </CardTitle>
        <CardDescription>Choose your preferred payment method</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-3">1. Payment methods</h3>
          <RadioGroup
            onValueChange={setSelectedMethod}
            className="grid grid-cols-4 gap-4"
          >
            {/* Credit Cards */}
            <Label
              htmlFor="credit-cards"
              className={`flex flex-col items-center justify-center p-4 border rounded-lg cursor-pointer hover:bg-green-100  transition-colors ${
                selectedMethod === "credit-cards"
                  ? "border-green-500 bg-green-100"
                  : ""
              }`}
            >
              <RadioGroupItem
                value="credit-cards"
                id="credit-cards"
                className="sr-only"
              />
              <div className="flex justify-center items-center gap-2 mb-2">
                <img
                  src="../../../../public/visa.svg"
                  alt="Visa"
                  className="h-5 content-contain"
                />
                <img
                  src="../../../../public/mastercard.svg"
                  alt="Mastercard"
                  className="w-[30%] content-contain"
                />
              </div>
              <span className="text-sm">Credit Cards</span>
            </Label>

            {/* PayPal */}
            <Label
              htmlFor="paypal"
              className={`flex flex-col items-center justify-center p-4 border rounded-lg cursor-pointer hover:bg-green-100  transition-colors ${
                selectedMethod === "paypal"
                  ? "border-green-500 bg-green-100"
                  : ""
              }`}
            >
              <RadioGroupItem value="paypal" id="paypal" className="sr-only" />
              <img
                src="../../../../public/paypal.svg"
                alt="PayPal"
                className="w-[30%] content-contain mb-2"
              />
              <span className="text-sm">PayPal</span>
            </Label>

            {/* Apple Pay */}
            <Label
              htmlFor="apple-pay"
              className={`flex flex-col items-center justify-center p-4 border rounded-lg cursor-pointer hover:bg-green-100  transition-colors ${
                selectedMethod === "apple-pay"
                  ? "border-green-500 bg-green-100"
                  : ""
              }`}
            >
              <RadioGroupItem
                value="apple-pay"
                id="apple-pay"
                className="sr-only"
              />
              <img
                src="../../../../public/apple-pay.svg"
                alt="Apple Pay"
                className="w-[30%] content-contain mb-2"
              />
              <span className="text-sm">Apple Pay</span>
            </Label>

            {/* Google Pay */}
            <Label
              htmlFor="google-pay"
              className={`flex flex-col items-center justify-center p-4 border rounded-lg cursor-pointer hover:bg-green-100 transition-colors ${
                selectedMethod === "google-pay"
                  ? "border-green-500 bg-green-100"
                  : ""
              }`}
            >
              <RadioGroupItem
                value="google-pay"
                id="google-pay"
                className="sr-only"
              />
              <img
                src="../../../../public/google-pay.svg"
                alt="Google Pay"
                className="w-[30%] content-contain mb-2"
              />
              <span className="text-sm">Google Pay</span>
            </Label>
          </RadioGroup>
        </div>

        {/* Security Certification */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">2. Security certification</h3>
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded">
              <Shield className="w-5 h-5 text-green-600" />
              <span className="text-sm">SSL Secured</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded">
              <Lock className="w-5 h-5 text-green-600" />
              <span className="text-sm">Safe Payment</span>
            </div>
          </div>
        </div>

        {/* Secure Privacy */}
        <div className="pt-4 border-t">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-green-600" />
            <span className="text-sm font-medium">Secure privacy</span>
          </div>
          <p className="text-sm text-gray-500 mt-1">
            Your payment information is encrypted and secure.
          </p>
        </div>
      </CardContent>
      <CardFooter>
        <Button
          onClick={handlePayment}
          disabled={!selectedMethod || isProcessing}
          className="w-full bg-green-600 hover:bg-green-700 text-white"
        >
          {isProcessing
            ? "Processing..."
            : `${t("exams.pay_and_download_certificate")}`}
        </Button>
      </CardFooter>
    </Card>
  );
}
