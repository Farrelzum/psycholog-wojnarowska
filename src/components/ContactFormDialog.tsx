import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const contactSchema = z.object({
  email: z.string().trim().email({ message: "Nieprawidłowy adres email" }).max(255, { message: "Email za długi" }),
  phone: z.string().trim().max(20, { message: "Numer telefonu może mieć maksymalnie 20 znaków" }).optional(),
  message: z.string().trim().min(1, { message: "Wiadomość nie może być pusta" }).max(1000, { message: "Wiadomość może mieć maksymalnie 1000 znaków" }),
  gdprConsent: z.boolean().refine(val => val === true, { message: "Zgoda RODO jest wymagana" })
});

type ContactFormValues = z.infer<typeof contactSchema>;

export const ContactFormDialog = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      email: "",
      phone: "",
      message: "",
      gdprConsent: false
    }
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    
    try {
      const { error } = await supabase.functions.invoke('send-contact-email', {
        body: {
          email: data.email,
          phone: data.phone,
          message: data.message
        }
      });

      if (error) throw error;

      toast({
        title: "Wiadomość wysłana!",
        description: "Dziękuję za wiadomość. Odpowiem najszybciej jak to możliwe."
      });
      
      setOpen(false);
      form.reset();
    } catch (error) {
      console.error("Błąd wysyłania wiadomości:", error);
      toast({
        title: "Błąd",
        description: "Nie udało się wysłać wiadomości. Spróbuj ponownie.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
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
            Wypełnij formularz, a odpowiem na Twojego maila
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
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Numer telefonu (opcjonalnie)</FormLabel>
                  <FormControl>
                    <Input placeholder="+48 123 456 789" {...field} />
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
            <FormField
              control={form.control}
              name="gdprConsent"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel className="text-sm font-normal">
                      Wyrażam zgodę na przetwarzanie moich danych osobowych przez Barbarę Wojnarowską – psychologa, w celu realizacji kontaktu oraz umówienia wizyty, zgodnie z Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 (RODO). Zostałam/em poinformowana/y, że mam prawo do wglądu, poprawiania i usunięcia swoich danych.
                    </FormLabel>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Wysyłanie..." : "Wyślij wiadomość"}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
