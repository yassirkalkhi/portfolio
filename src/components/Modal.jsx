import { Button } from "../components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "../components/ui/dialog";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";

export default function Modal() {
  const [isContacted, setIsContacted] = useState(false);
  const formRef = useRef();

  const sendEmail = () => {
    const uid = import.meta.env.VITE_USER_ID;
    const serviceID = import.meta.env.VITE_SERVICE_ID;
    const templateID = import.meta.env.VITE_TEMPLATE_ID;
    emailjs.sendForm(serviceID, templateID, formRef.current, uid).then(
      (result) => {
        setIsContacted(true);
      },
      (error) => {
        console.log("FAILED...", error.text);
      }
    );
  };

  return (
    <Dialog>
      {!isContacted && (
        <DialogTrigger asChild>
          <Button variant="outline">Contact</Button>
        </DialogTrigger>
      )}

      <DialogContent className="max-w-[330px] rounded-xl sm:max-w-[425px] ">
        <DialogHeader>
          <DialogTitle className="text-2xl">Reach Me !! </DialogTitle>
          <DialogDescription className="text-white/60">I’d love to hear from you!</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 pb-4">
          <form action="" ref={formRef}>
            <div>
              <Label htmlFor="name" className="text-right text-white">
                Email
              </Label>
            </div>

            <div className="grid grid-cols-3 items-center gap-4">
              <Input
                name="user_email"
                id="name"
                className="col-span-3 text-white my-2 border-white/20 placeholder:text-white/60"
                placeholder="email@example.com"
              />
            </div>
            <div>
              <Label htmlFor="name" className="text-right text-white">
                Message
              </Label>
            </div>

            <div className="grid grid-cols-3    items-center gap-4">
              <textarea
                rows={5}
                id="username"
                name="message"
                className="col-span-3 text-white bg-transparent border rounded p-3 border-white/20 focus:outline-0  placeholder:text-white/60 placeholder:text-sm  h-[5] resize-none mt-2"
                placeholder="Type your message here ...  "
              />
            </div>
          </form>
        </div>
        <DialogFooter>
          <DialogClose>
            <Button type="button" onClick={sendEmail} variant="outline">
              Send
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}