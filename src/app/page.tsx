import { HeavyComponent } from "@/components/HeavyComponent";
import { Suspense } from "react";

export const revalidate = 0;

export default function Home() {
  return (
    <main className="p-4">
      <Suspense fallback={<p>Loading...</p>}>
        <HeavyComponent />
      </Suspense>
    </main>
  );
}
