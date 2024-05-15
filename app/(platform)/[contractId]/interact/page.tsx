"use client";
import {useCurrentNetwork} from "@/hooks/useNetwork";
import Loading from "@/components/ui/Loading";

export default function InteractPage() {
    const currentNetwork = useCurrentNetwork();

    if (currentNetwork === null) {
        return (
            <div className="flex justify-center">
                <Loading />
            </div>
        )
    }

    const baseUrl = process.env.NODE_ENV === "development" 
        ? "http://localhost:3000"
        : "https://interact.flowser.dev";

    return (
        <iframe
            className="w-full h-[80vh] rounded-md"
            src={`${baseUrl}/${currentNetwork}`}
        />
    )
}
