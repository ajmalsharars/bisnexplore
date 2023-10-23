"use client";
import { useEffect } from "react";
import { getSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const SessionCheck = () => {
  const router = useRouter();

  useEffect(() => {
    const checkSession = async () => {
      const session = await getSession();
      if (session) {
        router.push("/completeregister"); // Redirect to the dashboard page if the user is logged in
      }
    };

    checkSession();
  }, [router]);

  return <></>;
};

export default SessionCheck;
