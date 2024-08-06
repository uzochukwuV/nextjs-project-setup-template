
import { LoginForm } from "@/components/specs/auth"
import { capitalize } from "@/lib/utils"
import dynamic from "next/dynamic"


function Page() {
    const Button = dynamic(()=> import("@/components/ui/Button"))
  return (
    <div>Page
        {capitalize("vernom")}
        <Button />
    </div>
  )
}

export default Page