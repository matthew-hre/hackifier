"use client";

import { GradientPicker } from "@/components/GradientPicker";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";
import { PencilIcon } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
export default function ContentBox({
  children,
}: {
  children: React.ReactNode;
}) {
  const [background, setBackground] = useState<string>(
    "linear-gradient(to right, #6366f1, #8b5cf6"
  );

  return (
    <section
      className="py-12 md:py-20 lg:py-28 rounded-lg relative"
      style={{ background }}
    >
      {/* <Sheet>
        <SheetTrigger>
          <Button
            variant="default"
            className="absolute top-4 left-4 rounded-full w-min h-min p-3 hover:bg-black hover:bg-opacity-10"
          >
            <PencilIcon className="w-6 h-6" />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Page Customization</SheetTitle>
            <SheetDescription>
              Customize the appearance of this section.
            </SheetDescription>
          </SheetHeader>
          <p className="mt-8 mb-2">Page Layout</p>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a Layout" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Layouts</SelectLabel>
                <SelectItem value="apple">CTA with Image</SelectItem>
                <SelectItem value="banana">CTA</SelectItem>
                <SelectItem value="blueberry">Calendar</SelectItem>
                <SelectItem value="grapes">Speakers</SelectItem>
                <SelectItem value="pineapple">Content with Image</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <p className="mt-4 mb-2">Section Title</p>
          <Input
            id="section-title"
            placeholder="Enter a title"
            className="w-full h-8 mt-2"
          />
          <p className="mt-4 mb-2">Section Description</p>
          <Textarea
            id="section-description"
            placeholder="Enter a description"
            className="w-full h-16 mt-2 mb-4"
          />
          <p className="mt-4 mb-2">Primary Color</p>
          <GradientPicker background={"#fff"} setBackground={setBackground} />
          <p className="mt-4 mb-2">Background Color</p>
          <GradientPicker
            background={background}
            setBackground={setBackground}
          />
          <p className="mt-4 mb-2">Accent Color</p>
          <GradientPicker background={"#eee"} setBackground={setBackground} />
        </SheetContent>
      </Sheet> */}
      {children}
    </section>
  );
}
