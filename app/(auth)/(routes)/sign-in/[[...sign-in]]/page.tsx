import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="w-full flex justify-center">
      <SignIn 
        appearance={{
          elements: {
            rootBox: "w-auto max-w-sm",
            card: "bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-2xl",
            headerTitle: "text-white font-semibold text-lg",
            headerSubtitle: "text-gray-300 text-sm",
            socialButtonsBlockButton: "bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-colors rounded-xl",
            socialButtonsBlockButtonText: "text-white font-medium",
            dividerLine: "bg-white/20",
            dividerText: "text-gray-300 text-xs",
            formButtonPrimary: "bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-medium rounded-xl shadow-lg transition-all duration-200 transform hover:scale-[1.02]",
            formFieldInput: "bg-white/10 border border-white/20 text-white placeholder:text-gray-400 rounded-xl focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all",
            formFieldLabel: "text-gray-300 font-medium text-sm",
            identityPreviewText: "text-gray-300",
            identityPreviewEditButton: "text-purple-400 hover:text-purple-300",
            footerActionText: "text-gray-400 text-xs",
            footerActionLink: "text-purple-400 hover:text-purple-300 font-medium",
          },
        }}
        signUpUrl="/auth/sign-up"
      />
    </div>
  );
}