// Interfaces 

// definição 
interface Game {
    title: string
}

interface DLC {
    extra: string
}

// intersection / extend

interface GameCollection extends Game, DLC {}

// implements

class CreateGame implements  GameCollection {}

// declarar função 
interface getSimilars {
    (title: string): void
}

//  ==================== Diferenças ================================ // 

interface ID extends number {}

interface Tuple {
    0: number
    1: number
}

[1, 2, 3, 4, "foo"] as Tuple

// Pode ter multiplas declarações e ele une de mesmo nome

interface Jquery {
    a: string
}

interface Jquery {
    b: string
}

const $: Jquery = {
    a: "bla",
    b: "foo",
}

// vantagem: quando tiver criando libs, prefira interfaces, porque são mais entensíveis!

// criando objetos/classes (POO)
