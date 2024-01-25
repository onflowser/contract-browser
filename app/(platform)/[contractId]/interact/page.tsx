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

    return (
        <iframe
            className="w-full h-[80vh]"
            src={`http://localhost:3000/${currentNetwork}`}
        />
    )
}
