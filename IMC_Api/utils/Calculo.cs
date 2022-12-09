namespace IMC_Api.utils
{
    public class Calculo
    {
        public static double CalcularIMC(double Peso, double Altura) => Peso / (Altura * Altura);


        public static string ClassificacaoImc(double imc)
        {
            switch (imc)
            {
                case < 18.5:
                    return "Magreza";
                case < 25:
                    return "Normal";
                case < 30:
                    return "Sobrepeso";
                case < 40:
                    return "Obesidade";
                default:
                    return "Obesidade grave";
            }

        }
    }
}