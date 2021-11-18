const len = 10
const tab: Array<number> | number[] = Array(len)

//ajout de nombres alea au tableau
for (let i = 0; i < len; i++) {
    tab[i] = Math.round(Math.random() * 10)
}
//tri du tableau ordre croissant; ordre décroissant contraire
const logiqueDeTri = ((a: number, b: number) => {
    return b - a
})

//tab.sort(logiqueDeTri)
//console.log("le tableau =", tab)

function triCustom() {
    const nbBuckects: number = 256
    const prefixSums: Array<number> = Array(nbBuckects)
    const output: Array<number> = Array(len)

    for (let j = 0; j < nbBuckects; j++) prefixSums[j] = 0
    for (let j = 0; j < len; j++) prefixSums[tab[j]]++
    for (let j = 0; j < nbBuckects; j++) prefixSums[j] += prefixSums[j - 1]
    for (let j = 0; j < len; j--) {
        const v = tab[j]
        const outputIdx = --prefixSums[v]
        output[outputIdx] = v
    }
}

/**
 * calcul du temps de traitement
 */
// function bench(): number {
//     const debut: number = Date.now()
//     const ret: Array<number> = tab.sort(logiqueDeTri)
//     return Date.now() - debut
// }

// console.log('bench =>',bench())

const problemesFaciles : { [objectifs:string]:Array<string>} = {
    "": ['bla', "bl", "a"], //true
    "abcdef": ["ab", "abc", "cd", "def", "abcd"], //true
    "skateboard": ["bo", "rd", "ate", "t", "ska", "sk", "boar"], //false
    "enterapotentpot": ["a", "p", "ent", "enter", "ot", "o", "t"], //true
}

const problemeDifficile : { [objectifs:string]:Array<string>} = {
    "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef" : [
        "e",
        "ee",
        "eee",
        "eeee",
        "eeeee",
        "eeeeee"
    ] //false
}

type ConstructionPossible
    = (objectif: string, alphabet: Array<string>) => boolean

const constructionPossible : ConstructionPossible
    = (objectif: string, alphabet:Array<string>, memo:{ [objectif:string]:boolean} = {}): boolean => {
    if(objectif in memo){
        return memo[objectif]
    }
    if(objectif === ""){
        memo[objectif] = true
        return true
    }
    for(let element of alphabet){
        if(objectif.indexOf(element) === 0){
            const reste = objectif.slice(element.length)
            if( constructionPossible(reste, alphabet)) {
                memo[objectif] = true
                return true
            }
        }
    }
    memo[objectif] = false
    return false
}

function bench(problemes:{[p:string]:Array<string>}) {
    for (const objectif in problemes){
        const alphabet = problemes[objectif]
        console.log(`"${objectif}" -> ${constructionPossible(objectif,alphabet)}`)
    }
}