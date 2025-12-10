import { GithubSigninButton } from "@/components/GithubSigninButton";

export default async function LoginPage() {
  return <div className="min-h-screen flex items-center justify-center">
    <div className="max-w-md w-full space-y-8">
        <div className="text-center">
            <h1 className="text-foreground font-bold text-3xl">Welcome </h1>
            <p className="text-muted mt-2">Sign in or create an account to continue.</p>
        </div>

        <div className="card p-8">
            <div className="space-y-6">
                <div className="text-center">
                    <p className="text-muted mb-6">Use your github account to signin or create account.</p>
                </div>
            </div>

            <GithubSigninButton />

            <div className="text-center mt-6">
                <p className="text-sm text-muted">By signing in. You agree to our terms of service and privacy policy.</p>
            </div>
        </div>
    </div>
  </div>;
}
