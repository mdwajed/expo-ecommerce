import {
    SignInButton,
    SignUpButton,
    SignedIn,
    SignedOut,
    UserButton,
} from '@clerk/nextjs'
export default function Home() {
  return (
      <div>
          <header className="flex justify-end items-center p-4 gap-4 h-16">
              <SignedOut>
                  <SignInButton mode={"modal"}/>
                  <SignUpButton>
                      <button className="bg-[#6c47ff] text-ceramic-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
                          Sign Up
                      </button>
                  </SignUpButton>
              </SignedOut>
              <SignedIn>
                  <UserButton />
              </SignedIn>
          </header>
          <h1 className="text-3xl font-bold text-yellow-700 flex justify-center">
              Home page
          </h1>
      </div>
  );
}
