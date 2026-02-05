"use client";

import { uptadeTaskText } from "@/actions/edit-task";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./dialog";
import { SquarePen } from "lucide-react";
import { Input } from "./input";
import { Button } from "./button";
import { useState } from "react";

type Props = {
  id: string;
  onUpdated: () => void;
};

const EditTask = ({ id, onUpdated }: Props) => {
  const [value, setValue] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);

  async function handleSubmit() {
    if (!value.trim()) return;

    await uptadeTaskText(id, value);

    onUpdated();
    setOpen(false);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <SquarePen size={15} className="cursor-pointer" />{" "}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Editar tarefa</DialogTitle>
        </DialogHeader>

        <span className="flex gap-2">
          <Input value={value} onChange={(e) => setValue(e.target.value)} />
          <Button onClick={handleSubmit} className="cursor-pointer">
            Editar
          </Button>
        </span>
      </DialogContent>
    </Dialog>
  );
};

export default EditTask;
