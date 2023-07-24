import SignUp from "@/components/reddit/SignUp";
import { buttonVariants } from "@/components/reddit/ui/Button";
import { cn } from "@/lib/reddit/utils";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div className="absolute inset-0">
      <div className="h-full max-w-2xl mx-auto flex flex-col items-center justify-center gap-20">
        <Link
          href="/reddit"
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "self-start -mt-20"
          )}
        >
          <ChevronLeft className="mr-2 h-4 w-4" />
          Home
        </Link>

        <SignUp />
      </div>
    </div>
  );
};

export default page;
