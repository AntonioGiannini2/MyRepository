using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello world!");
            Console.WriteLine("Quanti anni hai?");
            string età = Console.ReadLine();
            int etàIntera;

            try
            {
                etàIntera = Convert.ToInt32(età);
            }
            catch (Exception)
            {
                Console.WriteLine("Attenzione! Hai sbagliato a scrivere l'età. Inseriscila di nuovo:");
                età = Console.ReadLine();
                try
                {
                    etàIntera = Convert.ToInt32(età);
                }
                catch (Exception)
                {
                    Console.WriteLine("Capisco che non sei nato digital ma fatti un corso...");
                    throw;
                }
                
                throw;
            }



            if (etàIntera > 50)
            {
                Console.WriteLine("Ti stai appropinquando alla vecchiaia (a grandi passi)");
            }
            else if (etàIntera > 44 && etàIntera <= 50)
            {
                Console.WriteLine("Stai trapassando...");
            }
            else
            {
                Console.WriteLine("Godi la vita che sei giovane (ancora...)");
            }

            Console.WriteLine("Grazie!");
            Console.ReadLine();
        }
    }
}
