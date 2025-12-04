import { Suspense } from "react";
import { ApiDocsInterface } from "@/components/api-docs-interface";

export default function ApiDocsPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ApiDocsInterface />
    </Suspense>
  );
}
