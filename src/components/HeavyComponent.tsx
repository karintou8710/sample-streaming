import { timer } from "@/libs/utils";

export async function HeavyComponent() {
  await timer(5000);

  return (
    <div>
      <p>Heavy Component</p>
    </div>
  );
}
