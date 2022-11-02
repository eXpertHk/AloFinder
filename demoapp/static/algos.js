algos = [
    [],
    [
        [`class GFG
        {
         
        // Function to reduce a fraction to its lowest form
        static void reduceFraction(int x, int y)
        {
            int d;
            d = __gcd(x, y);
         
            x = x / d;
            y = y / d;
         
            System.out.println("x = " + x + ", y = " + y);
        }
         
        static int __gcd(int a, int b)
        {
            if (b == 0)
                return a;
            return __gcd(b, a % b);
             
        }
         
        // Driver Code
        public static void main(String[] args)
        {
            int x = 16;
            int y = 10;
         
            reduceFraction(x, y);
        }
        }
         `],[],[],[],[],[],[],[],[],[]
    ],
    [
        []
    ],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
]