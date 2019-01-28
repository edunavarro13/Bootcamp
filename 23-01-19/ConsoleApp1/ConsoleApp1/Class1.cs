using System;

/// <summary>
/// Summary description for Class1
/// </summary>

namespace ConsoleApp2
{
    public class Calculadora
    {
        public Calculadora()
        {
            //
            // TODO: Add constructor logic here
            //
        }
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
    }
}
