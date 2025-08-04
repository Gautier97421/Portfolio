// app/page.tsx

import { Suspense } from "react"
import PortfolioRoot from "@/components/portfolio-root"

export default function Page() {
  return (
    <Suspense fallback={null}>
      <PortfolioRoot />
    </Suspense>
  )
}
