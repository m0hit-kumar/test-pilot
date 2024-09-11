/**
 * v0 by Vercel.
 * @see https://v0.dev/t/owWQ1jHO4yV
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Module() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("date");
  const [createType, setCreateType] = useState("item");
  const items = [
    {
      id: 1,
      name: "Item 1",
      date: "2023-06-01",
      description:
        "This is a long description for Item 1. It should wrap to multiple lines and provide more details about the item.",
    },
    {
      id: 2,
      name: "Item 2",
      date: "2023-05-15",
      description:
        "This is a long description for Item 2. It should wrap to multiple lines and provide more details about the item.",
    },
    {
      id: 3,
      name: "Item 3",
      date: "2023-07-01",
      description:
        "This is a long description for Item 3. It should wrap to multiple lines and provide more details about the item.",
    },
    {
      id: 4,
      name: "Item 4",
      date: "2023-04-30",
      description:
        "This is a long description for Item 4. It should wrap to multiple lines and provide more details about the item.",
    },
    {
      id: 5,
      name: "Item 5",
      date: "2023-06-15",
      description:
        "This is a long description for Item 5. It should wrap to multiple lines and provide more details about the item.",
    },
    {
      id: 6,
      name: "Item 6",
      date: "2023-05-01",
      description:
        "This is a long description for Item 6. It should wrap to multiple lines and provide more details about the item.",
    },
    {
      id: 7,
      name: "Item 7",
      date: "2023-07-15",
      description:
        "This is a long description for Item 7. It should wrap to multiple lines and provide more details about the item.",
    },
    {
      id: 8,
      name: "Item 8",
      date: "2023-04-01",
      description:
        "This is a long description for Item 8. It should wrap to multiple lines and provide more details about the item.",
    },
  ];
  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const sortedItems = filteredItems.sort((a, b) => {
    if (sortBy === "date") {
      return new Date(b.date) - new Date(a.date);
    } else if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    }
  });
  return (
    <div className="w-full  p-6">
      <h1 className="text-2xl font-bold mb-6">Modules</h1>
      <div className="flex items-center gap-4 mb-4">
        <Input
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="flex items-center gap-2">
              <ArrowUpDownIcon className="w-4 h-4" />
              Sort by
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuRadioGroup value={sortBy} onValueChange={setSortBy}>
              <DropdownMenuRadioItem value="date">Date</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="name">Name</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="flex items-center gap-2">
              <FolderPlusIcon className="w-4 h-4" />
              {createType === "item" ? "Create Item" : "Create Module"}
            </Button>   
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuRadioGroup
              value={createType}
              onValueChange={setCreateType}
            >
              <DropdownMenuRadioItem value="item">
                Create Item
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="module">
                Create Module
              </DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="grid gap-4">
        {sortedItems.map((item) => (
          <Card key={item.id}>
            <CardContent className="flex flex-col justify-between h-full">
              <div>
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  {item.description}
                </p>
              </div>
              <div className="text-sm text-muted-foreground flex justify-end">
                {new Date(item.date).toLocaleDateString()}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

function ArrowUpDownIcon(props) {
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
      <path d="m21 16-4 4-4-4" />
      <path d="M17 20V4" />
      <path d="m3 8 4-4 4 4" />
      <path d="M7 4v16" />
    </svg>
  );
}

function FolderPlusIcon(props) {
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
      <path d="M12 10v6" />
      <path d="M9 13h6" />
      <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
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
