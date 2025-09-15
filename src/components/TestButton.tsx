import { Button } from "./ui/button/button"

export function TestButton() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1 className="text-2xl font-bold">Testing shadcn/ui Button</h1>
      <Button>Click me</Button>
      <Button variant="secondary">Secondary Button</Button>
      <Button variant="destructive">Destructive Button</Button>
    </div>
  )
} 