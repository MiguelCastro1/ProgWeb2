# you can write to stdout for debugging purposes, e.g.
# print("this is a debug message")
def solution(S):
    achou = False
    maiorMin = 'a'
    maiorMas = 'A'

    for letra in S:
      if(letra.islower()):
        if(letra > maiorMin and letra.upper() in S):
          achou = True
          maiorMin = letra
          maiorMas = letra.upper()
      else:
        if(letra > maiorMas and letra.lower() in S):
          achou = True
          maiorMin = letra.lower()
          maiorMas = letra
      
    if(not achou):
      return "NO"
    else:
      return maiorMas

S = input()
print(solution(S))