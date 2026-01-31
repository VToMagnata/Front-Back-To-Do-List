import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Plus,
  List,
  CircleMinus,
  Check,
  SquarePen,
  Trash,
  ListChecks,
  Sigma,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Home = () => {
  return (
    <main className="w-full h-screen bg-white flex justify-center items-center">
      <Card className="w-lg flex flex-col gap-4 p-4">
        <CardHeader className="flex gap-2">
          <Input placeholder="Adicionar tarefa" className="w-lg" />
          <Button>
            <Plus />
            Cadastrar
          </Button>
        </CardHeader>

        <CardContent className="px-0">
          <Separator className="mb-2" />
          <span className="flex gap-2 mb-4">
            <Badge className="cursor-pointer" variant="outline">
              <List />
              Todas
            </Badge>
            <Badge className="cursor-pointer" variant="outline">
              <CircleMinus />
              Não finalizadas
            </Badge>
            <Badge className="cursor-pointer" variant="outline">
              <Check />
              Concluidas
            </Badge>
          </span>

          <div className="">
            <div className=" h-12 flex items-center justify-between border-t-1 border-b-1">
              <aside className="w-1 h-[80%] bg-green-300"></aside>
              <p className=" flex-1 px-2 text-sm">Estudar react</p>
              <span className="flex items-center gap-2">
                <SquarePen size={15} className="cursor-pointer" />{" "}
                <Trash size={16} className="cursor-pointer" />
              </span>
            </div>
          </div>
          <div>
            <div className=" h-12 flex items-center justify-between border-t-1 border-b-1">
              <aside className="w-1 h-[80%] bg-green-300"></aside>
              <p className=" flex-1 px-2 text-sm">Estudar react</p>
              <span className="flex items-center gap-2">
                <Dialog>
                  <DialogTrigger>
                    <SquarePen size={15} className="cursor-pointer" />{" "}
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Editar tarefa</DialogTitle>
                    </DialogHeader>

                    <span className="flex gap-2">
                      <Input />
                      <Button className="cursor-pointer">Editar</Button>
                    </span>
                  </DialogContent>
                </Dialog>
                <Trash size={16} className="cursor-pointer" />
              </span>
            </div>
          </div>
          <div className="">
            <div className=" h-12 flex items-center justify-between border-t-1 border-b-1">
              <aside className="w-1 h-[80%] bg-green-300"></aside>
              <p className=" flex-1 px-2 text-sm">Estudar react</p>
              <span className="flex items-center gap-2">
                <SquarePen size={15} className="cursor-pointer" />{" "}
                <Trash size={16} className="cursor-pointer" />
              </span>
            </div>
          </div>

          <div className="flex justify-between mt-2">
            <div className="flex items-center gap-2">
              <ListChecks size={16} />
              <p className="text-xs">Tarefas concluidas (3/3)</p>
            </div>

            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button className="text-xs h-7" variant="outline">
                  {" "}
                  <Trash /> Limpar tarefas concluídas
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    Tem certeza que deseja excluir X itens?
                  </AlertDialogTitle>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogAction className="bg-blue-500 text-white">
                    Sim
                  </AlertDialogAction>
                  <AlertDialogCancel variant="outline">
                    Cancelar
                  </AlertDialogCancel>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>

          <div className="h-2 bg-gray-100 w-full mt-4 rounded-md mb-2">
            <div
              className="h-full bg-blue-500 rounded-md"
              style={{ width: "50%" }}
            ></div>
          </div>

          <div className="flex justify-end items-center gap-2">
            <Sigma size={14} />
            <p className="text-xs">3 tarefas no total</p>
          </div>
        </CardContent>
      </Card>
    </main>
  );
};

export default Home;
