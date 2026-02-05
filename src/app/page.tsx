"use client";

import { changeBoolean } from "@/actions/change-boolean";
import { deleteTask } from "@/actions/delete-task";
import { createTask } from "@/actions/create-task";
import { getTasks } from "@/actions/get-tasks-from-bd";
import EditTask from "@/components/ui/edit-taks";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Plus, List, CircleMinus, Check, Trash, Sigma } from "lucide-react";
import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";

type Task = {
  id: string;
  task: string;
  done: boolean;
};

type Filter = {
  all: boolean;
  notFinished: boolean;
  ready: boolean;
};

const Home = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [value, setValue] = useState("");
  const [filtru, setFiltru] = useState<Filter>({
    all: true,
    notFinished: false,
    ready: false,
  });

  const doneCount = tasks.filter((task) => task.done).length;
  const progress = tasks.length === 0 ? 0 : (doneCount / tasks.length) * 100;

  function activateFilter(filterName: keyof Filter) {
    setFiltru({
      all: false,
      notFinished: false,
      ready: false,
      [filterName]: true,
    });
  }

  const filteredTasks = tasks.filter((task) => {
    if (filtru.all) return true; // mostra todas
    if (filtru.notFinished) return task.done === false;
    if (filtru.ready) return task.done === true;
    return true; // fallback, caso nada esteja ativo
  });

  async function loadTasks() {
    const data = await getTasks();
    if (!data) return;
    setTasks(data);
  }

  useEffect(() => {
    loadTasks();
  }, []);

  async function handleCreate() {
    if (!value.trim()) return;

    await createTask(value);
    setValue("");

    setTasks(await getTasks());
  }

  return (
    <main className="w-full h-screen bg-white flex justify-center items-center">
      <Card className="w-lg flex flex-col gap-4 p-4">
        <CardHeader className="flex gap-2">
          <Input
            placeholder="Adicionar tarefa"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <Button onClick={handleCreate}>
            <Plus />
            Cadastrar
          </Button>
        </CardHeader>

        <CardContent className="px-0">
          <Separator className="mb-2" />

          <span className="flex gap-2 mb-4">
            <Badge
              variant="outline"
              className={`cursor-pointer ${filtru.all ? "bg-blue-500 text-white" : null}`}
              onClick={() => {
                activateFilter("all");
              }}
            >
              <List /> Todas
            </Badge>
            <Badge
              variant="outline"
              className={`cursor-pointer ${filtru.notFinished ? "bg-blue-500 text-white" : null}`}
              onClick={() => {
                activateFilter("notFinished");
              }}
            >
              <CircleMinus /> Não finalizadas
            </Badge>
            <Badge
              variant="outline"
              className={`cursor-pointer ${filtru.ready ? "bg-blue-500 text-white" : null}`}
              onClick={() => {
                activateFilter("ready");
              }}
            >
              <Check /> Concluídas
            </Badge>
          </span>

          {filteredTasks.map((task) => (
            <div
              onClick={async () => {
                await changeBoolean(task.id);
                loadTasks();
              }}
              key={task.id}
              className="h-12 flex items-center justify-between border-b cursor-pointer"
            >
              <aside
                className={`w-1 h-[80%] ${task.done ? "bg-green-300" : "bg-red-500"}`}
              ></aside>
              <p
                className={`flex-1 px-2 text-sm ${task.done ? "line-through" : null}`}
              >
                {task.task}
              </p>
              <span className="flex items-center gap-2">
                <EditTask id={task.id} onUpdated={loadTasks} />
                <Trash
                  size={16}
                  className="cursor-pointer"
                  onClick={async () => {
                    await deleteTask(task.id);
                    loadTasks();
                  }}
                />
              </span>
            </div>
          ))}

          <div className="h-2 bg-gray-100 w-full mt-4 rounded-md mb-2">
            <div
              className="h-full bg-blue-500 rounded-md"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          <div className="flex justify-between items-center gap-2 mt-2">
            <span>
              <p className="text-sm">
                Tarefas concluidas {doneCount}/{tasks.length}
              </p>
            </span>
            <span className="flex items-center gap-2">
              <Sigma size={14} />
              <p className="text-xs">{tasks.length} tarefas no total</p>
            </span>
          </div>
        </CardContent>
      </Card>
    </main>
  );
};

export default Home;
