import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

const contactSchema = z.object({
  email: z.string().trim().email({ message: "Nieprawidłowy adres email" }).max(255, { message: "Email za długi" }),
  message: z.string().trim().min(1, { message: "Wiadomość nie może być pusta" }).max(1000, { message: "Wiadomość może mieć maksymalnie 1000 znaków" })
});

type ContactFormValues = z.infer<typeof contactSchema>;

export const ContactFormDialog = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      email: "",
      message: ""
    }
  });

  const onSubmit = (data: ContactFormValues) => {
    const whatsappMessage = `Email: ${data.email}%0AWiadomość: ${encodeURIComponent(data.message)}`;
    window.open(`https://wa.me/48790798993?text=${whatsappMessage}`, '_blank');
    
    toast({
      title: "Przekierowanie do WhatsApp",
      description: "Otwieramy WhatsApp z Twoją wiadomością"
    });
    
    setOpen(false);
    form.reset();
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Formularz kontaktowy</DialogTitle>
          <DialogDescription>
            Wypełnij formularz, a następnie wyślemy Twoją wiadomość przez WhatsApp
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="twoj@email.pl" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Treść wiadomości</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Opisz, w czym mogę Ci pomóc..."
                      className="min-h-[120px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">
              Wyślij wiadomość
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
