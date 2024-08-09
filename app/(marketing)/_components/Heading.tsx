"use client";
import { Spinner } from "@/components/spinner";
import { Button } from "@/components/ui/button";
import { useConvexAuth } from "convex/react";
import React from "react";
import  Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SignInButton } from "@clerk/nextjs";



const Heading = () => {
  const { isAuthenticated , isLoading} = useConvexAuth();
  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        Your Ideas, Documents, & Plans.Unified. Welcome to<span className="underline">Notion</span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        Connect with your team, share ideas, and collaborate on projects. Experience the power of a modern, flexible workspace.
        <br />
        <span className="text-sm">Try Notion for free forever</span>
      </h3>
      {isLoading && (
        <div className="flex items-center justify-center w-full h-full">
                  <Spinner size="lg" />
                </div>
        
      )}
      {isAuthenticated && !isLoading && (
      <Button asChild>
        <Link href="/documents"> 
          Get Started
          <ArrowRight className="h-4 w-4 ml-2"/>

        </Link>
  
      </Button>

      )}
      {!isAuthenticated &&!isLoading && (
        <SignInButton mode="modal">
          <Button>
            Get Notion free
            <ArrowRight className="h-4 w-4 ml-2"/>
          </Button>

        </SignInButton>

      )}
      
    </div>
  );
};

export default Heading;
