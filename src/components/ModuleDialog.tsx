import React from 'react'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog'
import { Button } from './ui/button'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'

export default function ModuleDialog() {
  return (
    <Dialog>
    <DialogTrigger asChild>
      <Button>Create Module</Button>
    </DialogTrigger>
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Create Module</DialogTitle>
        <DialogDescription>Enter details about the new module you want to create.</DialogDescription>
      </DialogHeader>
      <div className="grid gap-4 py-4">
        <div className="grid items-center grid-cols-4 gap-4">
          <Label htmlFor="module-name" className="text-right">
            Module Name
          </Label>
          <Input id="module-name" placeholder="Enter module name..." className="col-span-3" />
        </div>
        <div className="grid items-center grid-cols-4 gap-4">
          <Label htmlFor="module-details" className="text-right">
            Module Description
          </Label>
          <Textarea id="module-details" placeholder="Enter module description..." className="col-span-3 h-24" />
        </div>
      </div>
      <DialogFooter>
        <Button type="submit">Create Module</Button>
        <div>
          <Button variant="outline">Cancel</Button>
        </div>
      </DialogFooter>
    </DialogContent>
  </Dialog>

  )
}
