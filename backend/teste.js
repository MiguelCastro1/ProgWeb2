let vet = [3,4,5,1,2,6,7,9,8,0];

console.log(vet);

for(let i = 1; i < 10; i++){
    let chave = vet[i];
    let j = i - 1;
    while(j >= 0 && vet[j] > chave){
        vet[j + 1] = vet[j];
        j = j -1;
    }
    vet[j + 1] = chave;
}

console.log(vet);