/**
 * v0 by Vercel.
 * @see https://v0.dev/t/p7RJLL1DRDP
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full">
      <aside className="bg-background border-r px-4 py-6 flex flex-col gap-6">
        <Link
          href="#"
          className="flex items-center gap-2 text-lg font-semibold"
          prefetch={false}
        >
          <LayoutGridIcon className="w-6 h-6" />
          <span>Dashboard</span>
        </Link>
        <Button className="flex items-center gap-2">
          <PlusIcon className="w-5 h-5" />
          <span>Add Project</span>
        </Button>
        <nav className="flex flex-col gap-2">
          <Link
            href="#"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
            prefetch={false}
          >
            <LayoutGridIcon className="w-5 h-5" />
            <span>Projects</span>
          </Link>
          <Link
            href="#"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
            prefetch={false}
          >
            <UsersIcon className="w-5 h-5" />
            <span>Team</span>
          </Link>
          <Link className="hidden" href="#" prefetch={false}>
            <CalendarIcon className="w-5 h-5" />
            <span>Calendar</span>
          </Link>
          <Link
            href="#"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
            prefetch={false}
          >
            <FileTextIcon className="w-5 h-5" />
            <span>Reports</span>
          </Link>
        </nav>
      </aside>
      <main className="flex-1 bg-muted/40 p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Projects</h1>
          <Button className="flex items-center gap-2">
            <PlusIcon className="w-5 h-5" />
            <span>New Project</span>
          </Button>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <Card className="relative group">
            <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
              <span className="sr-only">View project</span>
            </Link>
            <CardHeader>
              <div className="flex items-center gap-2">
                <LayoutGridIcon className="w-6 h-6" />
                <CardTitle>Project A</CardTitle>
              </div>
              <Badge variant="secondary">In Progress</Badge>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <UsersIcon className="w-4 h-4" />
                <span>3 team members</span>
              </div>
            </CardContent>
            <CardFooter>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CalendarIcon className="w-4 h-4" />
                <span>Due in 2 weeks</span>
              </div>
            </CardFooter>
          </Card>
          <Card className="relative group">
            <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
              <span className="sr-only">View project</span>
            </Link>
            <CardHeader>
              <div className="flex items-center gap-2">
                <LayoutGridIcon className="w-6 h-6" />
                <CardTitle>Project B</CardTitle>
              </div>
              <Badge variant="secondary">In Progress</Badge>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <UsersIcon className="w-4 h-4" />
                <span>5 team members</span>
              </div>
            </CardContent>
            <CardFooter>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CalendarIcon className="w-4 h-4" />
                <span>Due in 1 month</span>
              </div>
            </CardFooter>
          </Card>
          <Card className="relative group">
            <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
              <span className="sr-only">View project</span>
            </Link>
            <CardHeader>
              <div className="flex items-center gap-2">
                <LayoutGridIcon className="w-6 h-6" />
                <CardTitle>Project C</CardTitle>
              </div>
              <Badge variant="outline">Completed</Badge>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <UsersIcon className="w-4 h-4" />
                <span>2 team members</span>
              </div>
            </CardContent>
            <CardFooter>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CalendarIcon className="w-4 h-4" />
                <span>Completed 2 weeks ago</span>
              </div>
            </CardFooter>
          </Card>
          <Card className="relative group">
            <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
              <span className="sr-only">View project</span>
            </Link>
            <CardHeader>
              <div className="flex items-center gap-2">
                <LayoutGridIcon className="w-6 h-6" />
                <CardTitle>Project D</CardTitle>
              </div>
              <Badge variant="outline">Completed</Badge>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <UsersIcon className="w-4 h-4" />
                <span>4 team members</span>
              </div>
            </CardContent>
            <CardFooter>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CalendarIcon className="w-4 h-4" />
                <span>Completed 1 month ago</span>
              </div>
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  );
}

function CalendarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  );
}

function FileTextIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M10 9H8" />
      <path d="M16 13H8" />
      <path d="M16 17H8" />
    </svg>
  );
}

function LayoutGridIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="7" height="7" x="3" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="14" rx="1" />
      <rect width="7" height="7" x="3" y="14" rx="1" />
    </svg>
  );
}

function PlusIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}

function UsersIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
