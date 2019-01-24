using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1
{
    class Program
    {
        public static int operar(int operacion, int num1, int num2)
        {
            const int SUMA = 1;
            const int RESTA = 2;
            const int MULT = 3;
            const int DIV = 4;
            const int ERROR = -1;
            if (operacion == SUMA)
                return num1 + num2;
            else if (operacion == RESTA)
                return num1 - num2;
            else if (operacion == MULT)
                return num1 * num2;
            else if (operacion == DIV)
                return num1 / num2;
            else
                return ERROR;
        }

        static void Main(string[] args)
        {
            //const int TAMARRAY = 11;
            //const int INICIOBUCLE = 0;
            //const int NUMMULTIPLICAR = 5;
            //int[] n = new int[TAMARRAY];
            //for (int i = INICIOBUCLE; i < n.Length; i++)
            //{
            //    n[i] = i * NUMMULTIPLICAR;
            //    Console.WriteLine(NUMMULTIPLICAR + " x " + i + " = " + n[i]);
            //}

            //string nombre = "Eduardo Navarro";
            //string dni = "56789F";
            //bool esVerda = true;
            //var nombreArr = nombre.Split(' '); // Deberia poner string []
            //string cadenaSinEsp = "1 2 3 4 5 6 7 8 9";
            //int? numeroNull = null;

            //Console.WriteLine(nombre.IndexOf("algo")); // Da -1
            //Console.WriteLine(esVerda); // Da True (con mayus la primera)
            //Console.WriteLine(dni.PadLeft(dni.Length + 3, '0')); // Da 00056789F
            //Console.WriteLine(cadenaSinEsp.Replace(" ", "")); // Da 123456789
            //Console.WriteLine(numeroNull); // Da 
            //Console.WriteLine(numeroNull.HasValue); // Da False

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
                    int obtencionProgram = operar(opcionEleg, num1, num2);
                    Console.WriteLine("Resultado = " + obtencionProgram);
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
