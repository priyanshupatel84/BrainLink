export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full flex justify-center items-center">
      {children}
    </div>
  );
}

// this page is made to appear {signIn and signUp form } at center of the page
