using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1
{
    class Program
    {
        static void Main(string[] args)
        {
            bool salir = false;

            while (!salir)
            {
                Console.WriteLine("------- CALCULADORA --------");
                Console.WriteLine("Opcion 1 => SUMA");
                Console.WriteLine("Opcion 2 => RESTA");
                Console.WriteLine("Opcion 3 => MULTIPLICACION");
                Console.WriteLine("Opcion 4 => DIVISION");
                Console.WriteLine("Cualquier otra opcion => SALIR");
                try
                {
                    int opcionEleg = Int16.Parse(Console.ReadLine());
                    Console.WriteLine("Introduce el numero 1:");
                    int num1 = Int16.Parse(Console.ReadLine());
                    Console.WriteLine("Introduce el numero 2:");
                    int num2 = Int16.Parse(Console.ReadLine());
                    Calculadora calc = new Calculadora();
                    calc.valor = calc.operar(opcionEleg, num1, num2);
                    Console.WriteLine("Resultado = " + calc.valor);
                    Console.WriteLine("¿Quieres salir (y/n)?:");
                    string cadenaSalir = Console.ReadLine();
                    if (cadenaSalir.Equals("y"))
                        salir = true;
                } catch (Exception ex)
                {
                    salir = true;
                }
            }

            // Console.ReadKey(); // Esto es para que no se cierre
        }
    }
}
