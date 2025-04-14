// import Hero from "@/components/hero";
// import ConnectSupabaseSteps from "@/components/tutorial/connect-supabase-steps";
// import SignUpUserSteps from "@/components/tutorial/sign-up-user-steps";
// import { hasEnvVars } from "@/utils/supabase/check-env-vars";

// export default async function Home() {
//   return (
//     <>
//       <Hero />
//       <main className="flex-1 flex flex-col gap-6 px-4">
//         <h2 className="font-medium text-xl mb-4">Next steps</h2>
//         {hasEnvVars ? <SignUpUserSteps /> : <ConnectSupabaseSteps />}
//       </main>
//     </>
//   );
// }

// pages/homepage.tsx

const Homepage = () => {
  return (
    <div className="flex flex-col min-h-screen">

      <main className="flex flex-1 items-center justify-center px-4 sm:px-6 lg:px-8 bg-background text-foreground">
        <div className="text-center max-w-2xl">
          <h1 className="text-3xl sm:text-5xl font-bold mb-4">
            Welcome to <span className="text-primary">Memori</span>
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground">
            Collect and cherish memories together — wherever, whenever.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Homepage;
