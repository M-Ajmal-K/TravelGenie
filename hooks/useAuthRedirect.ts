"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { Session } from "@supabase/supabase-js";

export function useAuthRedirect() {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    supabase.auth.getSession().then(({ data }: { data: { session: Session | null } }) => {
      if (!data.session) {
        router.push("/login");
      } else {
        setLoading(false);
      }
    });
  }, []);

  return loading;
}
