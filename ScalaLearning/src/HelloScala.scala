object Hello extends App {
    println("Hello, Scala")
    
    def fibonacci (n :Int): Int = n match {
      case 0 | 1 => n
      case _ => fibonacci(n - 1 ) + fibonacci( n - 2)
    }
    
    println (fibonacci(10))
}