// app/(auth)/test-signin/page.tsx
"use client";
import { useSignUp, useSignIn } from "@clerk/nextjs";
import React from "react";

export default function TestSignInPage() {
  const { signUp } = useSignUp();
  const { signIn } = useSignIn();

  const handleTestRegisterAndSignIn = async () => {
    // Register
    if (!signUp) {
      alert("signUp is not available.");
      return;
    }
    const signUpResp = await signUp.create({ emailAddress: "patelanshu702+clerk_test@gmail.com" });
    const emailAddress = signUpResp.emailAddress;
    await signUp.prepareEmailAddressVerification({ strategy: "email_code" });
    await signUp.attemptEmailAddressVerification({ code: "424242" });

    // Sign in
    if (!signIn) {
      alert("signIn is not available.");
      return;
    }
    const signInResp = await signIn.create({ identifier: "patelanshu702+clerk_test@gmail.com" });
    const emailCodeFactor = signInResp.supportedFirstFactors?.find(
      (ff) => ff.strategy === "email_code"
    );
    if (!emailCodeFactor || !emailCodeFactor.emailAddressId) {
      alert("Email code factor not found for sign in.");
      return;
    }
    const signInEmailId = emailCodeFactor.emailAddressId;
    await signIn.prepareFirstFactor({ strategy: "email_code", emailAddressId: signInEmailId });
    await signIn.attemptFirstFactor({ strategy: "email_code", code: "424242" });

    alert("Test user registered and signed in!");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <button
        onClick={handleTestRegisterAndSignIn}
        className="px-6 py-3 bg-purple-600 text-white rounded-lg shadow"
      >
        Register & Sign In Test User
      </button>
    </div>
  );
}