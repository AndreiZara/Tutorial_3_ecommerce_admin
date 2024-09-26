import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

export default async function SetupLayout ({
    children
}: {
    children: React.ReactNode;
}) {
    const { userId } = auth();

    if (!userId) {
        redirect('/sign-in');
    }

    const prismadb=createClient(cookies());
    const store = await prismadb.from("user").select();
    // .storage.findFirst({
    //     where: {
    //         userId   //or userId: userId
    //     }
    // });


    if (store) {
    //    redirect(`/${store.id}`);
    }

    return (
        <>
           {children} 
        </>
    );
};