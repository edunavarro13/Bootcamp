using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1
{
    class Calculadora
    {
        public double valor { get; set; }
        public Calculadora()
        {
            valor = 0.0;
        }
        public int operar(int operacion, int num1, int num2)
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
    }
}
