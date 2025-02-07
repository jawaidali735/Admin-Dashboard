// "use client";

// import { useAuth } from "@clerk/nextjs";
// import { useRouter } from "next/navigation";
// import { useEffect } from "react";

// export default function AuthRedirect() {
//     const { isSignedIn, isLoaded } = useAuth();
//     const router = useRouter();

//     useEffect(() => {
//         if (isLoaded && !isSignedIn) {
//             router.replace("/sign-in"); // 🔥 Directly sign-in page pe bhejo
//         }
//     }, [isSignedIn, isLoaded, router]);

//     // Jab tak Clerk ka auth load nahi hota, kuch bhi render mat karo
//     if (!isLoaded) {
//         return null;
//     }

//     return null;
// }
